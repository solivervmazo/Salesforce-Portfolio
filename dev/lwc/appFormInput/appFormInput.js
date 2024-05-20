import { LightningElement, api } from "lwc";
import textTemplate from "./inputText";
import checkboxTemplate from "./inputCheckbox";
import selectTemplate from "./inputSelect";
import fileTemplate from "./inputFile";
import avatarTemplate from "./inputAvatar";
import dateTemplate from "./inputDate";
import urlTemplate from "./inputUrl";
import { SOCIALS } from "c/myUtils";

export default class AppFormInput extends LightningElement {
  @api input = "text";
  @api tag;
  @api title;
  @api value;
  @api hint;
  @api description;
  @api rows = 3;
  @api multiple = false;
  @api error;
  @api required = false;
  @api disabled = false;
  _value;
  _error;
  _dirty;

  /**
   * overrides render()
   * @returns LightningElement
   */
  render() {
    switch (this.input) {
      case "checkbox":
        return checkboxTemplate;
      case "select":
        return selectTemplate;
      case "file":
        return fileTemplate;
      case "avatar":
        return avatarTemplate;
      case "date":
        return dateTemplate;
      case "url":
        return urlTemplate;
      case "textarea":
      default:
        return textTemplate;
    }
  }

  /**
   * @description Checks if the input is valid based on the required property and the current value. Sets the error message if validation fails.
   * @returns {}
   */
  _validated() {
    this._error =
      this.required && !this._value && this._dirty
        ? "Field is required."
        : null;
    return this._inputDetail();
  }

  /**
   * @description Constructs an object containing details about the input, including the tag, value, and error.
   * @returns {}
   */
  _inputDetail() {
    return {
      tag: this.tag,
      value: (() => {
        switch (this.input) {
          case "checkbox":
            return this.computedBooleanValue;
          case "select":
            return this.computedOptionValue;
          case "file":
            return this._value;
          case "avatar":
            return this._value;
          case "date":
            return this.computedDateValue;
          case "textarea":
          default:
            return this.computedTextValue;
        }
      })(),
      error: this.computedError
    };
  }

  get computedIsError() {
    return this._error ? "error" : "clean";
  }

  get computedError() {
    return this._error ?? null;
  }

  // for file input only
  get computedMultiple() {
    return (this.multiple === "true" || this.multiple === true) ?? false;
  }

  get computedTextValue() {
    return this._value ?? "";
  }

  get computedBooleanValue() {
    return (
      this._value ?? (this._value === "true" || this._value === true) ?? false
    );
  }

  get computedOptionValue() {
    return this._value ?? "";
  }

  get computedDateValue() {
    return this._value ?? Date.now();
  }

  get computedUrl() {
    return this._value
      ? {
          url: this._value,
          ...(SOCIALS.find((ws) => this._value?.includes(ws.slug)) ?? {
            name: "Website",
            icon: "fa-solid fa-globe"
          })
        }
      : {
          name: this.title ?? "New Social / Website",
          url: "",
          last: true
        };
  }

  get computedIsTextArea() {
    return this.input === "textarea" ? true : false;
  }

  @api
  validated() {
    this._dirty = true;
    return this._validated();
  }

  handleChange(evt) {
    this._value = evt.target.value;
    this._dirty = true && this._validated();
    this.dispatchEvent(
      new CustomEvent("control", {
        detail: this._inputDetail()
      })
    );
  }

  handleBlur() {
    this.validated();
  }

  connectedCallback() {
    this._dirty = this.value ? true : false;
    this._value = this.value;
    this._error = this.error;
  }
}

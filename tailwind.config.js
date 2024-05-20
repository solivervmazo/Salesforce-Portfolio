module.exports = {
  darkMode: ["selector", '[data-theme="dark"]'],
  purge: {
    mode: "layers",
    layers: ["base", "components", "utilities"],
    // darkMode: "selector",
    content: [
      "**/aura/**/*.cmp",
      "**/aura/**/*.js",
      "**/lwc/**/*.html",
      "**/lwc/**/*.js"
    ]
  },
  theme: {
    extend: {
      colors: {
        "primary-light": "var(--primary-light-color)",
        "secondary-light": "var(--secondary-light-color)",
        "ternary-light": "var(--ternary-light-color)",
        "primary-dark": "var(--primary-dark-color)",
        "secondary-dark": "var(--secondary-dark-color)",
        "ternary-dark": "var(--ternary-dark-color)"
      }
    }
  }
};

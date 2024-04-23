module.exports = {
  purge: {
    mode: "layers",
    layers: ["base", "components", "utilities"],
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
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851"
      }
    }
  }
};

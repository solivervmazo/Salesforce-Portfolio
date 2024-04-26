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
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",
        "test-color": "var(--dxp-g-root)",
        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851"
      }
    }
  }
};

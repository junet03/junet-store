(function () {
  try {
    var stored = window.localStorage.getItem("junet-theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    var fallback = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    document.documentElement.dataset.theme = fallback;
    document.documentElement.style.colorScheme = fallback;
  }
})();

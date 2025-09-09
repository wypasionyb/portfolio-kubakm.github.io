function load() {
     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = prefersDark ? "dark" : "light";

    if (theme === "dark") {
        document.body.setAttribute("data-theme", "dark");
    } 
}
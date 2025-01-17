"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const languageSwitcher = document.getElementById("language-switcher");
    let currentLanguage = "es";

    languageSwitcher.addEventListener("click", () => {
        // Alternar entre "es" y "en"
        currentLanguage = currentLanguage === "es" ? "en" : "es";

        // Actualizar el botón
        document.querySelectorAll("#language-switcher span").forEach(el => {
            const lang = el.getAttribute("data-lang");
            el.style.display = lang === currentLanguage ? "" : "none";
        });

        // Actualizar los textos de la página
        document.querySelectorAll("[data-lang]").forEach(el => {
            const lang = el.getAttribute("data-lang");
            el.style.display = lang === currentLanguage ? "" : "none";
        });
    });
});

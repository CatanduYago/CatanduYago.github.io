"use strict";

// Idioma por defecto
let currentLanguage = 'es'; 

function toggleLanguage() {
    if (currentLanguage === 'es') {
        currentLanguage = 'en';

        // Cambiamos la imagen a inglés
        languageIcon = '../assets/eeuu.png'; 
    } else {
        currentLanguage = 'es';

        // Cambiamos la imagen a español
        languageIcon = '../assets/espana.png'; 
    }
    updateLanguage();
}

function updateLanguage() {
    let elements = document.querySelectorAll('data-lang');
    elements.forEach((body) => {
        let lang = body.getAttribute('data-lang');
        if (lang === currentLanguage) {
            body.style.display = '';
        } else {
            body.style.display = 'none';
        }
    });
}
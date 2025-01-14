"use strict";

// Declarar variables globales para rastrear el audio actual y el volumen
let currentAudio = null;

// Volumen inicial al máximo
let volume = 1.0; 

// Reproducir audio al hacer clic en un botón
document.querySelectorAll('#btn-sound').forEach(button => {
    button.addEventListener('click', () => {

        // Detener cualquier audio en reproducción
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Reproducir el nuevo audio
        const sound = button.getAttribute('data-sound');
        currentAudio = new Audio(`sounds/${sound}`);
        
        // Aplicar el volumen actual
        currentAudio.volume = volume; 
        currentAudio.play();
    });
});

// Detener todos los sonidos al hacer clic en "Detener todos los sonidos"
document.getElementById('stop-all').addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null; 
    }
});

// Actualizar el volumen al mover el slider
document.getElementById('volume-slider').addEventListener('input', (event) => {
    volume = parseFloat(event.target.value); 

    // Obtener el valor del slider
    if (currentAudio) {
        
        // Actualizar el volumen del audio actual
        currentAudio.volume = volume; 
    }
});

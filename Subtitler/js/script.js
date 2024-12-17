"use strict";

if ("webkitSpeechRecognition" in window) {
  const recognition = new webkitSpeechRecognition();

  recognition.continuous = true; 
  recognition.interimResults = true;

  const overlay = document.getElementById("overlay");
  const liveCaptionContainer = document.getElementById("live-caption-container");
  const startBtn = document.getElementById("start-btn");
  const exitBtn = document.getElementById("exit-btn");
  const inputLangSelect = document.getElementById("input-lang");

  // Actualiza el idioma del reconocimiento
  function updateRecognitionLanguage() {
    recognition.lang = inputLangSelect.value;
  }

  // Botón Iniciar
  startBtn.addEventListener("click", () => {
    updateRecognitionLanguage();
    overlay.classList.remove("d-none");
    overlay.classList.add("d-flex");
    recognition.start();
  });

  // Botón Salir
  exitBtn.addEventListener("click", () => {
    recognition.stop();
    overlay.classList.remove("d-flex");
    overlay.classList.add("d-none");
    liveCaptionContainer.textContent = "Capturando audio...";
  });

  // Captura y muestra el texto transcrito
  recognition.onresult = (event) => {
    let transcript = "";

    for (let i = 0; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }

    liveCaptionContainer.textContent = transcript;
  };

  // Maneja errores
  recognition.onerror = (error) => {
    console.error("Error de reconocimiento:", error);
    liveCaptionContainer.textContent = "Error al capturar audio.";
  };

  recognition.onend = () => {
    console.log("Reconocimiento detenido.");
    liveCaptionContainer.textContent = "Detenido.";
  };
} else {
  alert("El navegador no soporta webkitSpeechRecognition.");
}

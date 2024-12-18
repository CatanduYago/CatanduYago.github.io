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
  const outputLangSelect = document.getElementById("output-lang"); // Selector de idioma de salida

  // Actualiza el idioma del reconocimiento
  function updateRecognitionLanguage() {
    recognition.lang = inputLangSelect.value;
  }

  // Traduce el texto usando la API de Google Translate
  async function translateText(text, targetLang) {
    const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
    const data = await response.json();
    return data[0]?.[0]?.[0] || text; // Retorna el texto traducido o el original si falla
  }

  // Botón Iniciar
  startBtn.addEventListener("click", () => {
    updateRecognitionLanguage();
    liveCaptionContainer.textContent = "Esperando audio..."; // Mostrar mensaje inicial
    overlay.classList.remove("d-none");
    overlay.classList.add("d-flex");
    recognition.start();
  });

  // Botón Salir
  exitBtn.addEventListener("click", () => {
    recognition.stop();
    overlay.classList.remove("d-flex");
    overlay.classList.add("d-none");
  });

  // Captura y acumula el texto traducido
  recognition.onresult = async (event) => {
    if (liveCaptionContainer.textContent === "Esperando audio...") {
      liveCaptionContainer.textContent = ""; // Borrar el mensaje inicial
    }

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;

      if (event.results[i].isFinal) {
        const translatedText = await translateText(transcript, outputLangSelect.value);
        liveCaptionContainer.textContent += translatedText + " "; // Acumula el texto traducido
      }
    }
  };

  recognition.onerror = (error) => {
    console.error("Error de reconocimiento:", error);
    liveCaptionContainer.textContent += "\n[Error al capturar audio]";
  };

  recognition.onend = () => {
    console.log("Reconocimiento detenido.");
  };
} else {
  alert("El navegador no soporta webkitSpeechRecognition.");
}

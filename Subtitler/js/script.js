"use strict";

// Verificamos si el navegador soporta webkitSpeechRecognition.
if ("webkitSpeechRecognition" in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  const overlay = document.getElementById("overlay");
  const liveCaptionContainer = document.getElementById("live-caption-container");
  const startBtn = document.getElementById("start-btn");
  const exitBtn = document.getElementById("exit-btn");
  const inputLangSelect = document.getElementById("input-lang");
  const outputLangSelect = document.getElementById("output-lang");

  // Actualizar el idioma del reconocimiento
  function updateRecognitionLanguage() {
    recognition.lang = inputLangSelect.value;
  }

  // Traducir texto usando Google Translate API
  async function translateText(text, targetLang) {
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
    );
    const data = await response.json();
    return data[0]?.[0]?.[0] || text;
  }

  // Iniciar el reconocimiento
  startBtn.addEventListener("click", () => {
    updateRecognitionLanguage();

    // Limpiar el contenedor y establecer texto inicial
    liveCaptionContainer.textContent = "Capturando audio...";

    // Transición visual
    document.body.classList.add("uniform-background");
    const container = document.querySelector(".container");
    container.classList.add("transparent");

    // Mostrar el overlay
    setTimeout(() => {
      overlay.classList.add("visible");
      recognition.start();
    }, 1000);
  });

  // Detener el reconocimiento
  exitBtn.addEventListener("click", () => {
    recognition.stop();

    // Restaurar el estado inicial
    liveCaptionContainer.textContent = ""; // Limpiar el texto
    overlay.classList.remove("visible");
    const container = document.querySelector(".container");
    container.classList.remove("transparent");
    document.body.classList.remove("uniform-background");
  });

  // Manejar resultados de reconocimiento
  recognition.onresult = async (event) => {
    if (liveCaptionContainer.textContent === "Capturando audio...") {
      liveCaptionContainer.textContent = "";
    }

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;

      if (event.results[i].isFinal) {
        const translatedText = await translateText(transcript, outputLangSelect.value);
        liveCaptionContainer.textContent += translatedText + " ";
      }
    }
  };

  // Manejar errores de reconocimiento
  recognition.onerror = (error) => {
    console.error("Error de reconocimiento:", error);
    liveCaptionContainer.textContent += "\n[Error al capturar audio]";
  };

  // Manejar el fin del reconocimiento
  recognition.onend = () => {
    console.log("Reconocimiento detenido.");
  };
} else {
  alert("El navegador no soporta webkitSpeechRecognition.");
}

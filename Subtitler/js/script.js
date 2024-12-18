"use strict";

// Verificamos si el navegador soporta webkitSpeechRecognition.
if ("webkitSpeechRecognition" in window) {

  // Crea una nueva instancia de webkitSpeechRecognition.
  const recognition = new webkitSpeechRecognition();

  // Configura el reconocimiento para que sea continuo.
  recognition.continuous = true;

  // Configura el reconocimiento para que devuelva resultados intermedios.
  recognition.interimResults = true;

  // Obtiene el elemento con id "overlay".
  const overlay = document.getElementById("overlay");

  // Obtiene el elemento con id "live-caption-container".
  const liveCaptionContainer = document.getElementById("live-caption-container");

  // Obtiene el elemento con id "start-btn".
  const startBtn = document.getElementById("start-btn");

  // Obtiene el elemento con id "exit-btn".
  const exitBtn = document.getElementById("exit-btn");

  // Obtiene el elemento con id "input-lang".
  const inputLangSelect = document.getElementById("input-lang");

  // Obtiene el elemento con id "output-lang".
  const outputLangSelect = document.getElementById("output-lang");

  // Función para actualizar el idioma del reconocimiento.
  function updateRecognitionLanguage() {

    // Establece el idioma del reconocimiento
    recognition.lang = inputLangSelect.value;
  }

  // Función para traducir el texto usando la API de Google Translate.
  async function translateText(text, targetLang) {

    const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
    const data = await response.json();
    return data[0]?.[0]?.[0] || text;
  }

    // Evento para el botón de inicio.
    startBtn.addEventListener("click", () => {

    updateRecognitionLanguage();
    liveCaptionContainer.textContent = "Esperando audio...";
    overlay.classList.remove("d-none");
    overlay.classList.add("d-flex");
    recognition.start();
  });

    // Evento para el botón de salida.
    exitBtn.addEventListener("click", () => {

    recognition.stop();
    overlay.classList.remove("d-flex");
    overlay.classList.add("d-none");
  });

    // Evento que se dispara cuando hay un resultado de reconocimiento.
    recognition.onresult = async (event) => {

    if (liveCaptionContainer.textContent === "Esperando audio...") {
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

    // Evento que se dispara cuando hay un error en el reconocimiento.
    recognition.onerror = (error) => {

    console.error("Error de reconocimiento:", error);
    liveCaptionContainer.textContent += "\n[Error al capturar audio]";
  };

    // Evento que se dispara cuando el reconocimiento se detiene.
    recognition.onend = () => {

    console.log("Reconocimiento detenido.");
  };
} else {

  // Alerta si el navegador no soporta webkitSpeechRecognition.
  alert("El navegador no soporta webkitSpeechRecognition.");
}

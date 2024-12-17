document.addEventListener('DOMContentLoaded', function () {
    const darkModeBtn = document.getElementById('dark-mode-btn');
  
    darkModeBtn.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
    });
  });
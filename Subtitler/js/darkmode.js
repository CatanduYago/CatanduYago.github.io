document.addEventListener('DOMContentLoaded', function () {
    const darkModeBtn = document.getElementById('darkmode-toggle');
  
    darkModeBtn.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');

    });
  });
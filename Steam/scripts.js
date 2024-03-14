document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementById("miDropdown");
    var dropdownContent = document.getElementById("miDropdownContent");
    var flechaDropdown = document.getElementById("flechita_dropdown");

    dropdown.addEventListener("click", function(event) {
        event.stopPropagation(); // Evitar propagación del clic
        var isOpen = dropdownContent.classList.toggle("show");
        flechaDropdown.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
        dropdownContent.style.display = isOpen ? "fixed" : "none"; // Cambiar display
    });

    window.addEventListener("click", function() {
        dropdownContent.classList.remove("show");
        flechaDropdown.style.transform = "rotate(0deg)";
        dropdownContent.style.display = "none"; // Ocultar dropdown-content al hacer clic fuera
    });

    // Evitar que los clics en el dropdown-content cierren el dropdown
    dropdownContent.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});
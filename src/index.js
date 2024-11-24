document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons and tab sections
  const buttons = document.querySelectorAll("menu button");
  const sections = document.querySelectorAll(".tab-section");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const tab = button.getAttribute("data-tab");

      // Update button active class
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Show the selected section, hide others
      sections.forEach((section) => {
        section.style.display = "none"; // Hide all sections
      });
      document.getElementById(`section-${tab}`).style.display = "block"; // Show the active section
    });
  });

  // Ensure the first tab is displayed on load
  sections[0].style.display = "block";
});
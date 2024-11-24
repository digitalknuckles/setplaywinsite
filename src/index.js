document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("menu button");
    const sections = document.querySelectorAll(".tab-section");
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const tab = button.getAttribute("data-tab");
  
        // Update button styles
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
  
        // Update visible section
        sections.forEach((section) => (section.style.display = "none"));
        document.getElementById(`section-${tab}`).style.display = "block";
      });
    });
  
    // Initialize first section
    sections[0].style.display = "block";
  });
document.addEventListener("DOMContentLoaded", () => {
  // Select buttons and tab sections
  const buttons = document.querySelectorAll("menu button");
  const sections = document.querySelectorAll(".tab-section");

  // Define background images for sections
  const backgrounds = [
    "setplaywin_Card0-01.png",
    "setplaywin_Card1-01.png",
    "setplaywin_Card2-01.png",
    "setplaywin_Card3-01.png",
    "setplaywin_Card4-01.png",
  ];

  /**
   * Activates a specific tab by index
   * @param {number} tabIndex - Index of the tab to activate
   */
  const activateTab = (tabIndex) => {
    buttons.forEach((button, idx) => {
      const isActive = idx === tabIndex;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", isActive);
    });

    sections.forEach((section, idx) => {
      const isActive = idx === tabIndex;
      section.style.display = isActive ? "block" : "none";

      // Set background image for the active section
      if (isActive) {
        section.style.backgroundImage = `url('${backgrounds[idx]}')`;
        section.style.backgroundSize = "cover";
        section.style.backgroundPosition = "center";
        console.log(`Background image applied: ${backgrounds[idx]}`);
      }
    });
  };

  // Add event listeners to buttons
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => activateTab(index));
  });

  // Initialize the first tab on page load
  activateTab(0);
});
document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll("menu button");
    const tabSections = document.querySelectorAll(".tab-section");
    const backgroundImages = [
        "public/setplaywin_Card0-01.png",
        "public/setplaywin_Card1-01.png",
        "public/setplaywin_Card2-01.png",
        "public/setplaywin_Card3-01.png",
        "public/setplaywin_Card4-01.png"
    ];

    if (!tabButtons.length || !tabSections.length) {
        console.error("Tab buttons or sections not found.");
        return;
    }

    const activateTab = (index) => {
        tabButtons.forEach((button, i) => {
            const isActive = i === index;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-selected", isActive);
        });

        tabSections.forEach((section, i) => {
            const isActive = i === index;
            section.hidden = !isActive; // Modern alternative to display: none
            if (isActive) {
                section.style.backgroundImage = `url('${backgroundImages[i]}')`;
                section.style.backgroundSize = "cover";
                section.style.backgroundPosition = "center";
                console.log(`Background image applied: ${backgroundImages[i]}`);
            }
        });
    };

    tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => activateTab(index));
    });

    activateTab(0); // Set the default active tab
});

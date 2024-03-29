function handleClick(event) {
  const sidebarElements = document.querySelectorAll(".sidebar-menu-item");
  const hamburgerMenu = document.querySelector(".nextra-hamburger");
  const cardTextContent = event.target.textContent;
  const mediaSmall = window.matchMedia("(max-width: 767px)");
  const mediaLarge = window.matchMedia("(min-width: 767px)");

  // Function to open the hamburger menu and open a sub-menu in the navigation when clicking a home button

  sidebarElements.forEach((sidebarElement) => {
    if (mediaSmall.matches) {
      console.log("Page is small. Click hamburger menu");
      // open hamburger menu
      hamburgerMenu.click();

      if (
        // Initiate dropdown if dropdown nav item has the same text as the home button and is not open already
        cardTextContent === sidebarElement.textContent &&
        !sidebarElement.parentNode.parentNode.classList.contains("open")
      ) {
        console.log(
          "Page is small. Text matches and it is not open already, open sidebar"
        );
        sidebarElement.click();
      } else if (
        // Close dropdowns that don't have same text as the home button
        // and are open already
        cardTextContent !== sidebarElement.textContent &&
        sidebarElement.parentNode.parentNode.classList.contains("open")
      ) {
        console.log(
          "Page is small. Text matches and is open already, close sidebar"
        );
        sidebarElement.click();
      }
    }

    if (mediaLarge.matches) {
      if (cardTextContent === sidebarElement.textContent) {
        console.log("page is large and text matches, open sidebar");
        sidebarElement.click();
      } else if (
        // Close menu dropdowns that don't have same text as the home button
        // and are open already
        cardTextContent !== sidebarElement.textContent &&
        sidebarElement.parentNode.parentNode.classList.contains("open")
      ) {
        console.log("page is large and text matches, close matching sidebar");
        sidebarElement.click();
      }
    }
  });
}

export { handleClick };

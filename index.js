const hamburger = document.querySelector(".logo2 ion-icon");
const navMenu = document.querySelector(".header2");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  // Toggle between menu-outline and close-outline icons
  hamburger.setAttribute(
    "name",
    navMenu.classList.contains("active") ? "close-outline" : "menu-outline"
  );
});

// Close menu when clicking a nav link
document.querySelectorAll(".homeBoy a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.setAttribute("name", "menu-outline");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  if (
    !navMenu.contains(event.target) &&
    !hamburger.parentElement.contains(event.target)
  ) {
    navMenu.classList.remove("active");
    hamburger.setAttribute("name", "menu-outline");
  }
});

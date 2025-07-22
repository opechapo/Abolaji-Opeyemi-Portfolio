const hamburger = document.querySelector(".logo2");
const hamburgerIcon = document.querySelector(".logo2 ion-icon");
const navMenu = document.querySelector(".header2");
const navLinks = document.querySelectorAll(".homeBoy.mobile-nav a");

// Toggle menu only if screen width is below 992px
if (hamburger && hamburgerIcon && navMenu) {
  hamburger.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      navMenu.classList.toggle("active");
      const isExpanded = navMenu.classList.contains("active");
      hamburger.setAttribute("aria-expanded", isExpanded);
      hamburgerIcon.setAttribute(
        "name",
        isExpanded ? "close-outline" : "menu-outline"
      );
    }
  });
}

// Close menu when clicking a nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      hamburgerIcon.setAttribute("name", "menu-outline");
    }
  });
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  if (
    navMenu.classList.contains("active") &&
    !navMenu.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    hamburgerIcon.setAttribute("name", "menu-outline");
  }
});

// Reset menu state on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992 && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    hamburgerIcon.setAttribute("name", "menu-outline");
  }
});

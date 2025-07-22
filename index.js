const hamburger = document.querySelector(".logo2 ion-icon");
const navMenu = document.querySelector(".header2");
const navLinks = document.querySelectorAll(".homeBoy a");

// Toggle menu only if screen width is below 992px
hamburger.addEventListener("click", () => {
  if (window.innerWidth < 992) {
    navMenu.classList.toggle("active");
    hamburger.setAttribute(
      "name",
      navMenu.classList.contains("active") ? "close-outline" : "menu-outline"
    );
  }
});

// Close menu when clicking a nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      hamburger.setAttribute("name", "menu-outline");
    }
  });
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  if (
    navMenu.classList.contains("active") &&
    !navMenu.contains(event.target) &&
    !hamburger.parentElement.contains(event.target)
  ) {
    navMenu.classList.remove("active");
    hamburger.setAttribute("name", "menu-outline");
  }
});

// Reset menu state on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    navMenu.classList.remove("active");
    hamburger.setAttribute("name", "menu-outline");
  }
});

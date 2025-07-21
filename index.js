const hamburger = document.querySelector(".logo2 ion-icon");
const navMenu = document.querySelector(".header2");
const navLinks = document.querySelectorAll(".homeBoy a");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.setAttribute(
    "name",
    navMenu.classList.contains("active") ? "close-outline" : "menu-outline"
  );
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.setAttribute("name", "menu-outline");
  });
});

document.addEventListener("click", (event) => {
  if (
    !navMenu.contains(event.target) &&
    !hamburger.parentElement.contains(event.target)
  ) {
    navMenu.classList.remove("active");
    hamburger.setAttribute("name", "menu-outline");
  }
});

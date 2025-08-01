document.addEventListener("DOMContentLoaded", () => {
  // Loader
  window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("hidden");
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNavModal = document.querySelector(".mobile-nav-modal");
  const closeNav = document.querySelector(".close-nav");
  const navLinks = document.querySelectorAll(".nav-list a");

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    mobileNavModal.classList.toggle("active");
  });

  closeNav.addEventListener("click", () => {
    mobileNavModal.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });

  // Close menu when clicking a nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNavModal.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      mobileNavModal.classList.contains("active") &&
      !mobileNavModal.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      mobileNavModal.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Reset menu state on resize
  window.addEventListener("resize", () => {
    if (
      window.innerWidth >= 992 &&
      mobileNavModal.classList.contains("active")
    ) {
      mobileNavModal.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Smooth Scrolling and Active Link Highlighting
  const sections = document.querySelectorAll("section, header");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Intersection Observer for Animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".project-card")
    .forEach((el) => observer.observe(el));
});

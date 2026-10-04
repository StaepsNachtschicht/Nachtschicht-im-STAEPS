
const SITE = {
  registrationUrl: "#ANMELDEFORMULAR-HIER-EINTRAGEN",
  contactEmail: "staeps.nachtschicht@med.uni-goettingen.de",
  nextDate: "28.10.2026"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-registration]").forEach(a => {
    a.href = SITE.registrationUrl;
  });

  document.querySelectorAll("[data-email]").forEach(a => {
    a.textContent = SITE.contactEmail;
    a.href = "mailto:" + SITE.contactEmail;
  });

  document.querySelectorAll("[data-next-date]").forEach(el => {
    el.textContent = SITE.nextDate;
  });

  const menuButton = document.querySelector(".menu");
  const nav = document.querySelector(".main-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
  }
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.setAttribute("aria-expanded", "false");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");

    const menuAperto = nav.classList.contains("open");
    toggle.setAttribute("aria-expanded", menuAperto ? "true" : "false");
  });
}

const year = document.querySelector("[data-year]");
if (year) {
  year.textContent = new Date().getFullYear();
}

const age = document.querySelector("[data-age]");
if (age) {
  const dataNascita = new Date(2007, 0, 1);
  const oggi = new Date();

  let eta = oggi.getFullYear() - dataNascita.getFullYear();

  const compleannoPassato =
    oggi.getMonth() > dataNascita.getMonth() ||
    (oggi.getMonth() === dataNascita.getMonth() && oggi.getDate() >= dataNascita.getDate());

  if (!compleannoPassato) {
    eta--;
  }

  age.textContent = eta;
}

const menuToggleBtn = document.querySelector("#menu-toggle");
const menuToggleBtnSvg = document.querySelector("#menu-toggle img");
const navListDiv = document.querySelector("#nav-list");

const body = document.querySelector("body");

menuToggleBtn.addEventListener("click", () => {
  if (navListDiv.classList.contains("show")) {
    navListDiv.classList.remove("show");

    menuToggleBtn.setAttribute("aria-expanded", false);
    menuToggleBtnSvg.setAttribute("src", "/images/icon-hamburger.svg");

    body.classList.remove("no-scroll");
  } else {
    navListDiv.classList.add("show");

    menuToggleBtn.setAttribute("aria-expanded", true);
    menuToggleBtnSvg.setAttribute("src", "/images/icon-close.svg");

    body.classList.add("no-scroll");
  }
});

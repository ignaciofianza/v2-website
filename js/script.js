const hamMenu = document.querySelector(".header__right");
const closeMenu = document.querySelector(".header__close-icon");
const offScreenMenu = document.querySelector(".header__off-screen-menu");

// Open menu
hamMenu.addEventListener("click", () => {
  hamMenu.classList.add("hidden");
  closeMenu.classList.add("active");
  offScreenMenu.classList.add("active");
});

// Close menu
closeMenu.addEventListener("click", () => {
  hamMenu.classList.remove("hidden");
  closeMenu.classList.remove("active");
  offScreenMenu.classList.remove("active");
});

const menuBar = document.getElementById("bars");
const closeMenu = document.querySelector(".fa-xmark");
const mobileMenu = document.getElementById("mobile-menu");

menuBar.addEventListener("click", function () {
  mobileMenu.style.display = "block";
  closeMenu.style.display = "block";
  menuBar.style.display = "none";
});


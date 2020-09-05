// Navigation's list ride

const navButton = document.querySelector("#nav__burger");
const navList = document.querySelector("#nav__list");

navButton.addEventListener("click", () => {
  navList.classList.toggle("ride");
});

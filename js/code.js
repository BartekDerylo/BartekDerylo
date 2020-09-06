// Navigation's list ride

const navButton = document.querySelector("#nav__burger");
const navList = document.querySelector("#nav__list");

navButton.addEventListener("click", () => {
  navList.classList.toggle("ride");
});

// Main's section show

const navItems = document.querySelectorAll(".nav__item");
const mainSections = document.querySelectorAll(".main__section");

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    mainSections.forEach((mainSection) => {
      mainSection.classList.remove("active");
    });
    mainSections[i].classList.add("active");
  });
}

const buttonSandwich = document.querySelector(".button__sandwichMenu");

const listContainerDir = document.querySelector(".list__container__nav__dir");
const listContainerEsq = document.querySelector(".list__container__nav__esq");

buttonSandwich.addEventListener("click", () => {
  if (listContainerDir.style.display === "block") {
    listContainerDir.style.display = "none";
    listContainerEsq.style.display = "none";
  } else {
    listContainerDir.style.display = "block";
    listContainerEsq.style.display = "block";
  }
});

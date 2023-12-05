// Váriaveis que contém os elementos necessários para serem manipulados do HTML
const logoContainer = document.querySelector(".logo__container");
const listContainerNavDir = document.querySelector(
  ".list__container__nav__dir"
);
const aboutPicture = document.querySelector(".about__picture");
const textAbout = document.querySelector(".titex__about__container");
const buttonSandwich = document.querySelector(".container__sandwichMenu");
const nav = document.querySelector(".nav__container");
const about = document.querySelector(".container__about");

// Função que manipula ordem do HTML de acordo com a resolução da tela
function reposicaoElementos() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 320 && screenWidth <= 681) {
    if (logoContainer && listContainerNavDir && buttonSandwich) {
      nav.insertBefore(logoContainer, listContainerNavDir);
      nav.insertBefore(buttonSandwich, listContainerNavDir);
    }

    if (aboutPicture && textAbout) {
      about.insertBefore(textAbout, aboutPicture);
    }
  }

  if (screenWidth >= 641 && screenWidth <= 1007) {
    if (aboutPicture && textAbout) {
      const about = document.querySelector(".container__about");
      about.insertBefore(textAbout, aboutPicture);
    }
  }
}

//Acionador da função de acordo com o carregamento e redimensionamento da página.
window.addEventListener("load", reposicaoElementos);
window.addEventListener("resize", reposicaoElementos);

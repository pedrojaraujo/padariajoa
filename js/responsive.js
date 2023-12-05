function reposicaoElementos() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 320 && screenWidth <= 681) {
    const logoContainer = document.querySelector(".logo__container");
    const listContainerNavDir = document.querySelector(
      ".list__container__nav__dir"
    );

    const aboutPicture = document.querySelector(".about__picture");
    const textAbout = document.querySelector(".titex__about__container");

    const buttonSandwich = document.querySelector(".container__sandwichMenu");

    if (logoContainer && listContainerNavDir && buttonSandwich) {
      const nav = document.querySelector(".nav__container");
      nav.insertBefore(logoContainer, listContainerNavDir);
      nav.insertBefore(buttonSandwich, listContainerNavDir);
    }

    if (aboutPicture && textAbout) {
      const about = document.querySelector(".container__about");
      about.insertBefore(textAbout, aboutPicture);
    }
  }
}

window.addEventListener("load", reposicaoElementos);
window.addEventListener("resize", reposicaoElementos);

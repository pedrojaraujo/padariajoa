function reposicaoElementos() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 320 && screenWidth <= 480) {
    const logoContainer = document.querySelector(".logo__container");
    const listContainerNavDir = document.querySelector(
      ".list__container__nav__dir"
    );

    const aboutPicture = document.querySelector(".about__picture");
    const textAbout = document.querySelector(
      ".titex__about__container"
    );

    if (logoContainer && listContainerNavDir) {
      const nav = document.querySelector(".nav__container");
      nav.insertBefore(logoContainer, listContainerNavDir);
    }

    if (aboutPicture && textAbout) {
      const about = document.querySelector(".container__about");
      about.insertBefore(textAbout, aboutPicture);
    }
  } 


  
}

window.addEventListener("load", reposicaoElementos);
window.addEventListener("resize", reposicaoElementos);

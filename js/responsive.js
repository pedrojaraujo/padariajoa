function reposicaoElementos() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 576 && screenWidth <= 768) {
    const logoContainer = document.querySelector(".logo__container");
    const listContainerNavDir = document.querySelector(
      ".list__container__nav__dir"
    );
    if (logoContainer && listContainerNavDir) {
      const nav = document.querySelector(".nav__container");
      nav.insertBefore(logoContainer, listContainerNavDir);
    }
  } 
  
}

window.addEventListener("load", reposicaoElementos);
window.addEventListener("resize", reposicaoElementos);

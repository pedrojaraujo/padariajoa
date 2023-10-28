import { tipos } from "./data/db.js";

const { paes, doces, salgados, lanches } = tipos;

let products = [];

function gridProduct() {
  let html = "";
  const containerGrid = document.querySelector(".container__grid");
  products.map((objt) => {
    let hmtlAdd = `<div> 
                    <img src=${objt.url} alt="product1">
                    <p class="name__product">${objt.name}</p>
                  </div>`;
    html += hmtlAdd;
  });
  containerGrid.innerHTML = html;
}

function updateProducts(array) {
  products.length = 0;
  products.push(...array);
  gridProduct();
}

updateProducts(paes);

document.querySelector(".button__Bread").addEventListener("click", () => {
  updateProducts(paes);
});
document.querySelector(".button__Sweets").addEventListener("click", () => {
  updateProducts(doces);
});

document.querySelector(".button__Snacks").addEventListener("click", () => {
  updateProducts(salgados);
});

document.querySelector(".button__Sandwich").addEventListener("click", () => {
  updateProducts(lanches);
});

const buttons = document.querySelectorAll(
  ".button__Bread, .button__Sweets, .button__Snacks, .button__Sandwich"
);

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    buttons.forEach((btn) => btn.classList.remove("clicado"));
    event.target.classList.add("clicado");
  });
});

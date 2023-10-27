const products = [
  {
    id: 1,
    url: "public/images/products/Product1.png",
    name: "Croassaint",
  },
  {
    id: 2,
    url: "public/images/products/Product2.png",
    name: "Croassaint",
  },
  {
    id: 3,
    url: "public/images/products/Product3.png",
    name: "Pão de forma",
  },
  {
    id: 4,
    url: "public/images/products/Product4.png",
    name: "Pão Fermentado",
  },
  {
    id: 5,
    url: "public/images/products/Product5.png",
    name: "Pão Caseiro",
  },
  {
    id: 6,
    url: "public/images/products/Product6.png",
    name: "Pão de Gergelin",
  },
  {
    id: 7,
    url: "public/images/products/Product7.png",
    name: "Pão fermentado",
  },
  {
    id: 8,
    url: "public/images/products/Product8.png",
    name: "",
  },
];

function gridProduct() {
  let html = "";
  const containerGrid = document.querySelector(".container__grid");
  products.map((product) => {
    let hmtlAdd = `<div> 
                    <img src=${product.url} alt="product1">
                    <p class="name__product">${product.name}</p>
                  </div>`;
    html += hmtlAdd;
  });
  containerGrid.innerHTML = html;
}

gridProduct();

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
    name: "Croassaint",
  },
  {
    id: 4,
    url: "public/images/products/Product4.png",
    name: "Croassaint",
  },
  {
    id: 5,
    url: "public/images/products/Product5.png",
    name: "Croassaint",
  },
  {
    id: 6,
    url: "public/images/products/Product6.png",
    name: "Croassaint",
  },
  {
    id: 7,
    url: "public/images/products/Product7.png",
    name: "Croassaint",
  },
  {
    id: 8,
    url: "public/images/products/Product8.png",
    name: "Croassaint",
  },
];

function gridProduct() {
  let html = "";
  const containerGrid = document.querySelector(".container__grid");
  products.map((product) => {
    let hmtlAdd = `<img src=${product.url} alt="product1">`;
    html += hmtlAdd;
  });
  containerGrid.innerHTML = html;
}

gridProduct();

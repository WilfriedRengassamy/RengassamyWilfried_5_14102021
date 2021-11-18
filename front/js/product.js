const itemId = window.location.search;
console.log(itemId);
const searchParams = new URLSearchParams(itemId);

// Itère sur les paramètres de recherche
for (let product of searchParams) {
  console.log(product);
}

//Requête de l'API

async function getItem() {
  await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => (product = data));
  //console.log(items);
}

//Test affichage éléments vers product.html
function showItemImg() {
  let itemPic = document.getElementsByClassName("item__img");
  itemPic.src = product.imageUrl;
  let item = document.getElementsByClassName("item");
  console.log(itemPic);
  item.appendChild(itemPic);
}
showItemImg();

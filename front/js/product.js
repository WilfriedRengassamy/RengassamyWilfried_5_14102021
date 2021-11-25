const itemUrlId = window.location.search;
console.log(itemUrlId);
const searchParams = new URLSearchParams(itemUrlId);

let itemId = itemUrlId.substr(4);
let item;

//Requête de l'API
const getItem = async () => {
  await fetch("http://localhost:3000/api/products/" + itemId)
    .then((res) => res.json())
    .then((data) => (item = data));
};

//Affiche le produit
const showItem = async () => {
  await getItem();

  //Met le nom du produit en titre de page
  document.title = item.name;

  //Affiche le nom du produit
  let itemName = document.getElementById("title");
  itemName.append(item.name);

  //Affiche l'image du produit
  let itemImg = document.getElementsByClassName("item__img");
  console.log(itemImg[0]);
  let img = document.createElement("img");
  img.setAttribute("src", item.imageUrl);
  itemImg[0].append(img);

  //Affiche le prix du produit
  let itemPrice = document.getElementById("price");
  itemPrice.append(item.price);

  //Affiche la description du produit
  let itemDescription = document.getElementById("description");
  itemDescription.append(item.description);

  //définit les couleurs sélectionnables pour le produit
  let colorsList = document.getElementById("colors");
  let colors = item.colors;
  for (let i = 0; i < colors.length; i++) {
    let option = document.createElement("option");
    option.value = colors[i];
    option.text = colors[i];
    colorsList.appendChild(option);
  }
};
showItem();

//définition de l'array selectProduct
let selectProduct = [];
selectProduct.length = 4;

let addToCart = [];

/*
// selection de la couleur selectColor
let colorSelection = document.getElementById("colors");
let selectColor = colorSelection.options[colorSelection.selectedIndex].value;

// sélection du nombre d'exemplaires selectQuantity
let quantitySelection = document.getElementById("quantity");
quantitySelection.addEventListener("change", function (event) {
  let selectQuantity = event.target.value;
});

// rentrer les index et valeurs de selectProduct
selectProduct[0] = item.name;
selectProduct[1] = item.price;
selectProduct[2] = selectColor;
selectProduct[3] = selectQuantity;
*/

//entrer le nom selectName du produit dans selectProduct
const productselection = async () => {
  await getItem();
  let selectName = document.getElementById("title").textContent;
  selectProduct[0] = selectName;

  //entrer le prix selectPrice du produit dans selectProduct
  let selectPrice = document.getElementById("price").textContent;
  selectProduct[1] = selectPrice;

  //sélection de la couleur selectColor
  let colorSelection = document.getElementById("colors");
  // Quand une couleur (option) est selectionnée
  colorSelection.addEventListener("change", function () {
    let selectColor =
      colorSelection.options[colorSelection.selectedIndex].value;
    // enregistrement de la couleur sélectionnée selectColor dans selectProduct
    selectProduct[2] = selectColor;
  });

  //sélection et enregistrement du nombre d'exemplaire selectQuantity
  let quantitySelection = document.getElementById("quantity");
  quantitySelection.addEventListener("change", function (event) {
    let selectQuantity = event.target.value;
    // enregistrement de la quantité sélectionnée selectQuantity dans selectProduct
    selectProduct[3] = selectQuantity;
  });
};
productselection();

/* si le nouveau selectProduct de addToCart est rigoureusement identique à un selectProduct existant
   Ne pas l'ajouter */

// Sinon ajouter le nouveau selectProduct dans addToCart
addToCart.push(selectProduct);

//stockage en localStorage des données de l'array cart
let addToCartButton = document.getElementById("addToCart");
addToCartButton.addEventListener("click", function () {
  //Boolean : si selectColor = null alors alert "choix couleur avant ajout au panier"
  if (selectProduct[2] == null) {
    alert("Veuillez sélectionner une couleur !");
  }

  //Boolean : si selectQuantity = null alors alert "choix quantité avant ajout au panier"
  else if (selectProduct[3] == null) {
    alert("Veuillez sélectionner une quantité !");
  } else {
    let cart = JSON.stringify(addToCart);
    localStorage.setItem("obj", cart);
  }
});

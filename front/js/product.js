const itemUrlId = window.location.search;
console.log(itemUrlId);
const searchParams = new URLSearchParams(itemUrlId);

let itemId = itemUrlId.substr(4);
let item;
//---------------------------------------------- Récupérer et afficher le produit------------------------------------------------------
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

//---------------------------------------------- Ajouter le produit au panier(localStorage)--------------------------------------------

// au loading de la page on récupère le contenu du localStorage
let addToCart = localStorage.getItem("cart");
if (addToCart) {
  addToCart = JSON.parse(addToCart);
} else {
  addToCart = [];
}

let addToCartButton = document.getElementById("addToCart");
addToCartButton.addEventListener("click", function () {
  // valeurs déjà chargées
  let selectName = item.name;
  let selectPrice = item.price;

  // valeurs choisis par l'utilisateur si elles sont renseignées
  //let colorSelection = document.getElementById("colors");
  let colorSelection = document.getElementById("colors").value;
  if (colorSelection == "") {
    alert("Veuillez sélectionner une couleur!");
    return null;
  }
  let quantitySelect = document.getElementById("quantity").value;
  if (quantitySelect <= 0) {
    alert("Veuillez sélectionner une quantité !");
    return null;
  }

  let selectedItem = {
    id: item._id,
    imageUrl: item.imageUrl,
    altTxt: item.altTxt,
    name: selectName,
    price: selectPrice,
    color: colorSelection,
    quantity: quantitySelect,
  };

  if (addToCart.length == 0) {
    // construire le tableau addToCart
    addToCart = [selectedItem];
  } else {
    let found = false;
    // parcourir le tableau pour vérifier si le produit sélectionné existe déjà, ainsi modifier sa quantité
    for (let cartItem of addToCart) {
      if (
        cartItem.id === selectedItem.id &&
        cartItem.color === selectedItem.color
      ) {
        found = true;
        cartItem.quantity =
          parseInt(cartItem.quantity) + parseInt(selectedItem.quantity);
      }
    }
    if (!found) {
      addToCart.push(selectedItem);
    }
  }

  // enfin remettre le tableau dans le localStorage
  let cart = JSON.stringify(addToCart);
  localStorage.setItem("cart", cart);
});

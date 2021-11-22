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

//entrer le nom du produit selectName
let selectName = item[name];
//sélection et enregistrement de la couleur selectColor

//sélection et enregistrement du nombre d'exemplaire selectQuantity

//stockage en localStorage des données de l'array saveProduct
let saveProduct = JSON.stringify(selectProduct);
localStorage.setItem("obj", saveProduct);

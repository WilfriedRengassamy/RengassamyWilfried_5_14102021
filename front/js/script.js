const items = document.getElementById("items");
let listItems;

//Requete API
const getItems = async () => {
  await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => (listItems = data));
  console.log(listItems);
};

//Importer produits sur index.html
const showItems = async () => {
  await getItems();
};

//Appel de la fonction
showItems();

/*
let listItems;

//Requete API
const getItems = async () => {
  listItems = await fetch("http://localhost:3000/api/products").then((res) =>
    res.json()
  );

  //console.log(listItems);
};

//Importer produits sur index.html
const showItems = async () => {
  await getItems();

  items.innerHTML = listItems
    .map(
      (item) =>
        `
          <a href="./product.html?id=${item._id}">
          <article>
            <img src="${item.imageUrl}" alt="${item.altTxt}">
            <h3 class="productName">${item.name}</h3>
            <p class="productDescription">${item.description}</p>
          </article>
          </a>
        `
    )
    .join(""); //permet de remplacer la virgule qui sépare les éléments par un espace
};

//Appeler la fonction d'affichage des produits
showItems();*/

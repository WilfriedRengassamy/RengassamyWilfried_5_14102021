/*
const getProducts = async () => {
    await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => products = data );
    console.log(products);
};

const main = async () => {
    await getproducts();
}

main();
*/

//requête sur le serveur
fetch("http://localhost:3000/api/products")
  .then(function(result) {
    if (result.ok) {
      console.log(result.json())
      //result.json();
    }
  })
  .then(function(products) {
    console.log(products);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });

//interprêter la requête

const products = result.json(products);

// insérer dans html
const productsPlacement = document.querySelector("#items").innerText = products;

// créer des div avec les éléments du array testItems
for(let product of products) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('product_place');
    let newTitle = createElement('h3');
    newTitle.innerText = `${testItem.name}`;
    let newInfo = document.createElement('p');
    newInfo.innerText = `${testItem.id}
    ${testItem.price} €`;
    newDiv.append(newTitle);
    newDiv.append(newInfo);
    productsPlacement.append(newDiv);
};

/*
//création array test
let testItems = [
    {
        name: "quasiquai",
        id: 156843,
        price: 19
    },
    {
        name: "morino",
        id: 237484,
        price: 35
    },
    {
        name: "poulinor",
        id: 486288,
        price: 31
    },
];

// insérer dans html
const productsPlacement = document.querySelector("#items").innerText = products;

// créer des div avec les éléments du array testItems
for(let product of products) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('product_place');
    let newTitle = createElement('h3');
    newTitle.innerText = `${testItem.name}`;
    let newInfo = document.createElement('p');
    newInfo.innerText = `${testItem.id}
    ${testItem.price} €`;
    newDiv.append(newTitle);
    newDiv.append(newInfo);
    productsPlacement.append(newDiv);
};
*/
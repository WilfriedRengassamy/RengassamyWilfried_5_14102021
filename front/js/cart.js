let cartItems = document.getElementById("cart__items");
let item;

//localStorage.getItem("cart");

let cart = [
  {
    id: "1458PM44",
    name: "Caribou Solex",
    price: 1044,
    color: "brun",
    quantity: 1,
  },
  {
    id: "2879AM58",
    name: "Beetle Juices",
    price: 857,
    color: "bleu",
    quantity: 2,
  },
  {
    id: "7599JG65",
    name: "Yeti Arthax",
    price: 1044,
    color: "noir",
    quantity: 1,
  },
];

cartItems.innerHTML = cart
  .map(
    (item) =>
      `
  <article class="cart__item" data-id="${item.id}">
  <div class="cart__item__img">
    <img src="${item.imageUrl}" alt="${item.altTxt}">
  </div>
  <div class="cart__item__content">
    <div class="cart__item__content__titlePrice">
      <h2>${item.name}</h2>
      <p>${item.price}</p>
    </div>
    <div class="cart__item__content__settings">
      <div class="cart__item__content__settings__quantity">
        <p>Qté : </p>
        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${item.quantity}">
      </div>
      <div class="cart__item__content__settings__delete">
        <p class="deleteItem">Supprimer</p>
      </div>
    </div>
  </div>
</article>
`
  )
  .join("");

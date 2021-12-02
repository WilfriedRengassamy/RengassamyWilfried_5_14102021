let cartItems = document.getElementById("cart__items");
let item;

let cart = localStorage.getItem["cart"];

//------------------------------------------------- Afficher le panier ---------------------------------------------------------------

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

let totalQuantity = document.getElementById("totalQuantity");
let cartPrice = document.getElementById("totalPrice");

//----------------------------------------------- Travailler sur le formulaire -------------------------------------------------------

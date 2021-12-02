let cartItems = document.getElementById("cart__items");
let item;

//récupérer le localStorage sous forme d'array
let cartLinea = localStorage["cart"];
let cart = JSON.parse(cartLinea);

//------------------------------------------------- Afficher le panier ---------------------------------------------------------------

/*cartItems.innerHTML = cart
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
*/
for (let i of cart) {
  let cartItem = document.createElement("article");
  cartItem.setAttribute("class", "cart__item");
  cartItem.setAttribute("data-id", item.id);
  let cartItemImgDiv = document.createElement("div");
  let cartItemImg = document.createElement("img");
  cartItemImg.setAttribute("src", item.imageUrl);
  cartItemImg.setAttribute("alt", item.altTxt);
  cartItemImgDiv.appendChild(cartItemImg);
  cartItem.appendChild(cartItemImgDiv);
}

//----------------------------------------------- Travailler sur le formulaire -------------------------------------------------------

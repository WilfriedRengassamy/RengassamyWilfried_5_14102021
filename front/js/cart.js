let cartItems = document.getElementById("cart__items");
//let item;

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
for (let item of cart) {
  let cartItems = document.getElementById("cart__items");
  let cartItem = document.createElement("article");
  cartItem.classList.add("cart__item");
  cartItem.setAttribute("data-id", item.id);
  let cartItemImgDiv = document.createElement("div");
  cartItemImgDiv.classList.add("cart__item__img");
  let cartItemImg = document.createElement("img");
  cartItemImg.setAttribute("src", item.imageUrl);
  cartItemImg.setAttribute("alt", item.altTxt);
  let cartItemContent = document.createElement("div");
  cartItemContent.classList.add("cart__item__content");
  let cartItemContentTitlePrice = document.createElement("div");
  cartItemContentTitlePrice.classList.add("cart__content__titlePrice");
  let cartItemContentItemName = document.createElement("h2");
  let cartItemContenItemPrice = document.createElement("p");
  let cartItemContentSettings = document.createElement("div");
  cartItemContentSettings.classList.add("cart__item__content__settings");
  let cartItemContentSettingsQuantity = document.createElement("div");
  cartItemContentSettingsQuantity.classList.add(
    "cart__item__content__settings__quantity"
  );
  let cartItemContentSettingsQuantityName = document.createElement("p");
  let cartItemContentSettingsQuantityInput = document.createElement("input");
  cartItemContentSettingsQuantityInput.classList.add("itemQuantity");
  cartItemContentSettingsQuantityInput.setAttribute("type", "number");
  let cartItemContentSettingsDelete = document.createElement("div");
  cartItemContentSettingsDelete.classList.add(
    "cart__item__content__settings__delete"
  );
  let cartItemContentSettingsDeleteItem = document.createElement("p");
  cartItemContentSettingsDeleteItem.classList.add("deleteItem");
  cartItems.appendChild(cartItem);
  cartItem.appendChild(cartItemImgDiv);
  cartItem.appendChild(cartItemContent);
  cartItemContent.appendChild(cartItemContentTitlePrice);
  cartItemContentTitlePrice.appendChild(cartItemContentItemName);
  cartItemContentTitlePrice.appendChild(cartItemContenItemPrice);
  cartItemContentItemName.append(item.name);
  cartItemContenItemPrice.append(item.price);
  cartItemImgDiv.appendChild(cartItemImg);
  cartItemContent.appendChild(cartItemContentSettings);
  cartItemContentSettings.appendChild(cartItemContentSettingsQuantity);
  cartItemContentSettingsQuantity.appendChild(
    cartItemContentSettingsQuantityName
  );
  cartItemContentSettingsQuantityName.append("Qté :");
  cartItemContentSettingsQuantity.appendChild(
    cartItemContentSettingsQuantityInput
  );
  cartItemContentSettingsQuantityInput.append(item.quantity);
  cartItemContentSettings.appendChild(cartItemContentSettingsDelete);
  cartItemContentSettingsDelete.appendChild(cartItemContentSettingsDeleteItem);
  cartItemContentSettingsDeleteItem.append("Supprimer");
}

//----------------------------------------------- Travailler sur le formulaire -------------------------------------------------------

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
  cartItemContentTitlePrice.classList.add("cart__item__content__titlePrice");
  let cartItemContentItemName = document.createElement("h2");
  let cartItemContentItemPrice = document.createElement("p");
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
  cartItemContentSettingsQuantityInput.setAttribute("name", "itemQuantity");
  cartItemContentSettingsQuantityInput.setAttribute("min", "1");
  cartItemContentSettingsQuantityInput.setAttribute("max", "100");
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
  cartItemContentTitlePrice.appendChild(cartItemContentItemPrice);
  cartItemContentItemName.append(item.name);
  cartItemContentItemPrice.append(item.price * item.quantity, " €");
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
  cartItemContentSettingsQuantityInput.value = item.quantity;
  cartItemContentSettings.appendChild(cartItemContentSettingsDelete);
  cartItemContentSettingsDelete.appendChild(cartItemContentSettingsDeleteItem);
  cartItemContentSettingsDeleteItem.append("Supprimer");
}

// modifier quantité input = modifier quantité objet dans cart en localStorage
function changeQty() {
  let cartItemQuantityModified =
    document.getElementsByClassName("itemQuantity").value;
  cartItemQuantityModified.addEventListener("change", function () {
    item.quantity == cartItemQuantityModified;
  });
}

// supprimer un produit du panier en localStorage (localStorage.removeItem) - (addEventListener(change)) - (Element.closest())
function deleteCartItem() {
  cartItemContentSettingsDeleteItem.addEventListener("click", function () {
    let selectedItem = cartItems.closest("section > data-id");
    localStorage.removeItem();
  });
}

//------------------------------------------------ Calculer le total des prix --------------------------------------------------------

let cartPrice = document.getElementsByClassName("cart__price");

//----------------------------------------------- Travailler sur le formulaire -------------------------------------------------------

// les champs prénom, nom et ville n'accèptent que des lettres et des tirets

// champ prénom
let formFirstName = document.getElementById("firstName");
formFirstName.addEventListener("onInput", function (e) {
  let fistNameValue = e.target.value;
  if (value) {
    isValid = true;
  } else {
    isValid = false;
    let formFirstNameErr = document.getElementById("firstNameErrorMsg");
    formFirstNameErr.append(
      "Veuillez utiliser uniquement des lettres en majuscules et minuscules ainsi que le tiret si besoin !"
    );
  }
});

// Add to Cart
function addToCart(btn) {
  let item = btn.parentElement;
  if (btn.value == 0) {
    let cart = document.getElementById("cart");
    let cartItem = item.cloneNode(true);
    cart.appendChild(cartItem);
    item.querySelector("small").innerText = "item added to cart";
    cartItem.querySelector(".add").style = "display:none; visibility:hidden";
    cartItem.querySelector(".remove").style = "display:''; visibility:visible";
    btn.value = 1;
  } else {
    item.querySelector("small").innerText = "Item already in cart";
  }
}

// Remove from Cart
function removeFromCart(btn) {
  let item = btn.parentElement;
  item.remove();
}

// MOBILE NAV BAR
const navMenu = document.querySelector(".nav--bar");
const hamIcon = document.querySelector(".icon-swapper");
function openNav() {
  if (hamIcon.name === "reorder-three-outline") {
    navMenu.style = `right: 0px`;
    hamIcon.name = `close-circle-outline`;
  } else {
    navMenu.style = `right: -300px`;
    hamIcon.name = `reorder-three-outline`;
  }
}

// FOR PRODUCT's ROUTING TO SHOP PAGE
const productsCols = [
  ...document.querySelectorAll(".f-products .product-card"),
];
productsCols.forEach((productCol) =>
  productCol.addEventListener(
    "click",
    (e) => (window.location.href = "../pages/product.html")
  )
);

// FOR PRODUCT's PAGE IMAGE CHANGE
const mainImage = document.querySelector("#mainImage");
const smallImage = [...document.querySelectorAll(".sm-img")];
smallImage.forEach((img) =>
  img.addEventListener("click", (e) => (mainImage.src = img.src))
);

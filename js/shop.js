//SIDE CART
document.addEventListener("DOMContentLoaded", function() {
    const cartButton = document.getElementById("cart");
    const sideCartPage = document.querySelector(".side-cart");
    
    cartButton.addEventListener("click", () => {
      sideCartPage.classList.add("side-cart-show");
    });
    
    const sideCartClose = document.getElementById("cart-close");
    
    sideCartClose.addEventListener("click", () => {
      sideCartPage.classList.remove("side-cart-show");
    });
});


        document.addEventListener("DOMContentLoaded", function() {
            const licenseContainerBtns = document.getElementsByName("f-pricing-cards");
const licensePrices = document.querySelectorAll(".f-pricing-price");
const licenseTypes = document.querySelectorAll(".f-pricing-type-lic");
const container = document.querySelectorAll(".pricing-container");

for (let j = 0; j < licenseContainerBtns.length; j++) {
  licenseContainerBtns[j].addEventListener("click", () => {
    var price = licensePrices[j].innerText;
    var licenseType = licenseTypes[j].innerText;
    var cardContainers =
      licensePrices[j].parentElement.parentElement.parentElement.querySelector(
        ".total-price"
      );
    var ltContainer =
      licenseTypes[j].parentElement.parentElement.parentElement.querySelector(
        ".license-type"
      );
    cardContainers.innerText = `Price: ${price}`;
    ltContainer.innerText = `${licenseType}`;
  });
}
      });

      document.addEventListener("DOMContentLoaded", function(){
        //ADD TO CART
        
        const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
        const itemTitle = document.querySelectorAll(".audio-title");
        const sideCartWhole = document.querySelector(".side-cart");
        
        for (let i = 0; i < addToCartBtns.length; i++) {
          addToCartBtns[i].addEventListener("click", () => {
            var cardContainers =
              addToCartBtns[i].parentElement.parentElement.parentElement;
        
            // art title var
        
            var itemTitleName = itemTitle[i].innerText;
        
            //license type var
        
            var licenseType = itemTitle[i].parentElement.parentElement
              .querySelector(".pricing-total")
              .querySelector(".license-type").innerText;
        
            //price var
        
            var itemPrice = itemTitle[i].parentElement.parentElement
              .querySelector(".pricing-total")
              .querySelector(".total-price").innerText;
        
            //art img var
        
            var itemImg = itemTitle[i].parentElement.parentElement
              .querySelector(".art-art")
              .querySelector(".art-img").src;
        
            cardContainers
              .querySelector(".pricing-total")
              .querySelector(".license-type").innerText = "";
        
            cardContainers
              .querySelector(".pricing-total")
              .querySelector(".total-price").innerText = "";
        
            //ADD TO SIDE CART
        
            var cartItemsTitle = document.querySelectorAll(".cart-item-title");
        
            for (let j = 0; j < cartItemsTitle.length; j++) {
              if (itemPrice == "") {
                alert("Select license type to proceed the transaction!");
                return;
              } else if (cartItemsTitle[j].innerText == itemTitleName) {
                alert(`"${itemTitleName}" art is already in the cart`);
                return;
              }
            }
        
            //CREATE DIV ELEMENT
        
            var sideCartContainer = document.querySelector(".cart-items-container");
            var sideCartChildContainer = document.createElement("div");
            var cartItems = document.querySelectorAll(".cart-items");
        
            if (itemPrice == "") {
              alert("Select license type to proceed the transaction!");
            } else {
              sideCartChildContainer.innerHTML = `
              <img
                src="${itemImg}"
                class="cart-item-img"
              />
              <div class="cart-item-info">
                <div class="cart-item-title">${itemTitleName}</div>
                <div class="cart-item-type">${licenseType}</div>
                <div class="cart-item-price">${itemPrice}</div>
              </div>
              <button class="i-button">
                <i class="bx bxs-trash bx-tada"></i>
              </button>
              `;
              sideCartContainer.append(sideCartChildContainer);
              sideCartChildContainer.classList.add("cart-items");
              sideCartWhole.classList.add("side-cart-show");
              subTotal();
            }
        
            //CONTAINER BOTTOM MARGIN ACCORDING TO CLIENT'S WIDTH
        
            if (document.body.clientWidth >= 1920) {
              if (cartItems.length > 3) {
                sideCartContainer.classList.add("cart-items-container-bot");
              }
            } else if (
              (document.body.clientWidth >= 1366) |
              (document.body.clientWidth >= 1280)
            ) {
              if (cartItems.length > 1) {
                sideCartContainer.classList.add("cart-items-container-bot");
              }
            }
        
           // DELETE CART ITEMS DIVS
        
            const cartTrash = document.querySelectorAll(".i-button");
        
            for (let i = 0; i < cartTrash.length; i++) {
              cartTrash[i].addEventListener("click", () => {
                cartTrash[i].parentElement.remove();
                if (cartItems.length < 5) {
                  sideCartContainer.classList.remove("cart-items-container-bot");
                }
                subTotal();
                return;
              });
            }
          });
        }

        
        //UPDATING SUBTOTAL
        
        function subTotal() {
          var subTotalContainer = document.querySelector(".subtotal");
          var prices = document.querySelectorAll(".cart-item-price");
        
          if (prices.length == 0) {
            subTotalContainer.innerText = `Subtotal: ₱0.00`;
          }
        
          for (let i = 0, sum = 0; i < prices.length; i++) {
            var sideCartPrice = parseFloat(prices[i].innerText.substring(8));
            sum += sideCartPrice;
            subTotalContainer.innerText = `Subtotal: ₱${sum.toFixed(2)}`;
          }
        }
              });
        
document.addEventListener("DOMContentLoaded", function(){
                
//USER CLICKING CHECKOUT BUTTON

const checkoutBtn = document.querySelector(".checkout-btn");
const cartItemsContainer = document.querySelector(".cart-items-container");

checkoutBtn.addEventListener("click", () => {
  if (cartItemsContainer.innerHTML == "") {
    alert("Your cart is empty!");
  } else {
    sessionStorage.setItem("cartItemsContainer", cartItemsContainer.innerHTML);
    location.href = "./checkout.html";
  }
});
});
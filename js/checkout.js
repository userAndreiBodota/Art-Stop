document.addEventListener ("DOMContentLoaded", function(){
// WHEN USER CHOOSE E-MAIL METHOD

const emailMethodBtn = document.getElementsByName("method");
const emailInput = document.querySelector(".input-box-em");
const paymentSec = document.querySelector(".payment");
const paymentForm = document.querySelector(".payment-container");

for (let i = 0; i < emailMethodBtn.length; i++) {
  emailMethodBtn[i].addEventListener("click", () => {
    if (emailMethodBtn[1].checked) {
      emailInput.classList.remove("em-none");
      paymentSec.classList.remove("em-none");
      paymentForm.classList.remove("em-none");
    } else {
      emailInput.classList.add("em-none");
      paymentSec.classList.add("em-none");
      paymentForm.classList.add("em-none");
    }
  });
}
});


document.addEventListener ("DOMContentLoaded", function(){
//WHEN USER CHOOSE CREDIT CARD PAYMENT

const ccBtn = document.getElementsByName("payment");
const cardSec = document.querySelector(".cc-inps-container");

ccBtn[0].addEventListener("click", () => {
  if (ccBtn[0].checked) {
    cardSec.classList.remove("em-none");
  } else {
    cardSec.classList.add("em-none");
  }
});
});



document.addEventListener ("DOMContentLoaded", function(){
    //DISPLAYING PRODUCTS

const productContainer = document.querySelector(".products-container-storage");
productContainer.innerHTML = sessionStorage.getItem("cartItemsContainer");
subTotal();

//DELETING PRODUCTS

const cartTrash = document.querySelectorAll(".i-button");

for (let i = 0; i < cartTrash.length; i++) {
  cartTrash[i].addEventListener("click", () => {
    cartTrash[i].parentElement.remove();
    sessionStorage.setItem("cartItemsContainer", productContainer.innerHTML);
    subTotal();
  });
}

//UPDATING SUBTOTAL

function subTotal() {
  var subTotalContainer = document.querySelector(".checkout-subtotal");
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

//USER DOES NOT FILL INPUT FIELDS

const inputFields = document.querySelectorAll(".input-box");
const placeOrderBtn = document.querySelector(".continue-btn");
const modalContainer = document.querySelector(".modal-container");
const receiptContainer = document.querySelector(".receipt-no");
const fullNameContainer = document.querySelector(".full-name");
const dateTimeContainer = document.querySelector(".date-time");

inputFields.forEach((i) => {
  var divAboveInput = i.parentNode;
  var displayDiv = document.createElement("div");
  displayDiv.innerHTML = "Please fill the input field!";
  placeOrderBtn.addEventListener("click", () => {
    var count = checkFilled();
    if ((count >= 7) & (productContainer.innerHTML !== "")) {
      var receiptNo = generateReceiptNo();
      var fullName = getFullName();
      var dateTime = generateDateTime();
      receiptContainer.innerHTML = `Your receipt no. ${receiptNo}`;
      fullNameContainer.innerHTML = `Name: ${fullName}`;
      dateTimeContainer.innerHTML = `Purchase Date: ${dateTime}`;
      setTimeout(modalShow, 800);
    } else if (productContainer.innerHTML == "") {
      location.href = "./shop.html";
    } else {
      if (i.value == "") {
        divAboveInput.prepend(displayDiv);
        displayDiv.classList.add("warning");
      } else {
        displayDiv.parentNode.removeChild(displayDiv);
      }
    }
  });
});

function modalShow() {
  modalContainer.classList.remove("em-none");
  modalContainer.classList.add("popUp");
}

function checkFilled() {
  var inputField = document.querySelectorAll(".input-box");
  var count = 0;
  for (let i = 0; i < 8; i++) {
    if (inputField[i].value != "") {
      count += 1;
    }
  }
  return count;
}

function generateReceiptNo() {
  return Math.random().toString(18).substring(2);
}

function generateDateTime() {
  return Date().toLocaleString();
}

function getFullName() {
  var firstName =
    document.querySelector(".first-name").value.charAt(0).toUpperCase() +
    document.querySelector(".first-name").value.substring(1);
  var lastName =
    document.querySelector(".last-name").value.charAt(0).toUpperCase() +
    document.querySelector(".last-name").value.substring(1);
  return `${firstName} ${lastName}`;
}

const modalCloseBtn = document.querySelector(".modal-close");

modalCloseBtn.addEventListener("click", () => {
  modalContainer.classList.add("em-none");
  sessionStorage.setItem("cartItemsContainer", "");
  location.href = "./shop.html";
});

});
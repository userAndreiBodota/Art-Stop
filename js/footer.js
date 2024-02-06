//SUBSCRIBE
document.addEventListener ("DOMContentLoaded", function(){
    const errorDisplay = document.querySelector(".email-display");
const subscribeButton = document.getElementById("newsletter-btn");
var input = document.getElementById("newsletter-txt");

subscribeButton.addEventListener("click", () => {
  if (input.value === "" || !input.value.includes("@")) {
    errorDisplay.classList.remove("f-ok-display");
    errorDisplay.classList.add("f-error-display");
    errorDisplay.innerHTML = "Your Email is invalid";
  } else {
    errorDisplay.classList.remove("f-error-display");
    errorDisplay.classList.add("f-ok-display");
    errorDisplay.innerHTML = "Just check your email, Thank you!";
  }
});
});

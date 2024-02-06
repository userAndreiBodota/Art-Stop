// DROP DOWN FAQs

document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".questions");
    const qnaContainer = document.querySelectorAll(".answers");
    const chev = document.querySelectorAll(".rotate-down");
  
    for (let i = 0, clicks = 0; i < questions.length; i++) {
      questions[i].addEventListener("click", () => {
        qnaContainer[i].classList.toggle("answers-show");
        questions[i].classList.toggle("questions-rem-border");
        chev[i].classList.toggle("rotate-up");
      });
    }
  });
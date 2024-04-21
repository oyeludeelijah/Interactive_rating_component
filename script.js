const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");
const submitBtn = document.querySelector(".submit");
const buttons = document.querySelectorAll(".rating-button");
const resultNum = document.querySelector(".result-number");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const value = btn.textContent;
    // console.log(value);
    resultNum.textContent = value;

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    btn.classList.add("active");

    submitBtn.addEventListener("click", function () {
      container2.classList.remove("hidden");
      container1.classList.add("hidden");
    });
  });
});

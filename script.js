"use strict";

const btn = document.querySelector(".btn");
const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const sign1 = document.querySelector(".sign-1");
const sign2 = document.querySelector(".sign-2");
const wrapper = document.querySelector(".wrapper");
const error = document.querySelector(".number-error");
const closeBtn = document.querySelector(".close-btn");
const alertMessage = document.querySelector(".alert-message");
const restartBtn = document.querySelector(".restart");

closeBtn.addEventListener("click", () => {
  alertMessage.classList.remove("show");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && alertMessage.classList.contains("show")) {
    alertMessage.classList.remove("show");
  }
});
const values = {};

let x;
let x1;
let x2;
let result_wrapper;
let result;
let d1;

function inputResult() {
  if (!error.classList.contains("error") && values.a && values.b && values.c) {
    number1.value = "";
    number2.value = "";
    number3.value = "";
    wrapper.style.display = "none";
    btn.removeEventListener("click", checkValues);
    result = document.querySelector(".result p");
    result_wrapper = document.querySelector(".result");
    values.b = `${values.sign1}${values.b}`;
    values.c = `${values.sign2}${values.c}`;
    delete values.sign1;
    delete values.sign2;
    let d = values.b ** 2 - 4 * values.a * +values.c;
    if (d < 0) {
      alertMessage.classList.add("show");
    }
    if (d === 0) {
      x = (-values.b / 2) * values.a;
      result.textContent += `There is one root: ${x}`;
      result_wrapper.style.display = "block";
    }
    if (d > 0) {
      d1 = Math.sqrt(d);
      if (d1 % 1 !== 0) {
        let d2 = Number(d1.toFixed(2));
        x1 = ((-values.b + d2) / (2 * values.a)).toFixed(2);
        x2 = ((-values.b - d2) / (2 * values.a)).toFixed(2);
        result.textContent += `There are two roots: x1=${x1}, x2=${x2}`;
        result_wrapper.style.display = "block";
      } else {
        x1 = (-values.b + d1) / (2 * values.a);
        x2 = (-values.b - d1) / (2 * values.a);
        result.textContent += `There are two roots: x1=${x1}, x2=${x2}`;
        result_wrapper.style.display = "block";
      }
    }
  }
  restartBtn.addEventListener("click", startAgain);
}
function startAgain() {
  restartBtn.removeEventListener("click", startAgain);
  result_wrapper.style.display = "none";
  result.innerHTML = "";
  wrapper.style.display = "flex";
  Object.keys(values).forEach((key) => delete values[key]);
  btn.addEventListener("click", checkValues);
  checkValues();
}

function checkValues() {
  if (+number1.value > 0 && +number1.value < 1000) {
    error.classList.remove("error");
    values.a = +number1.value;
  } else {
    number1.focus();
    error.classList.add("error");
  }
  if (sign1.checked) {
    values.sign1 = "+";
  } else {
    values.sign1 = "-";
  }

  if (+number2.value > 0 && +number2.value < 1000) {
    error.classList.remove("error");
    values.b = +number2.value;
  } else {
    number2.focus();
    error.classList.add("error");
  }
  if (sign2.checked) {
    values.sign2 = "+";
  } else {
    values.sign2 = "-";
  }
  if (+number3.value > 0 && +number3.value < 1000) {
    error.classList.remove("error");
    values.c = +number3.value;
  } else {
    number3.focus();
    error.classList.add("error");
  }
  inputResult();
}

btn.addEventListener("click", checkValues);

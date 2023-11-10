"use strict";

const btn = document.querySelector(".btn");
const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const sign1 = document.querySelector(".sign-1");
const sign2 = document.querySelector(".sign-2");
const wrapper = document.querySelector(".wrapper");
const values = {
  sign1: "+",
  sign2: "+",
  a: 1,
  b: 1,
  c: 1,
};

let x;
let x1;
let x2;

function inputResult() {
  const result = document.querySelector(".result p");
  const result_wrapper = document.querySelector(".result");
  values.b = `${values.sign1}${values.b}`;
  values.c = `${values.sign2}${values.c}`;
  delete values.sign1;
  delete values.sign2;
  let d = values.b ** 2 - 4 * values.a * +values.c;
  if (d < 0) {
    alert("No solutions!!! D < 0");
  }
  if (d === 0) {
    x = (-values.b / 2) * values.a;
    result.textContent += ` is one root: ${x}`;
    result_wrapper.style.display = "block";
  }
  if (d > 0) {
    let d1 = Math.sqrt(d);
    if (d1 % 1 !== 0) {
      d1 = d1.toFixed(2);
    }
    x1 = (-values.b + d1) / (2 * values.a);
    x2 = (-values.b - d1) / (2 * values.a);
    result.textContent += ` are two roots: x1=${x1}, x2=${x2}`;
    result_wrapper.style.display = "block";
  }
  setTimeout(askUser, 2000);
}

function askUser() {
  let answer = confirm("Do you want to find roots again?");
  if (answer) {
    location.reload();
  }
}

function checkValues() {
  if (+number1.value > 0) {
    values.a = +number1.value;
    number1.value = "";
  } else {
    number1.value = "";
    number1.focus();
    alert("It is not a valid number. Try again");
  }
  if (sign1.value === "+" || sign1.value === "-") {
    if (sign1.value === "+") {
      values.sign1 = sign1.value;
      sign1.value = "";
    } else {
      values.sign1 = sign1.value;
      sign1.value = "";
    }
  } else {
    alert("It is not a valid value");
  }
  if (+number2.value > 0) {
    values.b = +number2.value;
    number2.value = "";
  } else {
    number2.value = "";
    number2.focus();
    alert("It is not a valid number. Try again");
  }
  if (sign2.value === "+" || sign2.value === "-") {
    if (sign2.value === "+") {
      values.sign2 = sign2.value;
      sign2.value = "";
    } else {
      values.sign2 = sign2.value;
      sign2.value = "";
    }
  } else {
    alert("It is not a valid value");
  }
  if (+number3.value > 0) {
    values.c = +number3.value;
    number3.value = "";
  } else {
    number3.value = "";
    number3.focus();
    alert("It is not a valid number. Try again");
  }
  wrapper.style.display = "none";
  inputResult();
  btn.removeEventListener("click", checkValues);
}

btn.addEventListener("click", checkValues);

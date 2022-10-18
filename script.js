let cname = document.getElementById("card-name");
let number = document.getElementById("card-number");
let expireMonth = document.getElementById("card-month");
let expireYear = document.getElementById("card-year");
let cvcNum = document.getElementById("card-cvc");

let inputName = document.getElementById("name");
let inputNumber = document.getElementById("number");
let inputMonth = document.getElementById("month");
let inputYear = document.getElementById("year");
let inputCvc = document.getElementById("cvc");

let form = document.getElementById("form");
let test = document.getElementById("thank-you");

inputName.addEventListener("input", cardName);
inputNumber.addEventListener("input", cardNumber);
inputMonth.addEventListener("input", cardMonth);
inputYear.addEventListener("input", cardYear);
inputCvc.addEventListener("input", cardCvc);

function cardName() {
  cnameVal = inputName.value.toUpperCase();
  cname.innerHTML = cnameVal;
}

function cardNumber() {
  cnumberVal = inputNumber.value;
  number.innerHTML = cnumberVal;
}

function cardMonth() {
  cMonthVal = inputMonth.value;
  expireMonth.innerHTML = cMonthVal;
}

function cardYear() {
  cYearVal = inputYear.value;
  expireYear.innerHTML = cYearVal;
}

function cardCvc() {
  cvcVal = inputCvc.value;
  cvcNum.innerHTML = cvcVal;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let cnameVal = inputName.value;
  let cnumberVal = inputNumber.value;
  let cmonthVal = inputMonth.value;
  let cyearVal = inputYear.value;
  let cvcVal = inputCvc.value;
  let numberPattern = /[A-Za-z]/;

  if (cnameVal === "") {
    errorFunc(inputName, "Please enter a name");
    inputName.style.borderColor = "red";
  } else {
    successFunc(inputName, "");
    inputName.style.borderColor = "green";
  }
  if (cnumberVal === "") {
    errorFunc(inputNumber, "Please enter a number");
    inputNumber.style.borderColor = "red";
  } else if (cnumberVal.length < 16) {
    errorFunc(inputNumber, "Wrong format, numbers only");
    inputNumber.style.borderColor = "red";
  } else if (cnumberVal.match(numberPattern)) {
    errorFunc(inputNumber, "Wrong format, numbers only");
    inputNumber.style.borderColor = "red";
  } else {
    successFunc(inputNumber, "");
    inputNumber.style.borderColor = "green";
  }

  if (cmonthVal === "") {
    errorFunc(inputMonth, "Can't be blank");
    inputMonth.style.borderColor = "red";
  } else {
    successFunc(inputMonth, "");
    inputMonth.style.borderColor = "green";
  }

  if (cyearVal === "") {
    errorFunc(inputYear, "Can't be blank");
    inputYear.style.borderColor = "red";
  } else {
    successFunc(inputMonth, "");
    inputYear.style.borderColor = "green";
  }

  if (cvcVal === "") {
    errorFunc(inputCvc, "Can't be blank");
    inputCvc.style.borderColor = "red";
  } else {
    successFunc(inputMonth, "");
    inputCvc.style.borderColor = "green";
  }

  if (cnameVal && cnumberVal && cmonthVal && cyearVal && cvcVal) {
    test.style.display = "block";
    form.style.display = "none";
  }
});

function errorFunc(req, msg) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = msg;
  span.className = "error-text";
}

function successFunc(req, msg) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = msg;
  span.className = "success-text";
}

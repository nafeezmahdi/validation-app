const userElement = document.getElementById("check");
const submitBtn = document.getElementById("btn");
let userInputElement = document.getElementById("user-info");
const outputElement = document.getElementById("result");

function outputInfo() {
  // console.dir(userElement.value);
  // console.log(userInputElement.value);
  const mail = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
  const number = /^(?:\+?88|0088)?01[3-9]\d{8}$/;
  const postCode = /^[0-9]{4}$/;
  let matchElement;

  switch (userElement.value) {
    case "email":
      matchElement = userInputElement.value;
      if (mail.test(matchElement)) {
        outputElement.innerText = `${userInputElement.value} Is Valid`;
        //    userInputElement.innerHTML = " ";
      } else {
        outputElement.innerText = `${userInputElement.value} Is Invalid`;
        //    userInputElement.innerText = " ";
      }
      break;

    case "phoneNumber":
      matchElement = userInputElement.value;
      if (number.test(matchElement)) {
        outputElement.innerText = `${userInputElement.value} Is Valid`;
        //    userInputElement.innerHTML = " ";
      } else {
        outputElement.innerText = `${userInputElement.value} Is Invalid`;
        //    userInputElement.innerText = " ";
      }
      break;

    case "postCode":
      matchElement = userInputElement.value;
      if (postCode.test(matchElement)) {
        outputElement.innerText = `${userInputElement.value} Is Valid`;
        // userInputElement.innerHTML = " ";
      } else {
        outputElement.innerText = `${userInputElement.value} Is Invalid`;
        // userInputElement.innerText = " ";
      }
      break;
  }
  userInputElement.value = "";
}

submitBtn.addEventListener("click", outputInfo);

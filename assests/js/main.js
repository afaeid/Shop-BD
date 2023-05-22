var screen = document.querySelector("body>.popup-screen");


var removePopupScreen = (e) => {
 if (e.target.classList.contains("popup-screen")) {
  screen.style.display = "none";
 } else {
  screen.style.display = "block"
 }
 console.log();
}

var openPopupScreen = () => {
 screen.style.display = "block"

 screen.addEventListener("click", removePopupScreen)
}


var loginForm = document.querySelector("body>main>form.login-form");

import { users as data } from "/assests/user-infos/users-info.js";

var setDataToLocalStorage = (property, value) => {
 localStorage.setItem(property, JSON.stringify(value))
}
var getDataFromLocalStorage = (property) => {
 return localStorage.getItem(property);
}
var login = (e) => {
 e.preventDefault();
 var loginUserName = loginForm.querySelector("div.username-cover>input#username").value;
 var loginPassword = loginForm.querySelector("div.password-cover>input#password").value;
 openPopupScreen();

 
 var filteredData = data.filter(info => loginUserName == info.userName && loginPassword == info.password);
 if (filteredData.length > 0) {
  setDataToLocalStorage("loginInfo", filteredData[0]);
  setDataToLocalStorage("loginStatus", "logedIn")
  checkLoginStatus()
  
 } else {
  alert("username or password is invalud")
 }
}

loginForm.addEventListener("submit", login)

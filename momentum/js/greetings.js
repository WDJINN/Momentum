const loginPage = document.querySelector(".login-page");
// const loginForm = document.querySelector("#login-form");
const todoPage = document.querySelector(".todo-page");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username){
  greeting.innerText = `Hello ${username}! What will you do today?`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginPage.classList.add(HIDDEN_CLASSNAME);
  todoPage.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username)
  paintGreetings(username);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
  loginPage.classList.remove(HIDDEN_CLASSNAME);
  loginPage.addEventListener("submit", onLoginSubmit);
} else {
  console.log(savedUsername);
  paintGreetings(savedUsername);
}
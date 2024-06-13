const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

const users = {};

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginId = document.getElementById("registerId").value;
  const password = document.getElementById("registerPassword").value;

  if (users[loginId]) {
    alert("User already exists");
  } else {
    users[loginId] = password;
    alert("User registered successfully");
    registerForm.reset();
    container.classList.remove("right-panel-active");
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginId = document.getElementById("loginId").value;
  const password = document.getElementById("loginPassword").value;

  if (users[loginId] && users[loginId] === password) {
    sessionStorage.setItem("user", loginId);
    window.location.href = "secured.html";
  } else {
    alert("Invalid login credentials");
  }
});

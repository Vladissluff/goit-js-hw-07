const loginForm = document.querySelector(".login-form");
const loginInputs = document.querySelectorAll(".login-form input");

const submitButton = document.querySelector(".login-form button");
submitButton.innerHTML = "Log&nbspin";

loginForm.addEventListener("submit", event => {
  event.preventDefault();
  const email = loginForm.elements.email;
  const password = loginForm.elements.password;
  if (!email.value || !password.value) {
    alert("All form fields must be filled in");
  } else {
    const userData = {
      [email.name]: email.value,
      [password.name]: password.value,
    };
    console.log("userData:", userData);
    loginForm.reset();
  }
});

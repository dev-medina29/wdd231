const usernameInput = document.querySelector("#new-username");
const passwordInput = document.querySelector("#new-password");
const confirmPasswordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");

const form1 = document.querySelector("#signup-form");
const form2 = document.querySelector("#login-form");
form1.addEventListener("submit", (e) => {
  if (
    usernameInput != null &&
    passwordInput != null &&
    confirmPasswordInput != null &&
    passwordInput != null &&
    confirmPasswordInput != null &&
    emailInput != null
  ) {
    if (passwordInput.value != confirmPasswordInput.value) {
      alert("Passwords do not match.");
      console.log(passwordInput.value);
      console.log(confirmPasswordInput.value);
      e.preventDefault();
    } else {
      //   alert("Registration successful!");
      console.log(passwordInput.value);
      console.log(confirmPasswordInput.value);
      e.preventDefault();
    }
  } else {
    e.preventDefault();
  }
});

const usernameInput = document.querySelector("#new-username");
const passwordInput = document.querySelector("#new-password");
const confirmPasswordInput = document.querySelector("#password");
const emailInput = document.querySelector("#new-email");
const lastNameInput = document.querySelector("#lastName");
const firstNameInput = document.querySelector("#firstName");
const jobTitleInput = document.querySelector("#orgTitle");
const membershipInput = document.querySelector("#memb");

const form1 = document.querySelector("#signup-form");
const form2 = document.querySelector("#login-form");
form1.addEventListener("submit", (e) => {
  if (
    usernameInput.value != "" &&
    passwordInput != "" &&
    confirmPasswordInput != "" &&
    passwordInput != "" &&
    confirmPasswordInput != "" &&
    emailInput != ""
  ) {
    if (passwordInput.value != confirmPasswordInput.value) {
      e.preventDefault();
      alert("Passwords do not match.");
      console.log(passwordInput.value);
      console.log(confirmPasswordInput.value);
    } else {
      // e.preventDefault();
      // alert("Registration successful!");
      console.log(passwordInput.value);
      console.log(confirmPasswordInput.value);
      // store data in database(local storage for now)
      // localStorage.setItem("username", usernameInput.value);
      // localStorage.setItem("password", passwordInput.value);
      // localStorage.setItem("email", emailInput.value);
      if (localStorage.getItem("username")) {
        const storage = JSON.parse(localStorage.getItem("username"));
        storage.push(usernameInput.value);
        localStorage.setItem("username", JSON.stringify(storage));
      } else {
        const storage = [];
        storage.push(usernameInput.value);
        localStorage.setItem("username", JSON.stringify(storage));
      }
      if (localStorage.getItem("password")) {
        const storage = JSON.parse(localStorage.getItem("password"));
        storage.push(passwordInput.value);
        localStorage.setItem("password", JSON.stringify(storage));
      } else {
        const storage = [];
        storage.push(passwordInput.value);
        localStorage.setItem("password", JSON.stringify(storage));
      }
      if (localStorage.getItem("email")) {
        const storage = JSON.parse(localStorage.getItem("email"));
        storage.push(emailInput.value);
        localStorage.setItem("email", JSON.stringify(storage));
      } else {
        const storage = [];
        storage.push(emailInput.value);
        localStorage.setItem("email", JSON.stringify(storage));
      }
      if (localStorage.getItem("firstName")) {
        const storage = JSON.parse(localStorage.getItem("firstName"));
        storage.push(firstNameInput.value);
        localStorage.setItem("firstName", JSON.stringify(storage));
      } else {
        const storage = [];
        storage.push(firstNameInput.value);
        localStorage.setItem("firstName", JSON.stringify(storage));
      }
      if (localStorage.getItem("lastName")) {
        const storage = JSON.parse(localStorage.getItem("lastName"));
        storage.push(lastNameInput.value);
        localStorage.setItem("lastName", JSON.stringify(storage));
      } else {
        const storage = [];
        storage.push(lastNameInput.value);
        localStorage.setItem("lastName", JSON.stringify(storage));
      }
      if (localStorage.getItem("orgTitle")) {
        const storage = JSON.parse(localStorage.getItem("orgTitle"));
        storage.push(jobTitleInput.value);
        localStorage.setItem("orgTitle", JSON.stringify(storage));
      } else {
        const storage = [];
        storage.push(jobTitleInput.value);
        localStorage.setItem("orgTitle", JSON.stringify(storage));
      }
      if (localStorage.getItem("membership")) {
        const storage = JSON.parse(localStorage.getItem("membership"));
        storage.push(membershipInput.value);
        localStorage.setItem("membership", JSON.stringify(storage));
      } else {
        const storage = [];
        storage.push(membershipInput.value);
        localStorage.setItem("membership", JSON.stringify(storage));
      }
    }
  } else {
    e.preventDefault();
    alert("Please fill in all required fields.");
  }
});
// login form
form2.addEventListener("submit", (e) => {
  let storedmail = localStorage.getItem("email") || [];
  let storedPassword = localStorage.getItem("password") || [];
  storedPassword = JSON.parse(storedPassword);
  storedmail = JSON.parse(storedmail);
  const mailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#login-password");
  console.log(mailInput.value);
  console.log(passwordInput.value);
  if (
    storedPassword.includes(passwordInput.value) &&
    storedmail.includes(mailInput.value)
  ) {
    console.log("both found");
    if (
      storedPassword.indexOf(passwordInput.value) !=
      storedmail.indexOf(mailInput.value)
    ) {
      e.preventDefault();
      alert("Invalid username or password.");
      console.log(
        storedPassword.indexOf(passwordInput.value),
        storedmail.indexOf(mailInput.value)
      );
    }
    // else {
    //   // e.preventDefault();
    //   alert("Login successful!");
    // }
  } else {
    e.preventDefault();
    alert("Invalid username or password.");
    console.log("not found");
    console.log(storedPassword, storedmail);
  }
});

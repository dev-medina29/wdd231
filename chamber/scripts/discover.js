const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const current_year = document.querySelector(".current-time");
current_year.textContent = `Last modification ${month}/${day}/${year} at ${hours}:${minutes}:${seconds}`;
// ###############################################################

// ################# HAMBURGER ###################
let menu = document.querySelector("#ham");
let navigation = document.querySelector(".navigation2");
menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  navigation.classList.toggle("open");
});

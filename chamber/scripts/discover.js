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


// ################################################
const cards = document.querySelector("#cards");
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement("div");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");
    const detail=document.createElement("p");
    const address=document.createElement("p");
    const info=document.createElement("button");
    address.setAttribute("class","street");
    detail.setAttribute("class","detai");
    card.setAttribute("class", "manager");
    info.innerHTML="Learn more"
    fullName.innerHTML = prophet.name;
    detail.innerHTML=`${prophet.description}`;
    address.innerHTML=prophet.address;
    const cost =document.createElement("p");
    cost.innerHTML=prophet.cost;
    portrait.setAttribute("Alt", `${prophet.name}`);
    portrait.setAttribute("src", `images/${prophet.image_url}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "300");
    portrait.setAttribute("height", "200");
    card.appendChild(fullName);
    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(detail);
    card.appendChild(info);
    cards.appendChild(card);
  });
};

// import statement

import { places } from "../data/places.mjs";
console.log(places);

displayProphets(places);








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
const dialogCard = document.querySelector("#dialog");
// dialog.setAttribute("id","modTry");
const displayProphets = (prophets) => {
  let i = 1;
  prophets.forEach((prophet) => {
    const card = document.createElement("div");
    const fullName = document.createElement("h1");
    const portrait = document.createElement("img");
    const detail = document.createElement("p");
    const address = document.createElement("p");
    const info = document.createElement("button");
    info.setAttribute("class", `button${i}`);
    address.setAttribute("class", "street");
    detail.setAttribute("class", "detai");
    card.setAttribute("class", "manager");
    info.innerHTML = "Learn more";
    fullName.innerHTML = prophet.name;
    detail.innerHTML = `${prophet.description}`;
    address.innerHTML = prophet.address;
    const cost = document.createElement("p");
    cost.innerHTML = prophet.cost;
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
    i++;
  });
};
const displayModal = (prophets) => {
  let i = 1;
  prophets.forEach((prophet) => {
    const Dial = document.createElement("dialog");
    Dial.setAttribute("id", `box${i}`);
    const fullName = document.createElement("h1");
    const detail = document.createElement("p");
    const address = document.createElement("p");
    const close = document.createElement("button");
    address.setAttribute("class", "street");
    detail.setAttribute("class", "detai");
    close.innerHTML = "Close";
    close.setAttribute("id", `close${i}`);
    fullName.innerHTML = prophet.name;
    detail.innerHTML = `${prophet.description}`;
    address.innerHTML = prophet.address;
    const cost = document.createElement("p");
    cost.innerHTML = `<strong>${prophet.cost}</strong>`;
    Dial.appendChild(fullName);
    Dial.appendChild(address);
    Dial.appendChild(detail);
    Dial.appendChild(cost);
    Dial.appendChild(close);
    dialogCard.appendChild(Dial);
    i++;
  });
};

// import statement

import { places } from "../data/places.mjs";
console.log(places);
displayProphets(places);
displayModal(places);

const b1 = document.querySelector(".button1");
const m1 = document.querySelector("#box1");
const c1 = document.querySelector("#close1");
b1.addEventListener("click", () => {
  m1.showModal();
});
c1.addEventListener("click", () => {
  m1.close();
});

// Modal 2
const b2 = document.querySelector(".button2");
const m2 = document.querySelector("#box2");
const c2 = document.querySelector("#close2");
b2.addEventListener("click", () => {
  m2.showModal();
});
c2.addEventListener("click", () => {
  m2.close();
});

// Modal 3
const b3 = document.querySelector(".button3");
const m3 = document.querySelector("#box3");
const c3 = document.querySelector("#close3");
b3.addEventListener("click", () => {
  m3.showModal();
});
c3.addEventListener("click", () => {
  m3.close();
});

// Modal 4
const b4 = document.querySelector(".button4");
const m4 = document.querySelector("#box4");
const c4 = document.querySelector("#close4");
b4.addEventListener("click", () => {
  m4.showModal();
});
c4.addEventListener("click", () => {
  m4.close();
});

// Modal 5
const b5 = document.querySelector(".button5");
const m5 = document.querySelector("#box5");
const c5 = document.querySelector("#close5");
b5.addEventListener("click", () => {
  m5.showModal();
});
c5.addEventListener("click", () => {
  m5.close();
});

// Modal 6
const b6 = document.querySelector(".button6");
const m6 = document.querySelector("#box6");
const c6 = document.querySelector("#close6");
b6.addEventListener("click", () => {
  m6.showModal();
});
c6.addEventListener("click", () => {
  m6.close();
});

// Modal 7
const b7 = document.querySelector(".button7");
const m7 = document.querySelector("#box7");
const c7 = document.querySelector("#close7");
b7.addEventListener("click", () => {
  m7.showModal();
});
c7.addEventListener("click", () => {
  m7.close();
});

// Modal 8
const b8 = document.querySelector(".button8");
const m8 = document.querySelector("#box8");
const c8 = document.querySelector("#close8");
b8.addEventListener("click", () => {
  m8.showModal();
});
c8.addEventListener("click", () => {
  m8.close();
});

// Modal 9
const b9 = document.querySelector(".button9");
const m9 = document.querySelector("#box9");
const c9 = document.querySelector("#close9");
b9.addEventListener("click", () => {
  m9.showModal();
});
c9.addEventListener("click", () => {
  m9.close();
});

// Modal 10
const b10 = document.querySelector(".button10");
const m10 = document.querySelector("#box10");
const c10 = document.querySelector("#close10");
b10.addEventListener("click", () => {
  m10.showModal();
});
c10.addEventListener("click", () => {
  m10.close();
});
// ################### Date storage #########################

// Run this when the page loads
const TimeD = document.querySelector(".last-visit");
window.addEventListener("load", () => {
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (lastVisit) {
    const diffMs = now - parseInt(lastVisit, 10);
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMs < 1000 * 60 * 60 * 24) {
      TimeD.textContent = "Back so soon! Awesome!";
    } else if (diffDays === 1) {
      TimeD.textContent = "You last visited 1 day ago.";
    } else {
      TimeD.textContent = `You last visited ${diffDays} days ago.`;
    }
  } else {
    TimeD.textContent = "Welcome! Let us know if you have any questions.";
  }

  // Save current visit
  localStorage.setItem("lastVisit", now);
});

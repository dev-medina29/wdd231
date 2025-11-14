const MyData = "https://dev-medina29.github.io/wdd231/chamber/data/member.json";
const cards = document.querySelector(".cards");
const displayMembers = (members) => {
  members.forEach((member) => {
    const card = document.createElement("section");
    card.setAttribute("class", "manager");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");
    const detail = document.createElement("a");
    const descrip = document.createElement("p");
    fullName.innerHTML = `${member.name}`;
    portrait.setAttribute("Alt", member.name);
    portrait.setAttribute("src", member.image);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "l00");
    portrait.setAttribute("height", "l00");
    detail.setAttribute("href", member.website);
    detail.innerHTML = "Details";
    descrip.innerHTML = member.description;
    card.appendChild(portrait);
    card.appendChild(fullName);
    card.appendChild(descrip);
    card.appendChild(detail);
    cards.appendChild(card);
  });
};
async function getMembersData() {
  const response = await fetch(MyData);
  const data = await response.json();
  // console.table(data.members);
  displayMembers(data.members);
}
getMembersData();

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();
const current_year= document.querySelector('.current-time');
current_year.textContent= `Last modification ${month}/${day}/${year} at ${hours}:${minutes}:${seconds}`;

// ############### CLICK BUTTON ################

const grid=document.querySelector(".cards");
const gridbutton=document.querySelector("#grid");
const listbutton=document.querySelector("#list");
gridbutton.addEventListener("click", () => {
	grid.classList.add("grid");
	grid.classList.remove("list");
});
listbutton.addEventListener("click", showList); 
function showList() {
	grid.classList.add("list");
	grid.classList.remove("grid");
}

// ################# HAMBURGER ###################
let menu = document.querySelector('#ham');
let navigation = document.querySelector('.navigation2');
menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  navigation.classList.toggle('open');
});
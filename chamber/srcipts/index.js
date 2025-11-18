const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=-4.274567498129054&lon=15.312341413005706&appid=04f1b04f494911cc997005d70334e49c&units=imperial";

const spot = document.querySelector(".spolight");

const weather = document.querySelector(".weather");

async function getData() {
  const myresponse = await fetch(url);
  if (myresponse.ok) {
    const mydata = await myresponse.json();
    console.log(mydata);
  } else {
    throw Error(await response.text());
  }
}
getData();

// ###############################################
const MyData = "https://dev-medina29.github.io/wdd231/chamber/data/member.json";

const displayMembers = (members) => {
  const event = document.querySelector(".events");
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
    event.appendChild(card);
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
const month = date.getMonth() + 1;
const day = date.getDate();
const current_year = document.querySelector(".current-time");
current_year.textContent = `Last modification ${month}/${day}/${year} at ${hours}:${minutes}:${seconds}`;
// ###############################################################

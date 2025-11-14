const url =
  "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const cards = document.querySelector("#cards");
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement("div");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");
    card.setAttribute("class", "manager");
    fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
    portrait.setAttribute("Alt", `${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "l00");
    portrait.setAttribute("height", "l00");
    card.appendChild(fullName);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
};
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets);
  displayProphets(data.prophets);
}
getProphetData();

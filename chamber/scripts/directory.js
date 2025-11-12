const MyData = "https://dev-medina29.github.io/wdd231/chamber/data/member.json";
const cards = document.querySelector("#cards");
const displayMembers = (members) => {
  members.forEach((member) => {
    const card = document.createElement("section");
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

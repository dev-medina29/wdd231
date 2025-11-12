const MyData="";
const cards = document.querySelector("#cards");
const displayMembers = (members) => {
  members.forEach((member) => {
    const card = document.createElement("section");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");
    fullName.innerHTML = `${member.name} ${member.lastname}`;
    portrait.setAttribute("Alt", `${member.name} ${member.lastname}`);
    portrait.setAttribute("src", member.image);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "l00");
    portrait.setAttribute("height", "l00");
    card.appendChild(fullName);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
};
async function getMembersData() {
  const response = await fetch(MyData);
  const data = await response.json();
  // console.table(data.prophets);
  displayMembers(data.prophets);
}
getMembersData();

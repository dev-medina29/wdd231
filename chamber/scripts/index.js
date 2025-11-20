const url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=-4.274567498129054&lon=15.312341413005706&appid=04f1b04f494911cc997005d70334e49c&units=imperial";

const spot = document.querySelector(".spolight");

async function getData() {
  const myresponse = await fetch(url);
  if (myresponse.ok) {
    const mydata = await myresponse.json();
    console.log(mydata);
    j = 3;
    for (let i = 1; i < 4; i++) {
      const weather = document.querySelector(".weather");
      const card = document.createElement("section");
      card.setAttribute("class", "weatherManager");
      const day = mydata.list[j].dt_txt;
      console.log(day);
      const dayToD = document.createElement("p");
      dayToD.innerHTML = day;
      const intro = document.createElement("p");
      intro.innerHTML = "Brazzaville weather";
      const temp = document.createElement("p");
      temp.innerHTML = `${mydata.list[j].main.temp}&deg F`;
      const image = document.createElement("img");
      image.setAttribute(
        "src",
        `https://openweathermap.org/img/w/${mydata.list[j].weather[0].icon}.png`
      );
      const descr = document.createElement("p");
      descr.innerHTML = mydata.list[j].weather[0].description;
      image.setAttribute("alt", mydata.list[j].weather[0].description);
      image.setAttribute("loading", "lazy");
      card.appendChild(intro);
      card.appendChild(dayToD);
      card.appendChild(temp);
      card.appendChild(image);
      card.appendChild(descr);
      weather.appendChild(card);
      j += 9;
    }
  } else {
    throw Error(await response.text());
  }
}
getData();

// ###############################################
const MyData = "https://dev-medina29.github.io/wdd231/chamber/data/member.json";

const displayMembers = (members) => {
  const event = document.querySelector(".spolight");
  const memberToD = [];
  members.forEach((member) => {
    if (member.membershipLevel == silver || member.membershipLevel == gold) {
      memberToD.push(member);
    }
  });
  console.log(memberToD);
  const toDisplay = [];
  for (let t = 0; t < 2; t++) {
    const randomChoice =
      memberToD[Math.floor(Math.random() * memberToD.length)];
    while (randomChoice in toDisplay) {
      randomChoice = memberToD[Math.floor(Math.random() * memberToD.length)];
    }
    toDisplay.push(randomChoice);
    const card = document.createElement("section");
    card.setAttribute("class", "manager");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");
    const detail = document.createElement("p");
    const address = document.createElement("p");
    const membership = document.createElement("p");
    const phone = document.createElement("p");
    fullName.innerHTML = `${randomChoice.name}`;
    portrait.setAttribute("Alt", randomChoice.name);
    portrait.setAttribute("src", randomChoice.image);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "l00");
    portrait.setAttribute("height", "l00");
    detail.innerHTML = `<b>website</b> : ${randomChoice.website}`;
    address.innerHTML = `<b>Address</b> : ${randomChoice.address}`;
    membership.innerHTML = `<b>Membership</b> : ${randomChoice.membershipLevel}`;
    phone.innerHTML = `<b>Phone</b> : ${randomChoice.phone}`;

    card.appendChild(portrait);
    card.appendChild(fullName);
    card.appendChild(phone);
    card.appendChild(address);
    card.appendChild(detail);
    card.appendChild(membership);
    event.appendChild(card);
  }
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

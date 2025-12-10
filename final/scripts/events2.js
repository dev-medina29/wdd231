import { renderEvents } from "./myModule.mjs";
async function loadEvents() {
  const container = document.querySelector("#events-list");
  try {
    const res = await fetch("./data/events.json");
    if (!res.ok) throw new Error("File not found, please check your path.");
    const data = await res.json();
    renderEvents(data.events || []);
  } catch (err) {
    const errorD = document.createElement("p");
    errorD.setAttribute("class", "error");
    errorD.textContent = `Unable to load events. ${err.message}`;
    // container.innerHTML = `<p class="error">Unable to load events. ${err.message}</p>`;
    container.appendChild(errorD);
    console.log(err.message);
  }
}

loadEvents();

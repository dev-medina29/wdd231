export function renderEvents(events) {
  const container = document.getElementById("events-list");
  if (!events.length) {
    container.innerHTML = "<p>No upcoming events — check back later.</p>";
    return;
  }
  // sort by start date
  events.sort((a, b) => new Date(a.start) - new Date(b.start));
  events.forEach((e) => {
    const title = document.createElement("h3");
    const startdate = document.createElement("p");
    const enddate = document.createElement("p");
    const location = document.createElement("p");
    const description = document.createElement("p");
    const action = document.createElement("a");
    const firstContent = document.createElement("div");
    const container2 = document.createElement("div");
    const textField = document.createElement("p");
    textField.innerHTML = `Discover more about the event here: <a href=${e.url}>Click here please</a>`;
    container2.setAttribute("class", "eventGood");
    firstContent.setAttribute("class", "firstContent");
    const LineContent = document.createElement("p");
    title.textContent = e.title;
    const startStr = new Date(e.start).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    const endStr = new Date(e.end).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    startdate.innerHTML = startStr;
    enddate.innerHTML = endStr;
    location.innerHTML = e.location;
    description.innerHTML = e.description;
    LineContent.innerHTML = `${startStr} - ${endStr} • ${e.location}`;

    const dialog = document.createElement("dialog");
    dialog.setAttribute("class", "OpenDialog");
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    action.textContent = "Details";
    action.setAttribute("class", "btn-dialog");
    dialog.appendChild(title);
    dialog.appendChild(description);
    dialog.appendChild(textField);
    dialog.appendChild(closeBtn);

    firstContent.appendChild(title);
    firstContent.appendChild(LineContent);
    container.appendChild(container2);
    container2.appendChild(firstContent);
    container2.appendChild(action);
    container2.appendChild(dialog);
    //   Dialog
    action.addEventListener("click", () => {
      const OpenDialog = document.querySelector(".OpenDialog");
      OpenDialog.showModal();
    });
    closeBtn.addEventListener("click", () => {
      const OpenDialog = document.querySelector(".OpenDialog");
      OpenDialog.close();
    });

    // End Dialog
  });
}

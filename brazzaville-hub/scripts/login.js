const lname = document.querySelector(".name");
const fname = document.querySelector(".fname");
const email = document.querySelector(".email");
const membership = document.querySelector(".membership");
const jobTitle = document.querySelector(".jobTitle");
const username = document.querySelector(".user");

let storedNames = JSON.parse(localStorage.getItem("lastName")) || [];
let storedFnames = JSON.parse(localStorage.getItem("firstName")) || [];
let storedEmails = JSON.parse(localStorage.getItem("email")) || [];
let storedMemberships = JSON.parse(localStorage.getItem("membership")) || [];
let storedJobTitles = JSON.parse(localStorage.getItem("orgTitle")) || [];
let storedUsernames = JSON.parse(localStorage.getItem("username")) || [];
// get url
const params = new URLSearchParams(document.location.search);

// extract data from url
const emailFromUrl = params.get("email");

const Ind = storedEmails.indexOf(emailFromUrl);
lname.textContent = storedNames[Ind]|| "N/A";
fname.textContent = storedFnames[Ind] || "N/A";
email.textContent = storedEmails[Ind] || "N/A";
membership.textContent = storedMemberships[Ind] || "N/A";
jobTitle.textContent = storedJobTitles[Ind] || "N/A";
username.textContent = storedUsernames[Ind] || "N/A";
// #############################

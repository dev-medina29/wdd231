// Get URL parameters from the form submission
const params = new URLSearchParams(document.location.search);

// Extract form data
const firstName = params.get("firstName") || "Not provided";
const lastName = params.get("lastName") || "Not provided";
const email = params.get("new-email") || "Not provided";
const mobile = params.get("mobile") || "Not provided";
const membership = params.get("membership") || "Not provided";
const jobTitle = params.get("orgTitle") || "Not provided";

// Display form data on the page
document.getElementById("display-firstName").textContent = firstName;
document.getElementById("display-lastName").textContent = lastName;
document.getElementById("display-email").textContent = email;
document.getElementById("display-mobile").textContent = mobile;
document.getElementById("display-orgTitle").textContent = jobTitle;
document.getElementById("display-membership").textContent = membership;

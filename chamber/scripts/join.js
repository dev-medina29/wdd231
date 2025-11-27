const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const current_year = document.querySelector(".current-time");
current_year.textContent = `Last modification ${month}/${day}/${year} at ${hours}:${minutes}:${seconds}`;

// Set timestamp in the hidden field

// ###############################################################

// ################# HAMBURGER ###################
let menu = document.querySelector("#ham");
let navigation = document.querySelector(".navigation2");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  navigation.classList.toggle("open");
});

// ###########################################
// NP Membership Modal
const CloseButton=document.querySelector("#close1");
const D1=document.querySelector("#npModal");
const openBut=document.querySelector("#Op1");
openBut.addEventListener("click",()=>{
  D1.showModal();
})
CloseButton.addEventListener("click",()=>{
  D1.close();
})

// Bronze Membership Modal
const CloseButton2=document.querySelector("#close2");
const D2=document.querySelector("#bronzeModal");
const openBut2=document.querySelector("#Op2");
openBut2.addEventListener("click",()=>{
  D2.showModal();
})
CloseButton2.addEventListener("click",()=>{
  D2.close();
})

// Silver Membership Modal
const CloseButton3=document.querySelector("#close3");
const D3=document.querySelector("#silverModal");
const openBut3=document.querySelector("#Op3");
openBut3.addEventListener("click",()=>{
  D3.showModal();
})
CloseButton3.addEventListener("click",()=>{
  D3.close();
})

// Gold Membership Modal
const CloseButton4=document.querySelector("#close4");
const D4=document.querySelector("#goldModal");
const openBut4=document.querySelector("#Op4");
openBut4.addEventListener("click",()=>{
  D4.showModal();
})
CloseButton4.addEventListener("click",()=>{
  D4.close();
})


const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    // Validate membership select has a real value (placeholder has empty value)
    const membershipValue = form.elements['membership'] ? form.elements['membership'].value : '';
    if (!membershipValue) {
      e.preventDefault();
      alert('Please choose a membership level before submitting the form.');
      if (form.elements['membership']) form.elements['membership'].focus();
      return;
    }

    // Set timestamp at submit time in ISO format
    const now = new Date();
    const tsField = document.querySelector('#timestamp');
    if (tsField) tsField.value = now.toISOString();
  });
}
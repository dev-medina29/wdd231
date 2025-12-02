const url= new URLSearchParams(window.location.search);
const Name= url.get("firstName");
const sn=url.get("lastName");
console.log(Name);
console.log(sn);
url.append("firstName","Veniel");
const Nam= url.getAll("firstName");
console.log(Nam[1]);
console.log(Nam);
url.delete("firstName");
delete Nam[1];
console.log(Nam[1]);
console.log(url.toString());
// 
const links = document.querySelectorAll(".barranavegacion");
links.forEach((item)=>{
item.addEventListener("click", ()=>{
const el = document.getElementById(item.getAttribute("data-link"));
el.scrollIntoView({behavior: "smooth", block: "start"})



})


})
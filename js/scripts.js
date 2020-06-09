const hamburger=document.querySelector(".hamburger");
const linkContainer=document.querySelector(".link_container");
const links=document.querySelectorAll(".link_container li");hamburger.addEventListener("click",()=>{linkContainer.classList.toggle("open");
links.forEach(link=>{link.classList.toggle("fade");});});
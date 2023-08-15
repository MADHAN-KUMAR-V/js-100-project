const magnifier = document.querySelector(".magnifier");
const searchContainer = document.querySelector(".search__container");

magnifier.addEventListener("click",()=>{
    searchContainer.classList.toggle("active");
})
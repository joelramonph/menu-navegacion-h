// classList muestra y obtine todas las clases 
// contains chequea classList para una clase especifica
// add agrega clases 
// remove elimina clases
// toggle - toggles clases
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");


navToggle.addEventListener("click", function () {
    // console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
    // if(links.classList.contains("show-links")) {
    //     links.classList.remove("show-links")
    // } else {
    //     links.classList.add("show-links")
    // }

    links.classList.toggle("show-links")
})
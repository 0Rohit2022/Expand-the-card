// This will select your all divs inside the html
const cardActiveEl = document.querySelectorAll(".card");
// It will print the first div
// console.log(cardActiveEl[0]);
var cardActiveindex = 0;

addclass();
function addclass() {
cardActiveEl.forEach((cardActive) => {
    // It will print all the divs that you have in your html file
    // console.log(cardActive);
    cardActive.addEventListener("click", () => {

       removeActiveclass();
        cardActive.classList.add("active");
        
    });
   
});

}

function removeActiveclass() {
    cardActiveEl.forEach((cardActive) => {
        cardActive.classList.remove("active");
    })
   
}


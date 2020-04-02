console.log("HELLO WORLD!");


function toggleMenu() {

    //SET X TO BE OUR #menu ELEMENT
    var x = document.getElementById("menu");
    //SET Y TO BE OUR #navButton ELEMENT
    var y = document.getElementById("navButton");

    //TOGGLE (EITHER ADD OR REMOVE) THE .displayMenu CLASS TO #menu ELEMENT
    x.classList.toggle("displayMenu");
    //TOGGLE THE .fa-toggle-on CLASS FROM FONTAWESOME to the #navButton ELEMENT
    y.classList.toggle("fas fa-times")

}

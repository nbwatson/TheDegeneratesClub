
// Finding navigation buttons
const menuButton = document.getElementById('menu');
const listItems = document.getElementById('list-items'); //entry point for list items
const navMenu = document.getElementById('nav-menu');

// Perform actions on click event

menuButton.addEventListener("click", showNavMenuOnClick);



// Function definitions

function showNavMenuOnClick() {
    if(!navMenu.style.display) { // equal to (navMenu.style.display === '')
        navMenu.style.display = 'flex'
    } else {
        navMenu.style.display = '';
    }
}

//Calculator window 

var calculator; 

function openCalculator() {
   calculator = window.open("https://nbwatson.github.io/TheDegeneratesClub/cal.html");
  }
  function closeCalculator() {
    calculator.close();
  }




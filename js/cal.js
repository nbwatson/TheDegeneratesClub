
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


//calculator functions

// assigning the inputs
let betInput = Number(prompt('bets', ['Please enter your bet amount']));
let oddsInput = Number(prompt('odds', ['Please enter your odds amount']));



// Functions for math equations 
let totalWinningsResult;

if ( oddsInput >=  100) { 
    totalWinningsResult = ((( oddsInput / 100 ) * betInput ) + betInput );
}
else if (parseFloat(oddsInput) <=  parseFloat(-100) ) { 
    totalWinningsResult = ( (( 100 / Math.abs(oddsInput) ) * betInput ) + betInput );
}
else if( (oddsInput <=  100) || parseFloat(oddsInput) >=  parseFloat(-100) ) {
    alert("Sorry, Invalid entry please enter odds greater than +100 or less than -100");
}

let profitResult;

if ( oddsInput >=  100) { profitResult = ( (( oddsInput / 100 ) * betInput ) );
}
else if (parseFloat(oddsInput) <=  parseFloat(-100) ) { profitResult = ( (( 100 / Math.abs(oddsInput) ) * betInput ) );
}

var n = totalWinningsResult.toFixed(2)
var i = profitResult.toFixed(2)

//Printing to the Console log
console.log(`${n}`);
console.log(`${i}`);

//uploading the results to HTML
document.getElementById('winning').innerHTML += `${n}`;
document.getElementById('profit').innerHTML += `${i}`;
document.getElementById('betsEntered').innerHTML += `${betInput}`;
document.getElementById('oddsEntered').innerHTML += `${oddsInput}`;


// Buttons for refresh
const actionButton = document.getElementById('button');
actionButton.addEventListener("click", myFunction);


//function for Refresh button and close out of window.
var calculator;

function openpicks() {
    calculator = window.open("https://nbwatson.github.io/TheDegeneratesClub/picks.html");
   }

function myFunction(){
    location.reload(true);
}


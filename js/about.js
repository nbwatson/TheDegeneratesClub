
// Finding navigation buttons
const menuButton = document.getElementById('menu-container');
const listItems = document.getElementById('list-items'); //entry point for list items
const navMenu = document.getElementById('nav-menu');

// Perform actions on click event for Nav menu

menuButton.addEventListener("click", showNavMenuOnClick);



// Nav menu Function definitions

function showNavMenuOnClick() {
    if(!navMenu.style.display) { // equal to (navMenu.style.display === '')
        navMenu.style.display = 'flex'
    } else {
        navMenu.style.display = '';
    }
}


// Find Tab buttons
var button = document.getElementsByClassName('but'),
    tabContent = document.getElementsByClassName('tab-content');
button[0].classList.add('active');
tabContent[0].style.display = 'block';


function blogger(e, bloggerName) {
    var i;
    for (i = 0; i < button.length; i++) {
        tabContent[i].style.display = 'none';
        button[i].classList.remove('active');
    }
    document.getElementById(bloggerName).style.display = 'block';
    e.currentTarget.classList.add('active');
}

function validateForm() {
    var x = document.forms["contactForm"]["visitor_name"].value;
    var y = document.forms["contactForm"]["visitor_lastName"].value;
    var z = document.forms["contactForm"]["visitor_email"].value;
    if (x == "") {
      alert("First name must be filled out");
      return false;
    }
    else if (y == "") {
        alert("Last name must be filled out");
        return false;
      }
    else if (z == "") {
        alert("Email must be filled out");
        return false;
      }
  }
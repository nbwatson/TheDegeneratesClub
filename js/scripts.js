// Find elements on web page
const actionButton = document.getElementById('action-btn');
// Finding navigation buttons
const menuButton = document.getElementById('menu-container');
const listItems = document.getElementById('list-items'); //entry point for list items
const navMenu = document.getElementById('nav-menu');

// Perform actions on click event
actionButton.addEventListener("click", performActionOnClick);
menuButton.addEventListener("click", showNavMenuOnClick);

const dataCollection = [];

// Function definitions
function performActionOnClick() {
    const value = `test ${new Date()}`;

    dataCollection.push(value);

    addItemAndRenderList(dataCollection);
}

function addItemAndRenderList(dataCollection) {
    //cleaning unordered list
    while (listItems.firstChild) {
        listItems.removeChild(listItems.firstChild);
    }

    //add new item with value to existing unordered list 
    for (let i = 0; i < dataCollection.length; i++) {
        const listItem = document.createElement("LI");
        const textValueForListItem = document.createTextNode(dataCollection[i]);

        listItem.appendChild(textValueForListItem);
        listItems.appendChild(listItem);
    }
}

// This is menu prep
function showNavMenuOnClick() {
    if(!navMenu.style.display) { // equal to (navMenu.style.display === '')
        navMenu.style.display = 'flex'
    } else {
        navMenu.style.display = '';
    }
}
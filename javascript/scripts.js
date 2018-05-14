/* Modal window open/close function */

var popup = document.querySelector('.pop-up');
function openPopup() {
        popup.style.display = "block";
    };
function windowClose() {
        popup.style.display = "none";
    };

/* Range filter function */



/* Catalogue filter function */

var allItems = document.getElementsByClassName('catalogue-item');
var adaptiveFilter = document.getElementsById('adaptive');
var adaptiveItem = document.getElementsByClassName('adaptive-item');
var responsiveFilter = document.getElementsById('responsive');
var responsiveItem = document.getElementsByClassName('responsive-item');
var fixedFilter = document.getElementsById('fixed');
var fixedItem = document.getElementsByClassName('fixed-item');

function showSelected() {
    allItems.style.display = "none";
    if(adaptiveFilter.type === "radio" && adaptiveFilter.checked) {
        adaptiveItem.style.display = "inline-block";
    } else if(responsiveFilter.type === "radio" && responsiveFilter.checked) {
        responsiveItem.style.display = "inline-block";
    } else if(fixedFilter.type === "radio" && fixedFilter.checked) {
        fixedItem.style.display = "inline-block";
    }
};

/* Catalogue sort function */
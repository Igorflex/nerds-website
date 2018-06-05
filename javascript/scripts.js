var popup = document.querySelector('.pop-up');
var adressButton = document.getElementById('adress-button');
var closeButton = document.getElementById('close-button');

adressButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

function openPopup () {
    popup.classList.remove('pop-up-hidden');
    document.getElementById('username').focus();
}

function closePopup () {
    popup.classList.add('pop-up-hidden');
}

document.addEventListener('keypress', function(event) {
    if (event.keyCode === 27) {
        popup.classList.add('pop-up-hidden');
    }
});

/* Range filter function */



/* Catalogue filter function */

var allItemsFilter = document.getElementById('all-items');
var allItems = document.getElementsByClassName('catalogue-item');
var adaptiveFilter = document.getElementById('adaptive');
var adaptiveItem = document.getElementsByClassName('adaptive-item');
var responsiveFilter = document.getElementById('responsive');
var responsiveItem = document.getElementsByClassName('responsive-item');
var fixedFilter = document.getElementById('fixed');
var fixedItem = document.getElementsByClassName('fixed-item');

function showSelected() {
    Object.values(allItems).map(function(element) {
        element.style.display = 'none';
    });
    if (allItemsFilter.type === "radio" && allItemsFilter.checked) {
        Object.values(allItems).map(function(element){
            element.style.display = 'inline-block';
        });
    } else if(adaptiveFilter.type === "radio" && adaptiveFilter.checked) {
        Object.values(adaptiveItem).map(function(element){
            element.style.display = 'inline-block';
        });
    } else if(responsiveFilter.type === "radio" && responsiveFilter.checked) {
        Object.values(responsiveItem).map(function(element){
            element.style.display = 'inline-block';
        });
    } else if(fixedFilter.type === "radio" && fixedFilter.checked) {
        Object.values(fixedItem).map(function(element){
            element.style.display = 'inline-block';
        });
    };
};

/* Catalogue sort function */
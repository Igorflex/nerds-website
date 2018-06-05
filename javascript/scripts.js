/* Modal window open/close function */
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



/* Catalogue sort function */
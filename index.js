var slideList = document.getElementsByClassName('slide');
var slideIndex =  0;
for (slide of slideList) {
    slide.style.display = 'none';
}
function slideShow() {
    slideList[(slideIndex + 2) % 3].style.display = 'none';
    slideList[slideIndex].style.display = 'block';
    slideIndex = (slideIndex + 1) % 3;
}
slideShow();
setInterval(slideShow, 4500);
function closeButton() {
    document.getElementById('ticket-modal').style.display = 'none';
}
function buyTickets() {
    document.getElementById('ticket-modal').style.display = 'block';
}
var smallScreenNavBarList = document.getElementsByClassName('small-screen');
var smallScreenNavBarDisplay = 0;
function toggleNavBar() {
    smallScreenNavBarDisplay = (smallScreenNavBarDisplay + 1) % 2;
    if (smallScreenNavBarDisplay === 1) {
        for (smallScreenNavButton of smallScreenNavBarList) {
            smallScreenNavButton.style.display = 'block';
        } 
    }
    else {
        for (smallScreenNavButton of smallScreenNavBarList) {
            smallScreenNavButton.style.display = 'none';
        } 
    }
}


/* https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self */
var slideNumber = 1;
displaySlide(slideNumber);

function changeSlide(n) {
    displaySlide (slideNumber += n);
}

function displaySlide(n) {
    var i;
    var x = document.getElementsByClassName("slideImage");
    // Loop around
    if (n > x.length) {slideNumber = 1}
    if (n < 1) {slideNumber = x.length}

    for (i = 0; i < x.length; i++)
    {
        x[i].style.display = "none";
    }
    x[slideNumber-1].style.display = "flex";
}


/* https://www.w3schools.com/howto/howto_js_popup_form.asp */
function showMobileMenu() {
    document.getElementById("popUp--navBar").style.display="flex";
    //document.getElementById("popUp--navBar").classList.add="popUp--navBar--open";
    document.getElementById("btn--open").style.display="none";
    document.getElementById("btn--close").style.display="flex";
    }
function closeMobileMenu() {
    document.getElementById("popUp--navBar").style.display="none";
    //document.getElementsByClassName("popUp--navBar--open").classList.remove="popUp--navBar--open";
    document.getElementById("btn--close").style.display="none";
    document.getElementById("btn--open").style.display="flex";
}


/* https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_modal_close */
var cover = document.getElementById("01cover")
function showShoppingCart() {
    cover.style.display="flex";
}
window.onclick = function(current) {
    if (current.target == cover) {
        cover.style.display="none";
    }
}
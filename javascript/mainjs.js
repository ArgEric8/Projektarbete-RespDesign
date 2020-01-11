    var slideNumber = 1;
    displaySlide(slideNumber);

    function currentSlide(n) {
        displaySlide (slideNumber += n)
    }

    function displaySlide(n) {
        var i;
        var x = document.getElementsByClassName("slide");
        // Loop around
        if (n > x.length) {slideNumber = 1;}
        if (n < 1) {slideNumber = x.length;}

        for (i = 0; i < x.length; i++)
        {
            x[i].style.display = "none";
        }
    }
    x[slideNumber-1].style.display = "flex";

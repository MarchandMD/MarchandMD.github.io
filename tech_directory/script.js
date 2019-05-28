const button = document.getElementById("myBtn");


window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (window.pageYOffset >= 80 && window.innerWidth >= 815) {
        button.style.display = "block";
    } else if (window.pageYOffset >= 80) {
        button.style.display = "block";
        button.classList.add("mobileShow");
    }
    
    else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
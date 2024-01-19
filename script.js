window.addEventListener('load', function() {
    document.body.style.opacity = 1;
});

window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function scrollFunction() {
    var navbar = document.querySelector(".nav");
    var triggerHeight = window.innerHeight * 0.72; // 72% of the viewport height

    // Use a combination of properties for maximum compatibility
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > triggerHeight) {
        navbar.classList.add("fixed-nav");
        navbar.style.top = "0"; // Ensure navbar stays at the top

        // Reserve space for navbar
        document.body.style.paddingTop = navbar.offsetHeight + "px";
    } else {
        navbar.classList.remove("fixed-nav");
        navbar.style.top = ""; // Reset top property

        // Remove reserved space
        document.body.style.paddingTop = 0;
    }
}

window.onscroll = function() {
    scrollFunction();
    arrowScrollFunction();
};

function arrowScrollFunction() {
    var arrow = document.getElementById("arrow");

    // Use a combination of properties for maximum compatibility
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var windowHeight = window.innerHeight;

    // Calculate opacity (0 when scrollPosition is at 50% of windowHeight, 1 when at top)
    var opacity = 1 - Math.min(scrollPosition / (windowHeight * 0.5), 1);

    // Apply opacity
    arrow.style.opacity = opacity;
}











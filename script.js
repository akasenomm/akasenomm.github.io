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

// Initial calculation on page load
document.addEventListener('DOMContentLoaded', function () {
    scrollFunction();
});

// Recalculate trigger height on window resize
window.addEventListener('resize', function () {
    scrollFunction();
});

window.addEventListener('scroll', scrollFunction);


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

// Debounce function to improve performance on scroll
function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(context, args);
        }, wait);
    };
}

window.addEventListener('load', function () {
    document.body.style.opacity = 1;
});

window.addEventListener('scroll', debounce(handleScroll, 50)); // Debounce scroll events

function scrollFunction() {
    var navbar = document.querySelector(".nav");
    var header = document.querySelector("header");

    // Calculate trigger height dynamically based on header height
    var triggerHeight = header.offsetHeight;

    // Use a combination of properties for maximum compatibility
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Handle fixed navbar
    if (scrollPosition> triggerHeight) {
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



// Additional code for revealing elements and arrow opacity...















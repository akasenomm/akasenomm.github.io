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

// Scrollspy functionality
window.addEventListener('scroll', function (event) {
    var scrollPosition = window.scrollY;
    var links = document.querySelectorAll('#navbar a');
    var viewportHeight = window.innerHeight;
    var percentage = 0.15; // Adjust this value to your needs

    links.forEach(function (link) {
        var section = document.querySelector(link.hash);
        if (
            (section.offsetTop - viewportHeight * percentage) <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
        ) {
            // Remove 'active' class from all links
            links.forEach(function (link) {
                link.classList.remove('active');
            });

            // Add 'active' class to the current link
            link.classList.add('active');
        }
    });
});



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

    // Calculate opacity (0 when scrollPosition is at 60% of windowHeight, 1 when at top)
    var opacity = 1 - Math.min(scrollPosition / (windowHeight * 0.6), 1);

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

window.addEventListener('scroll', debounce(handleScroll, 50)); // Debounce scroll events. Before: 50

// For the fixed nav bar
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

// First, set the --vh custom property to the window height in pixels
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Then, listen for the resize event and update --vh
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Anchor tag click scrolls to right section 
window.addEventListener('DOMContentLoaded', (event) => {
    const navigation = document.querySelector(".nav");
    const navigationHeight = navigation.offsetHeight;

    document.documentElement.style.setProperty(
      "--scroll-padding",
      navigationHeight + "px"
    );
});

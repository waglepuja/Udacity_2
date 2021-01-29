/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function isInViewport (elem) {
	const distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};
// build the nav

function buildNavBar() {
    // loop over all of your sections
for (section of sections) {
    // create the <li> element
    let navItem = document.createElement('li');
    // create the <a> element
    let navItemLink = document.createElement('a');
    navItemLink.className = 'menu__link';
    // use the section data-nav to set the navItem title
    navItemLink.textContent = section.dataset.nav;
    // save the section.id in its dataset
    navItemLink.dataset["section"] = section.id;
    // append the link to the navItem
    navItem.appendChild(navItemLink);
    // append the link to the navbar
    navbar.appendChild(navItem);
}
};
// Add class 'active' to section when near top of viewport

function addActiveClass(){         
    for (section of sections){
        if (isInViewport(section)){
            section.classList.add("your-active-class");
        }else{
            section.classList.remove("your-active-class");
        }
    }
};

// Scroll to anchor ID using scrollTO event

function scrollToClick(event) {
    navItem.addEventListener("click", scrollToClick);
        ev.preventDefault()        
        const clicked = document.querySelector(section.id);
        clicked.scrollIntoView({
            block: "start",
            alignToTop: true,
            behavior: "smooth"
        });
    };

    

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu

buildNavBar();

// Scroll to section on link click

// // Set sections as active

document.addEventListener('scroll', function(){
    addActiveClass();
});










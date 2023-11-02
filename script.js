/** Main header functions
 * 
 *  Hiding the header on scroll down
 * 
 *  */ 
let lastScrollTop = 0;
const header = document.getElementById("headerContainer");
const headerStyles = window.getComputedStyle(header);

window.addEventListener("scroll", () => {
  const currentScrollTop = window.scrollY;
  if (currentScrollTop > lastScrollTop) {  // User is scrolling down
    header.style.top = `-${headerStyles.getPropertyValue("height")}`; // Adjust the value based on the height of your header
    //Close mobile nav
    if (mobileNavOpen) openMobileNav();
  } else {   // User is scrolling up
    header.style.top = "0";
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});

/** Mobile nav
 * 
 *  Showing and hiding the mobile hamburger menu
 * 
 *  */ 
let mobileNavOpen = false;
const openMenu = document.getElementById("hamburgerMenu");
const mobileNav = document.getElementById("mobileNav");

const mobileNavStyles = window.getComputedStyle(mobileNav);
mobileNav.style.top = `${headerStyles.getPropertyValue("height")}`;

openMenu.addEventListener("click", openMobileNav); 
function openMobileNav() {
  if (mobileNavOpen) {
    openMenu.classList.remove('close-icon');
    mobileNav.classList.remove('open-nav');
    mobileNavOpen = false;
  }
  else {
    openMenu.classList.add('close-icon');
    mobileNav.classList.add('open-nav');
    mobileNavOpen = true;
  }
}
//Close the mobile nav if the window is resized 
window.addEventListener("resize", () => {
  if (mobileNavOpen) openMobileNav();
});

/** Animations
 *  
 *  Animates sections to slide in or fade in
 * 
 */
const slideInElements = document.getElementsByClassName('slide-in');
const fadeInElements = document.getElementsByClassName('fade-in');

// listen for scroll event and call animate function
// document.addEventListener('scroll', animate);

// animate();
// function animate() {

//   //For slide in animated elements
//   for (let i = 0; i < slideInElements.length; i++) {
//     let windowHeight = window.innerHeight;
//     let elementTop = slideInElements[i].getBoundingClientRect().top;
//     let elementVisible = 150;
    
//     if (elementTop < windowHeight - elementVisible) {
//       slideInElements[i].classList.add("slide-in-animate");
//     }
//   }
//   //For fade in animated elements
//   for (let i = 0; i < fadeInElements.length; i++) {
//     let windowHeight = window.innerHeight;
//     let elementTop = fadeInElements[i].getBoundingClientRect().top;
//     let elementVisible = 150;
    
//     if (elementTop < windowHeight - elementVisible) {
//       fadeInElements[i].classList.add("fade-in-animate");
//     }
//   }

// }



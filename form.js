//For header scroll animation
let lastScrollTop = 0;
// Get the header element
const header = document.querySelector("header");
const headerStyles = window.getComputedStyle(header);
// Add a scroll event listener to the window object
window.addEventListener("scroll", () => {
  const currentScrollTop = window.pageYOffset;
  if (currentScrollTop > lastScrollTop) {
    // User is scrolling down
    header.style.top = `-${headerStyles.getPropertyValue("height")}`; // Adjust the value based on the height of your header
  } else {
    // User is scrolling up
    header.style.top = "0";
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});

//For hamburger menu functions
const openMenu = document.getElementById("hamburgerMenu");
const mobileNav = document.getElementById("mobileNav");
const mobileNavStyles = window.getComputedStyle(mobileNav);
const mainContent = document.getElementById("gridder");
let mobileNavOpen = false;
mobileNav.style.top = `${headerStyles.getPropertyValue("height")}`;

openMenu.addEventListener("click", openMobileNav); 
function openMobileNav() {
  if (mobileNavOpen) {
    openMenu.classList.remove('close-icon');
    mobileNav.classList.remove('open-nav');
    mainContent.style.transform = `translateY(0)`;
    mobileNavOpen = false;
  }
  else {
    openMenu.classList.add('close-icon');
    mobileNav.classList.add('open-nav');
    mainContent.style.transform = `translateY(${mobileNavStyles.getPropertyValue("height")})`;
    mobileNavOpen = true;
  }
}

//Close the mobile nav if the window is resized
addEventListener("resize", (event) => {
  if (mobileNavOpen) openMobileNav();
});


// !-- HEADER SCROLL ANIMATION END --!


//for submission 
/*
const submission = document.getElementById("submitForum")

submission.addEventListener("click", function(){
  console.log("Hello World")
})
*/


function onSubmit(token) {
  document.getElementById("contactForum").submit();
}

// Initialize AOS
AOS.init({
 duration: 1200,  // AOS animation duration
 once: false,     // Animations trigger every time the element is in view
});

// Initialize Swiper
const swiper = new Swiper('.swiper', {
 direction: 'horizontal',
 loop: true,
 pagination: {
   el: '.swiper-pagination',
 },
 navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },
 on: {
   // Reinitialize AOS after each slide change
   slideChangeTransitionEnd: function () {
     AOS.refresh();  // Reapply AOS animations based on the current slide
   }
 }
});


// Initialize CountUp.js
// Function to animate numbers with fixed 3 seconds duration
function animateCount(element, end) {
 let current = 0;
 const duration = 2000; // 2 seconds
 const frameRate = 60; // 60 frames per second
 const totalFrames = Math.round((duration / 1000) * frameRate);
 const increment = end / totalFrames; // How much to increase per frame

 let frame = 0;
 const timer = setInterval(() => {
   frame++;
   current += increment;
   element.textContent = Math.round(current); // Display the current value rounded

   if (frame === totalFrames) {
     element.textContent = end; // Ensure it ends exactly on the end value
     clearInterval(timer);
   }
 }, 1000 / frameRate); // 1000ms / frame rate = time per frame
}

// Apply the animation to all elements with the 'count' class
document.addEventListener('DOMContentLoaded', () => {
 const countElements = document.querySelectorAll('.count');

 countElements.forEach((element) => {
   const endValue = parseInt(element.textContent, 10);  // End value from HTML
   animateCount(element, endValue);  // Animate from 0 to the end value
 });
});


// Variables
const bodyElement = document.querySelector('body');
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const navList = document.querySelector('.nav-list');

// Event Listener
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
});


// Hide overlay if clicked outside
window.addEventListener('click', function (e) {
  let clickedElement = e.target;
  
  if(clickedElement.matches('.is-open')) {
    bodyElement.classList.remove('is-open');
    showcase.classList.remove('is-open');
  }
});

navList.addEventListener('click', function(e) {
  let clickedElement = e.target;

  if(clickedElement.classList[0] === "nav-link") {
    bodyElement.classList.remove('is-open');
  }
});
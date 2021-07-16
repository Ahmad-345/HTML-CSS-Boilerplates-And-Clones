// Variables
const modal = document.querySelector('.modal');
const logInBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

// Event listeners
logInBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Functions
function openModal () {
  modal.style.display = 'block';
}

function closeModal () {
  modal.style.display = 'none';
}

function outsideClick (e) {
  if(e.target == modal) {
    closeModal();
  }
}
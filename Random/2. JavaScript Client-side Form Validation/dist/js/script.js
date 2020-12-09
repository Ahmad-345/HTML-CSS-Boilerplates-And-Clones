
// variables
const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});


// Functions
function checkInputs () {
  // get the values from the inputs
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if(userNameValue === '') {
    // show error
    // add error class
    setErrorFor(userName, 'User name cannot be blank');
  } else {
    // add success class
    setSuccessFor(userName);
  }

  if(emailValue === '') {
    setErrorFor(email, 'Please add email');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }

  if(passwordValue === '') {
    setErrorFor(password, 'Please add your password');
  } else {
    setSuccessFor(password);
  }

  if(password2Value === '') {
    setErrorFor(password2, 'Please add your password');
  } else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
  }
  else {
    setSuccessFor(password2);
  }
}

// When the user name is not valid
function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');

  // add error message inside small 
  small.innerText = message;

  // add error class
  formControl.className = 'form-control error';
}

// When the name is valid
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// validating email
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
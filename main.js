const button = document.querySelector('button');
const errorMessage = document.querySelector('.error');


button.addEventListener('click', validateEmail);

function validateEmail(e) {
  e.preventDefault();
  const email = document.querySelector('input');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    errorMessage.style.opacity = '1';
    email.style.background = 'url(images/icon-error.svg)';
    email.style.backgroundPosition = '70%';
    email.style.backgroundRepeat = 'no-repeat';
    email.style.border = '1px solid red';
  } else {
    errorMessage.style.opacity = '0';
    email.style.background = 'none';
    email.style.border = '1px solid rgb(206, 150, 150)';
  }
  // Reset email field
  email.value = '';
}
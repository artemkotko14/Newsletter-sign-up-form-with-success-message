const emailInput = document.querySelector(".form-control");
const signUpForm = document.querySelector('.signUpForm');
const successMessage = document.querySelector('.successMessage');
(() => {
  'use strict'

  const forms = document.querySelectorAll('.validated-form')

// Add event listener to the email input field to reset styles on valid input
  emailInput.addEventListener('input', () => {
    if (emailInput.checkValidity()) {
      emailInput.style.backgroundColor = "white"; // Reset background color
      emailInput.style.color = "black"; // Reset text color
    }
  });


  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        
        emailInput.style.backgroundColor = "pink";
        emailInput.style.color = "red";
        

      } else {
        // Show success message
        event.preventDefault()
        successMessage.style.display = 'block';
        signUpForm.style.display = 'none';
        const subscribedEmail = emailInput.value;
        document.getElementById('subscribedEmail').innerHTML = subscribedEmail;
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

function onButtonClick() {
  signUpForm.style.display = 'flex';
  successMessage.style.display = 'none';
  emailInput.value="";
 // Reset form validation state
  const forms = document.querySelectorAll('.validated-form');
  Array.from(forms).forEach(form => {
  form.classList.remove('was-validated'); // Remove the validation class
  emailInput.style.backgroundColor = "white";
  });
}

document.getElementById("dismissButton").addEventListener("click", onButtonClick);

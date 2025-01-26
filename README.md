# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./result.png)

### Links

- Solution URL: [Github](https://github.com/artemkotko14/Newsletter-sign-up-form-with-success-message)
- Live Site URL: [Webpage](https://artemkotko14.github.io/Newsletter-sign-up-form-with-success-message/)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- Mobile-first workflow
- [Bootstrap](https://getbootstrap.com/) - CSS Framework 
- Java Script


### What I learned

During this challenge I learned how to do form validation with Bootstrap:

```html
<form class="validated-form" id="validated-form" novalidate>
        <label class="form-check-label" for="email">Email address</label>
        <input class="form-control" type="email" id="email" name="email"  placeholder="email@company.com" required>
        <div class="invalid-feedback">
        Valid email required
      </div>
        <input class="subscribeButton" type="submit" value="Subscribe to monthly newsletter">
      </form>
```
```js
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
        successMessage.style.visibility = 'visible';
        signUpForm.style.display = 'none';
        const subscribedEmail = emailInput.value;
        document.getElementById('subscribedEmail').innerHTML = subscribedEmail;
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

```

### Continued development

In future projects I want to focus on practicing my javascript skills and implementing diferent libraries.


### Useful resources

- [ZZZ Code AI](https://zzzcode.ai/) - This site helped me with fixing some bugs in my code.
- [Bootstrap Form Validation](https://getbootstrap.com/docs/5.0/forms/validation/) - How to validate a form with Bootstrap.


## Author

- Github - [Artem Kotko](https://github.com/artemkotko14)
- Frontend Mentor - [@artemkotko14](https://www.frontendmentor.io/profile/artemkotko14)





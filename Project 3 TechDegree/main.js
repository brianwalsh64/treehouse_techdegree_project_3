// list of project variables
const otherJob = document.querySelector('#other-title'); //job role section
const title = document.querySelector('#title'); // job role section
const design = document.querySelector('#design'); // T-shirt section
const shirtColor = document.querySelectorAll('#color option'); // T-shirt section
const colorLabel = document.querySelector('label[for=color]'); // T-shirt section
const colorMenu = document.querySelector('#color'); // T-shirt section
const activities = document.querySelectorAll('input[type=checkbox]'); // activities section
const label = document.querySelectorAll('.activities label'); // activities section
const fieldsetRFA = document.getElementsByClassName('activities')[0]; // activities section
const p = document.createElement('p'); // activities section
let total = 0; // activities section
const payment = document.querySelector('#payment'); // payment section
const creditCard = document.querySelector('#credit-card'); // payment section
const paypal = document.querySelector('.paypal'); // payment section
const bitcoin = document.querySelector('.bitcoin'); // payment section
const button = document.querySelector('button'); // Validation section
const name = document.querySelector('#name'); // Validation section
const nameLabel = document.querySelector('label[for=name]');
const email = document.querySelector('#mail'); // Validation section
const emailLabel = document.querySelector('label[for=mail]'); // Validation section
const registerLabel = document.querySelector('.activities legend'); // Validation section
const ccNumber = document.querySelector('#cc-num'); // Validation section
const ccNumberLabel = document.querySelector('label[for=cc-num]'); // Validation section
const zipcode = document.querySelector('#zip'); // Validation section
const zipCodeLabel = document.querySelector('label[for=zip]'); // Validation section
const cvv = document.querySelector('#cvv'); // Validation section
const cvvLabel = document.querySelector('label[for=cvv]'); // Validation section
// end of project variables
/* A group of functions to help keep things DRY.
Also, makes the code easier to read and understand.*/
// when the email format is not correct a message is displayed on screen
function emailError() {
  event.preventDefault();
  emailLabel.innerHTML = "Please follow this format:  aaa@aaa.aaa";
  email.style.borderColor = 'red';
}
/* This validates the email on five aspects: 1) both (@ .) must be present.
2) @ must precede the dot. 3) @ cannot be the first character. 4) minimun of 
three characters after the @. 5) minimum of 3 characters after the dot. So the 
format at a minimum would look like this:  k@ppp.zzz  */
function emailValidation() {
  let  spaces = email.value.indexOf('@');
  let ends = email.value.indexOf('.');
  spaces += 4;
  ends += 3;
  if(email.value.includes('@') === false || email.value.includes('.') === false) {
    event.preventDefault();
    emailLabel.innerHTML = "Email must have both '@' and '.' characters";
    email.style.borderColor = 'red';
  } else if(email.value.indexOf('@') > email.value.indexOf('.')) {
      emailError();
  } else if( email.value.indexOf('@') === 0 ) {
      emailError();
  } else if(spaces > email.value.indexOf('.')) {
      emailError();
  } else if(email.value.charAt(ends) === '') {
      emailError();
  }
  else {
      emailLabel.innerHTML = "Email:";
      email.style.borderColor = '';
  }
}
// This validates the CVV number to be exactly 3 numbers only
function cvvValidation() {
  if(isNaN(cvv.value)){
    event.preventDefault();
    cvv.style.borderColor = 'red';
    cvvLabel.innerHTML = 'Please enter numbers only';
  } else if(cvv.value.length > 3 || cvv.value.length < 3) {
      event.preventDefault();
      cvv.style.borderColor = 'red';
      cvvLabel.innerHTML ='CVV must be 3 digits';
  } else {
      cvv.style.borderColor = '';
      cvvLabel.innerHTML = 'CVV:';
  }
}
// This validates the Zip Code number to be exactly 5 numbers only
function zipcodeValidation() {
  if(isNaN(zipcode.value)) {
    event.preventDefault();
    zipcode.style.borderColor = 'red';
    zipCodeLabel.innerHTML = 'Please enter numbers only';
  } else if(zipcode.value.length > 5 || zipcode.value.length < 5) {
      event.preventDefault();
      zipcode.style.borderColor = 'red';
      zipCodeLabel.innerHTML =' Zip code must be 5 digits';
  } else {
      zipcode.style.borderColor = '';
      zipCodeLabel.innerHTML = 'Zip code:';
  }
}
/* This validates the credit card number to be no less than 13 and 
no more than 16, numbers only */
function ccValidation() {
  if(ccNumber.value.length === 0) {
    event.preventDefault();
    ccNumber.style.borderColor = 'red';
    ccNumberLabel.innerHTML = 'Please enter a credit card number';
  } else if(isNaN(ccNumber.value)) {
      event.preventDefault();
      ccNumber.style.borderColor = 'red';
      ccNumberLabel.innerHTML = 'Please enter numbers only';
  } else if(ccNumber.value.length < 13) {
      event.preventDefault();
      ccNumber.style.borderColor = 'red';
      ccNumberLabel.innerHTML = 'Card number 13 digits minimum';
  } else if(ccNumber.value.length > 16) {
      event.preventDefault();
      ccNumber.style.borderColor = 'red';
      ccNumberLabel.innerHTML = 'Card number 16 digits maximum';
  } else {
      ccNumber.style.borderColor = '';
      ccNumberLabel.innerHTML = 'Card Number: ';
  }
}
// Sets the focus on the name text field
document.getElementById("name").focus();
// job role section
// creates a text field if the 'other' option is chosen
otherJob.style.display = 'none';
title.addEventListener('change', () => {
  if(title.value === 'other') {
 	  otherJob.style.display = '';
  } else {
 	    otherJob.style.display = 'none';
  }
}); // end of job role section
// T-shirt section
// hides the Color element until a design is chosen
// displays only the color for that design
// if no design, then 'Please select a T-shirt theme' is displayed
colorLabel.style.display = 'none';//hide the color label
colorMenu.style.display = 'none';//hide the color menu
design.addEventListener('change', () => {
  colorMenu.style.display = '';
  colorLabel.style.display = '';
	if(design.value === 'js puns') {
    colorMenu.value = '';// clears the input field
	  shirtColor[0].style.display = 'none';
    let j = 4;
    for(i = 1; i < 4 ; i += 1) {
      shirtColor[i].style.display = '';
      shirtColor[j].style.display = 'none'
      j += 1;
    }
	}
  else if(design.value === 'heart js') {
    colorMenu.value = '';// clears the input field
    shirtColor[0].style.display = 'none';
    let j = 1;
    for(i = 4; i < 7; i += 1) {
      shirtColor[i].style.display = '';
      shirtColor[j].style.display = 'none'
      j += 1;
    }
	}
  else {
    colorMenu.value = 'Please select a T-shirt theme';
    for(i = 1; i < 7; i += 1) {
      shirtColor[i].style.display = 'none';
    }
  }
}); // end of T-shirt section
/* register for activities section
This displays which events are checked or unchecked and grays out any 
events that may conflict with a chosen event. Also, provides a running
total of the cost to attend. */
fieldsetRFA.appendChild(p);
for(i = 0; i < activities.length; i += 1) {
  activities[i].addEventListener('change', (event) => {
    if(event.target.checked && event.target.name === 'js-frameworks') {
      activities[3].disabled = true;
      label[3].style.color = 'gray';
      total += 100;
    } else if (event.target.checked === false && event.target.name === 'js-frameworks') {
     	activities[3].disabled = false;
     	label[3].style.color = '';
     	total -= 100;
    } else if(event.target.checked && event.target.name === 'js-libs') {
        activities[4].disabled = true;
        label[4].style.color = 'gray';
        total += 100;
    } else if(event.target.checked === false && event.target.name === 'js-libs') {
        activities[4].disabled = false;
        label[4].style.color = '';
        total -= 100;
    } else if(event.target.checked && event.target.name === 'express') {
        activities[1].disabled = true;
        label[1].style.color = 'gray';
        total += 100;
    } else if(event.target.checked === false && event.target.name === 'express') {
        activities[1].disabled = false;
        label[1].style.color = '';
        total -= 100;
    } else if(event.target.checked && event.target.name === 'node') {
        activities[2].disabled = true;
        label[2].style.color = 'gray';
        total += 100;
    } else if(event.target.checked === false && event.target.name === 'node') {
     	  activities[2].disabled = false;
     	  label[2].style.color = '';
     	  total -= 100;
    } else if(event.target.checked && event.target.name === 'all') {
        total += 200;
    } else if(event.target.checked === false && event.target.name === 'all') {
        total -= 200;
    } else if(event.target.checked && event.target.name === 'npm') {
        total += 100;
    } else if(event.target.checked === false && event.target.name === 'npm') {
        total -= 100;
    } else if(event.target.checked && event.target.name === 'build-tools') {
        total += 100;
    } else if(event.target.checked === false && event.target.name === 'build-tools') {
        total -= 100;
    }
    p.innerHTML = "Total: $" + total;
  });
} // end of register for activities section
// payment section
/* Displays the credit card div by default, and hides the two other options.
When a selection is made only that option is displayed, and if no selection
is made then all payment options are hidden. */
bitcoin.style.display = 'none';
paypal.style.display = 'none';
payment.addEventListener('change', (event) => {
  if(payment.value === 'bitcoin') {
    bitcoin.style.display = '';
    creditCard.style.display = 'none';
    paypal.style.display = 'none';
  } else if(payment.value === 'paypal') {
      paypal.style.display = '';
      creditCard.style.display = 'none';
      bitcoin.style.display = 'none';
  } else if(payment.value === 'credit card') {
      creditCard.style.display = '';
      paypal.style.display = 'none';
      bitcoin.style.display = 'none';
  } else {
     bitcoin.style.display = 'none';
     paypal.style.display = 'none';
     creditCard.style.display = 'none';
  }
}); // end of payment section
//submit button validation section
/* This checks the validation for 'Name', 'Email', 'Activities', 'Credit Card',
'Zip Code', and 'CVV' when the register button is clicked.*/
button.addEventListener('click', (event) => {
  if(name.value === '' ) {
    event.preventDefault();
    name.style.borderColor = 'red';
    nameLabel.innerHTML ='Please provide a name';
  } else {
    name.style.borderColor = '';
    nameLabel.innerHTML = 'Name:';
  } 
  if(total === 0) {
    event.preventDefault();
    registerLabel.style.color = 'red';
    registerLabel.innerHTML = 'Register for Activities';
  } else {
    registerLabel.style.color = '';
    registerLabel.innerHTML = 'Register for Activities';
  }
  emailValidation();
  ccValidation();
  zipcodeValidation();
  cvvValidation();
}); // end of submit button validation
// real time validation
/* This checks the validation in real time of the 'Email', 'Credit Card',
'Zip Code', and 'CVV'. Also, will provide the user with specific error information */
email.addEventListener('input', () => {
  emailValidation();
});
ccNumber.addEventListener('input', () => {
  ccValidation();
});
zipcode.addEventListener('input', () => {
  zipcodeValidation();
});
cvv.addEventListener('input', () => {
  cvvValidation();
}); // end of real time validation


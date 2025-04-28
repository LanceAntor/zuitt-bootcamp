const txtFirstName = document.querySelector('#txt-first-name');
const txtLastName = document.querySelector('#txt-last-name');
const spanFullName = document.querySelector('#span-full-name');

txtFirstName.addEventListener('keyup', (event) => {
    spanFullName.innerHTML = txtFirstName.value;
});

txtLastName.addEventListener('keyup', (event) => {
    spanFullName.innerHTML = `${txtFirstName.value} ${txtLastName.value}`;
});


/*
1. Refactor the code further to mimic the sample out below.
2. Add input fields for Email and Mobile Number
3. Display a live preview of the email and mobile number (shows mobile number after validation)
4. Mobile number validation:
-The number must be exactly 11 digits long.
-The number must start with a "0".
-If the number is invalid, display a red message indicating "Invalid mobile number!".
5. Display an introduction message with the following format: "Hello, I am [First Name] [Last Name], you can contact me on this number [Mobile Number]."
-If any of the required fields are empty (First Name, Last Name, or Mobile Number), hide the introduction message.

*/
const txtFirstNameRefactor = document.querySelector('#txt-first-name-refactor');
const txtLastNameRefactor = document.querySelector('#txt-last-name-refactor');
const txtEmailRefactor = document.querySelector('#txt-email-refactor');
const txtNumberRefactor = document.querySelector('#txt-mobile-refactor'); 

const spanFullNameRefactor = document.querySelector('#span-full-name-refactor');
const spanEmailRefactor = document.querySelector('#span-email-refactor');
const spanNumberRefactor = document.querySelector('#span-mobile-refactor');
const displayIntro = document.querySelector('#span-details');

txtFirstNameRefactor.addEventListener('keyup', (event) => {
    spanFullNameRefactor.innerHTML = txtFirstNameRefactor.value;
});
txtLastNameRefactor.addEventListener('keyup', (event) => {
    spanFullNameRefactor.innerHTML = `${txtFirstNameRefactor.value} ${txtLastNameRefactor.value}`;
});
txtEmailRefactor.addEventListener('keyup', (event) => {
    spanEmailRefactor.innerHTML = txtEmailRefactor.value;
});
txtNumberRefactor.addEventListener('keyup', (event) => {
    const mobileNumber = txtNumberRefactor.value;
    if (mobileNumber.length === 11 && mobileNumber.startsWith('0')) {
        spanNumberRefactor.style.color = 'black';
        spanNumberRefactor.innerHTML = mobileNumber;
    } else {
        spanNumberRefactor.style.color = 'red';
        spanNumberRefactor.innerHTML = `Invalid mobile number!`;
    }
});

function updateIntroduction() {
    if (txtFirstNameRefactor.value && txtLastNameRefactor.value && txtNumberRefactor.value) {
        displayIntro.textContent = `Hello, I am ${txtFirstNameRefactor.value} ${txtLastNameRefactor.value}, you can contact me on this number ${txtNumberRefactor.value}.`;
    } else {
        displayIntro.textContent = '';
    }
}

txtFirstNameRefactor.addEventListener('keyup', updateIntroduction);
txtLastNameRefactor.addEventListener('keyup', updateIntroduction);
txtNumberRefactor.addEventListener('keyup', updateIntroduction);

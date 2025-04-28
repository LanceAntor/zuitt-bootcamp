console.log("Hello from discussion/index.js");

const txtFirstName = document.querySelector('#txt-first-name');
const txtLastName = document.querySelector('#txt-last-name');
const spanFullName = document.querySelector('#span-full-name');

// [SECTION] Event Listener
// Event is an action initiated bu the user upon interacting in the webpage.
// click, hover, page load, keypress
// events is a large part of creating interactivity in a webpage

// two arguments for addEventListener:
// 1. string identifying an event
// 2. function to be executed when the event occurs
txtFirstName.addEventListener('keyup', (event) => {
    spanFullName.innerHTML = txtFirstName.value;
});

// event
// contains information on the triggered event
txtFirstName.addEventListener('keyup', (event) => {
    // element where the event happened
    console.log(event.target);
    // gets the value of the input object
    console.log(event.target.value);
})


/*
    Mini Activity (10 mins)
    1. Create a text area where users can type a message.
    2. Display a character count below the text area.
    3. Disable typing beyond 100 characters.
    4. If the user reaches 100 characters, the counter turns red and displays:
    "Characters: 100 / 100 (Character limit reached!)"
    5. If the user stays within the limit, the counter remains normal.
    6. Take a screenshot of your browser and send it in the chat.
*/
const txtArea = document.querySelector('#text-input');
const spanCount = document.querySelector('#char-count');
const limit = 100;
const limitMessage = "Character limit reached!";

txtArea.addEventListener('input', (event) => {
    const charCount = txtArea.value.length;
    if (charCount > limit) {
        txtArea.value = txtArea.value.slice(0, limit);
    }
    const updatedCharCount = txtArea.value.length;
    spanCount.innerHTML = `Characters: ${updatedCharCount} / ${limit}`;
    if (updatedCharCount === limit) {
        spanCount.style.color = 'red';
        spanCount.innerHTML += ` (${limitMessage})`;
    } else {
        spanCount.style.color = 'black';
    }
});



/*
txtArea.addEventListener('keyup', (event) => {
    let textLength = txtArea.value.length;
    spanCount.textContent = `Characters: ${textLength} / ${limit}`;

    if(textLength > limit) {
        textInput.setAttribute('maxlength', limit);
        spanCount.textContent = `Characters: ${textLength} / ${limit} (Character limit reached!)`;
        spanCount.style.color = 'red';
    } else {
        textInput.removeAttribute('maxlength');
        spanCount.style.color = 'black';
    }
});
*/
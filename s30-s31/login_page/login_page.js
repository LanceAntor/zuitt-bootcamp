document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        if (!emailValue.includes('@')) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }

    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        if (passwordValue.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            passwordError.style.display = 'block';
            return false;
        } else {
            passwordError.style.display = 'none';
            return true;
        }
    }

    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const emailValid = validateEmail();
            const passwordValid = validatePassword();

            if (!emailValid || !passwordValid) {
                alert('Please fix the errors before submitting the form.');
                return;
            }

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            try {
                const response = await fetch('https://movieapp-api-lms1.onrender.com/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const result = await response.json();
                console.log("API Response:", result);

                if (response.ok && result.access && typeof result.access === 'string') {
                    alert('Login successful!');
                    window.location.href = '../movies_page/movies_page.html';  
                } else {
                    alert('Error: ' + (result.message || 'Invalid login credentials.'));
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while processing your request. Please try again later.');
            }
        });
    }
});

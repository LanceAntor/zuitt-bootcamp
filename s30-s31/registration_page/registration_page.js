document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';

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

    function validateConfirmPassword() {
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        if (confirmPasswordValue !== passwordValue) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            confirmPasswordError.style.display = 'block';
            return false;
        } else {
            confirmPasswordError.style.display = 'none';
            return true;
        }
    }

    document.getElementById('registration-form').addEventListener('submit', async function (e) {
        e.preventDefault();

        const emailValid = validateEmail();
        const passwordValid = validatePassword();
        const confirmPasswordValid = validateConfirmPassword();

        if (!emailValid || !passwordValid || !confirmPasswordValid) {
           
            return;
        }

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        try {
            const response = await fetch('https://movieapp-api-lms1.onrender.com/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();
            console.log("API Response:", result);

            if (result.message === "Registered Successfully") {
                alert('Registration successful!');
                document.getElementById('registration-form').reset();
                emailError.style.display = 'none';
                passwordError.style.display = 'none';
                confirmPasswordError.style.display = 'none';

                window.location.href = '../login_page/login_page.html'; 
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while processing your request. Please try again later.');
        }
    });
});

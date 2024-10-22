document.addEventListener('DOMContentLoaded', function() {
    var otpInputs = document.querySelectorAll('.otp-input');

    otpInputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            if (input.value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
    });
});

var generatebtn = document.querySelector(".btnOTP");

const showOTP = () => {
    var otpfield = document.querySelector(".input-otps");
    var lastverify = document.querySelector(".verify-button");
    lastverify.classList.add("visibleclass");
    otpfield.classList.add("visibleclass");
}

const verified = () => {
    var verifiedtick = document.querySelector(".verify");
    verifiedtick.classList.add("visibleclass");
}

var phoneInput = document.getElementById('PhoneNumber');
var phoneError = document.getElementById('phoneError');

phoneInput.addEventListener('input', function() {
    // Replace any non-numeric character except '+' at the beginning
    phoneInput.value = phoneInput.value.replace(/(?!^)[^\d]/g, '');
});

phoneInput.addEventListener('blur', function() {
    var phoneNumber = phoneInput.value;

    // Regular expression for phone number validation
    var phoneRegex = /^\+?[1-9]\d{1,14}$/;

    if (!phoneRegex.test(phoneNumber)) {
        phoneError.textContent = 'Invalid phone no. Please enter a valid no.';
    } else {
        phoneError.textContent = '';
    }
});

//  for icon removing while entering key
// function removename() {
//     var removename = document.getElementById("name-icon");
//     removename.style.visibility = "hidden";
// }

// function removeemail() {
//     var removeemail = document.getElementById("email-icon");
//     removeemail.style.visibility = "hidden";

// }
// function removephone() {
//     var removephone = document.getElementById("phone-icon");
//     removephone.style.visibility = "hidden";

// }
// function removenpass() {
//     var removepass = document.getElementById("pass-icon");
//     removepass.style.visibility = "hidden";

// }
// function removeconfirm() {
//     var removeconfirm = document.getElementById("confirm-icon");
//     removeconfirm.style.visibility = "hidden";

// }


document.querySelectorAll('input, select').forEach(function(input) {
    input.addEventListener('input', function() {
        validateInput({ target: input });
        if (input.value !== "") {
            input.closest('.input-container').classList.add('has-value');
        } else {
            input.closest('.input-container').classList.remove('has-value');
        }
    });
});

var inputs = document.querySelectorAll('input, select');


inputs.forEach(function(input) {
    input.addEventListener('input', validateInput);
});

function validateInput(event) {
    var input = event.target;
    var errorSpan = document.getElementById(input.id + "Error");
    var flagSpan = document.getElementById(input.id + "Flag");
    var isValid = true;

    switch (input.id) {
        case "name":
            if (input.value === "") {
                errorSpan.textContent = "Please enter your name";
                flagSpan.textContent = "";
                isValid = false;
            } else {
                errorSpan.textContent = "";
            
            }
            break;
        case "email":
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value)) {
                errorSpan.textContent = "Please enter a valid email address";
                flagSpan.textContent = "";
                isValid = false;
            } else {
                errorSpan.textContent = "";
                flagSpan.innerHTML = '<i class="fas fa-check-circle" style="color: green;"></i>';
            }
            break;
        case "phone":
            var phonePattern = /^\d{10}$/;
            if (!phonePattern.test(input.value)) {
                errorSpan.textContent = "Please enter a 10-digit phone number";
                flagSpan.textContent = "";
                isValid = false;
            } else {
                errorSpan.textContent = "";
                flagSpan.innerHTML = '<i class="fas fa-check-circle" style="color: green;"></i>';
            }
            break;
        case "branch":
            if (input.value === "engineering") {
                errorSpan.textContent = "Please select a branch";
                flagSpan.textContent = "";
                isValid = false;
            } else {
                errorSpan.textContent = "";
                flagSpan.innerHTML = '<i class="fas fa-check-circle" style="color: green;"></i>';
            }
            break;
        case "year":
            if (input.value === "year") {
                errorSpan.textContent = "Please select a year";
                flagSpan.textContent = "";
                isValid = false;
            } else {
                errorSpan.textContent = "";
                flagSpan.innerHTML = '<i class="fas fa-check-circle" style="color: green;"></i>';
            }
            break;
        case "password":
            var strengthMeter = document.getElementById("passwordStrengthText");
            var passwordStrength = calculatePasswordStrength(input.value);
            updatePasswordStrengthText(strengthMeter, passwordStrength);
            if (input.value.length < 8) {
                errorSpan.textContent = "Password must be 8 characters long";
                flagSpan.textContent = "";
                isValid = false;
            } else {
                var passwordPattern = /^(?=.[a-zA-Z])((?=.\d)|(?=.*\W)).{8,}$/;

                if (!passwordPattern.test(input.value)) {
                    errorSpan.textContent = "It must contain 1 letter & 1 number";
                    flagSpan.textContent = "";
                    isValid = false;
                } else {
                    errorSpan.textContent = "";
                    flagSpan.innerHTML = '<i class="fas fa-check-circle" style="color: green;"></i>';
                }
            }
            break;
        case "confirm_password":
            var passwordInput = document.getElementById("password");
            console.log("Password: ", passwordInput.value); 
            console.log("Confirm Password: ", input.value); 
            if (input.value !== passwordInput.value) {
                errorSpan.textContent = "Passwords do not match";
                isValid = false;
            } else {
                errorSpan.textContent = "";
                flagSpan.innerHTML = '<i class="fas fa-check-circle" style="color: green;"></i>';
            }
            break;
    }

    
    if (!isValid) {
        input.classList.add("input-error");
    } else {
        input.classList.remove("input-error");
    }
}





function calculatePasswordStrength(password) {
    var strength = 0;
    if (password.length >= 8) {
        strength++;
    }
    if (/[A-Z]/.test(password)) {
        strength++;
    }
    if (/[a-z]/.test(password)) {
        strength++;
    }
    if (/\d/.test(password)) {
        strength++;
    }
    if (/[@$!%*?&]/.test(password)) {
        strength++;
    }
    return strength;
}

function updatePasswordStrengthText(meter, strength) {
    var strengthText = "";
    switch (strength) {
        case 1:
            strengthText = "Very Weak";
            meter.style.color = "red";
            break;
        case 2:
            strengthText = "Weak";
            meter.style.color = "orange";
            break;
        case 3:
            strengthText = "Moderate";
            meter.style.color = "yellow";
            break;
        case 4:
            strengthText = "Strong";
            meter.style.color = "green";
            break;
        case 5:
            strengthText = "Very Strong";
            meter.style.color = "darkgreen";
            break;
        default:
            strengthText = "";
            break;
    }
    meter.textContent = strengthText;
}


function validateForm() {
    var isValid = true;

   
    inputs.forEach(function(input) {
        validateInput({ target: input });
        if (input.classList.contains("input-error")) {
            isValid = false;
        }
    });

   
    if (!isValid) {
        // alert("Please fill in the required fields correctly.");
        console.log("error");
        return false;
    }

    return true;
}


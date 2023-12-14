var firstName,lastName,arrows,paragraph,greeting;
function submitForm() {
    var form = document.getElementById("registrationForm");
    if (form.checkValidity()) {
        // Form is valid show confirmation message
        document.getElementById("confirmationMessage").style.display = "block";
        document.getElementById("errorMessage").style.display = "none";
        firstName = form.elements["firstName"].value;
        lastName = form.elements["lastName"].value;
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        setTimeout(function () {
            location.reload();
        }, 5000);
    } else {
        // Form is invalid show error message
        document.getElementById("confirmationMessage").style.display = "none";
        document.getElementById("errorMessage").style.display = "block";
    }
}

//function for expandble paragraphs
window.onload = function () {
    arrows = document.querySelectorAll('.arrow');

    arrows.forEach(function (arrow) {
        arrow.addEventListener('click', function () {
             paragraph = this.nextElementSibling;
            paragraph.classList.toggle('expanded');
        });
    });

    firstName = localStorage.getItem('firstName');
    lastName = localStorage.getItem('lastName');
    greeting = document.getElementById('greeting');
    greeting.textContent = 'Hello,';
    if (firstName && lastName) {
        greeting.textContent += ' ' + firstName + ' ' + lastName;
    } else {
        greeting.textContent += ' Guest';
    }
}
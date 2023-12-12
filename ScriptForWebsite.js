function submitForm() {
    var form = document.getElementById("registrationForm");
    if (form.checkValidity()) {
        // Form is valid, show confirmation message
        document.getElementById("confirmationMessage").style.display = "block";
        document.getElementById("errorMessage").style.display = "none";
        var firstName = form.elements["firstName"].value;
        var lastName = form.elements["lastName"].value;
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        location.reload();
    } else {
        // Form is invalid, show error message
        document.getElementById("confirmationMessage").style.display = "none";
        document.getElementById("errorMessage").style.display = "block";
    }
}

window.onload = function () {
    var arrows = document.querySelectorAll('.arrow');

    arrows.forEach(function (arrow) {
        arrow.addEventListener('click', function () {
            var paragraph = this.nextElementSibling;
            paragraph.classList.toggle('expanded');
        });
    });

    var firstName = localStorage.getItem('firstName');
    var lastName = localStorage.getItem('lastName');
    var greeting = document.getElementById('greeting');
    greeting.textContent = 'Hello,';
    if (firstName && lastName) {
        greeting.textContent += ' ' + firstName + ' ' + lastName;
    } else {
        greeting.textContent += ' Guest';
    }
}
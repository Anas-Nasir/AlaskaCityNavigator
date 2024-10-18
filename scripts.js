document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault(); 

        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var email1 = document.getElementById('email1').value;
        var email2 = document.getElementById('email2').value;

        if (firstName === "" || lastName === "") {
            alert("First Name and Last Name are required!");
            return;
        }

        if (email1 !== email2) {
            alert('Email addresses do not match!');
            return; 
        }

        alert('Form submitted successfully!');
    });
});

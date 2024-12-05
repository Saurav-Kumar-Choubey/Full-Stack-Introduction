document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formMessage = document.getElementById('formMessage');

    if(name && email && password) {
        formMessage.innerText = 'Form submitted successfully!';
        formMessage.classList.add('visible');
        setTimeout(() => formMessage.classList.remove('visible'), 3000);
        this.reset();
    } else {
        formMessage.innerText = 'Please fill out all fields.';
        formMessage.classList.add('visible');
        setTimeout(() => formMessage.classList.remove('visible'), 3000);
    }
});

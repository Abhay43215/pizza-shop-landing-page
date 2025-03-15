// Simple form validation (optional)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (name && email && message) {
        alert('Thank you for reaching out! We will get back to you soon.');
    } else {
        alert('Please fill in all fields.');
    }
});

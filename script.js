
ntactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    alert('Thank you for your message, ' + document.getElementById('name').value + '!');
    this.reset(); // Reset the form
});


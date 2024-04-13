function sendContact() {
    var name = document.getElementById("name").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var phoneNumberInt = parseInt(phoneNumber);
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var data = {
        "name": name,
        "phone": phoneNumberInt,
        "email": email,
        "message": message
    };

    fetch('http://localhost:8080/save/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Reset form fields
        document.getElementById("name").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        // Show thank you message on HTML for 1 minute
        var messageContainer = document.getElementById("messageContainer");
        messageContainer.textContent = "Thank you! Your contact information has been submitted. Reference number: " + data;
        messageContainer.style.display = "block"; // Display the message container

        setTimeout(function() {
            messageContainer.style.display = "none"; // Hide the message container after 1 minute
        }, 700); // Remove message after 0.5 minute (60000 milliseconds)

        // You can add any further actions here, like redirecting to another page
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors here, like showing an error message to the user
    });
}

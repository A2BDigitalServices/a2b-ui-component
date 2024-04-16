async function fetchUserRecords() {
    try {
        const response = await fetch('http://localhost:8080/records');
        const data = await response.json();

        const userContainer = document.getElementById('userContainer');

        data.data.users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');

            const id = document.createElement('p');
            id.innerText = `ID: ${user.Id}`;
            userDiv.appendChild(id);

            const firstName = document.createElement('p');
            firstName.innerText = `First Name: ${user.FirstName}`;
            userDiv.appendChild(firstName);

            const email = document.createElement('p');
            email.innerText = `Email: ${user.EmailAddress}`;
            userDiv.appendChild(email);

            const phone = document.createElement('p');
            phone.innerText = `Phone: ${user.Phone}`;
            userDiv.appendChild(phone);

            const status = document.createElement('p');
            status.innerText = `Status: ${user.status}`;
            userDiv.appendChild(status);

            userContainer.appendChild(userDiv);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchUserRecords();
async function fetchOpenApplicationsCount() {
    try {
        const response = await fetch('http://localhost:8080/openCount');
        const data = await response.json();

        // Update HTML element with the retrieved count
        document.getElementById('openCount').innerText = data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fetchInProgressApplicationsCount() {
    try {
        const response = await fetch('http://localhost:8080/inProgressCount');
        const data = await response.json();

        // Update HTML element with the retrieved count
        document.getElementById('inProgressCount').innerText = data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fetchClosedApplicationsCount() {
    try {
        const response = await fetch('http://localhost:8080/closedCount');
        const data = await response.json();

        // Update HTML element with the retrieved count
        document.getElementById('closedCount').innerText = data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fetchRejectedApplicationsCount() {
    try {
        const response = await fetch('http://localhost:8080/rejectedCount');
        const data = await response.json();

        // Update HTML element with the retrieved count
        document.getElementById('rejectedCount').innerText = data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the method when the page loads
fetchOpenApplicationsCount();
fetchInProgressApplicationsCount();
fetchClosedApplicationsCount()
fetchRejectedApplicationsCount()
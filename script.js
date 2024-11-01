const travelData = [
    { "name": "Sunny Beach", "category": "beach", "description": "Beautiful sandy beaches.", "imageUrl": "https://via.placeholder.com/200x150" },
    { "name": "Temple of Peace", "category": "temple", "description": "Historic temple with scenic views.", "imageUrl": "https://via.placeholder.com/200x150" },
    { "name": "Mountain Peaks", "category": "mountain", "description": "Amazing mountain views.", "imageUrl": "https://via.placeholder.com/200x150" },
    { "name": "Ocean Paradise", "category": "beach", "description": "Tropical paradise beach.", "imageUrl": "https://via.placeholder.com/200x150" },
    { "name": "Sacred Shrine", "category": "temple", "description": "Ancient shrine with cultural significance.", "imageUrl": "https://via.placeholder.com/200x150" }
];

function displayResults(results) {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = ""; // Clear previous results
    results.forEach(place => {
        const placeDiv = document.createElement("div");
        placeDiv.className = "result";
        placeDiv.innerHTML = `
            <img src="${place.imageUrl}" alt="${place.name}" style="width:100%;">
            <h3>${place.name}</h3>
            <p>${place.description}</p>
        `;
        resultContainer.appendChild(placeDiv);
    });
}

function search() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = travelData.filter(place => 
        place.category.toLowerCase().includes(input)
    );
    displayResults(results);
}

function clearResults() {
    document.getElementById("searchInput").value = "";
    document.getElementById("resultContainer").innerHTML = ""; // Clear displayed results
}

function displayTimeForLocation(timeZone) {
    const options = { timeZone: timeZone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const localTime = new Date().toLocaleTimeString('en-US', options);
    console.log("Current time:", localTime);
}

displayTimeForLocation('Asia/Kolkata'); // Example time zone

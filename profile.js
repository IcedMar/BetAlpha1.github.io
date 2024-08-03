document.addEventListener('DOMContentLoaded', function() {
    // Fetch user profile data
    fetchUserProfile();
    
    // Add event listener for profile form submission
    document.getElementById('edit-profile-form').addEventListener('submit', function(e) {
        e.preventDefault();
        updateProfile();
    });
});

function fetchUserProfile() {
    // Fetch user profile data from backend
    // Example:
    // fetch('/profile')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Populate profile view section with user data
    //         populateProfileView(data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching user profile:', error);
    //     });
    
    // For demonstration, populate with dummy data
    const dummyUserData = {
        username: 'JohnDoe',
        email: 'john@example.com',
        profilePicture: 'profile.jpg', // Path to profile picture
        balance: 100.00,
        bettingHistory: [
            { game: 'Game 1', result: 'Won', amount: 50 },
            { game: 'Game 2', result: 'Lost', amount: 30 },
            // More history...
        ]
    };
    populateProfileView(dummyUserData);
}

function populateProfileView(userData) {
    const profileViewSection = document.getElementById('profile-view');
    profileViewSection.innerHTML = `
        <h2>Profile Information</h2>
        <img src="${userData.profilePicture}" alt="Profile Picture" width="300" height="250">
        <p><strong>Username:</strong> ${userData.username}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Account Balance:</strong> $${userData.balance.toFixed(2)}</p>
        <h3>Betting History</h3>
        <ul>
            ${userData.bettingHistory.map(history => `
                <li>${history.game}: ${history.result} ($${history.amount})</li>
            `).join('')}
        </ul>
    `;
}

function toggleEditProfile(show) {
    document.getElementById('profile-edit').style.display = show ? 'block' : 'none';
    document.getElementById('edit-profile-button').style.display = show ? 'none' : 'block';
}

function updateProfile() {
    const formData = new FormData(document.getElementById('edit-profile-form'));
    
    // Convert form data to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });
    
    // Send updated profile data to backend for processing
    // Example:
    // fetch('/update-profile', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(jsonData)
    // })
    // .then(response => {
    //     if (response.ok) {
    //         // Profile updated successfully
    //         fetchUserProfile(); // Refresh profile view
    //         toggleEditProfile(false);
    //     } else {
    //         // Error handling
    //         alert('Failed to update profile. Please try again later.');
    //     }
    // })
    // .catch(error => {
    //     console.error('Error updating profile:', error);
    //     alert('An unexpected error occurred. Please try again later.');
    // });
    
    // For demonstration, log updated data to console
    console.log('Updated profile data:', jsonData);
    toggleEditProfile(false);
}


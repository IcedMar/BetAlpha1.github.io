document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display profile details (mock data for illustration)
    const profileData = {
        username: 'JohnDoe',
        balance: 150.00,
        profile_picture: 'path/to/profile_picture.jpg',
        service_access: 'Local',
        marketing: 'Monthly',
        betting_history: [
            { game: 'Game 1', result: 'Won' },
            { game: 'Game 2', result: 'Lost' }
        ],
        bettors_per_week: 45
    };
    //Get the button element using id
const button = document.getElementById('withdraw-button');
    //Add event listener to the button
    button.addEventListener('click', function() {
        window.open='withdrawal.html'
    });
    
    document.getElementById('username').innerText = profileData.username;
    document.getElementById('balance').innerText = profileData.balance.toFixed(2);
    document.querySelector('.profile-picture img').src = profileData.profile_picture;
    document.getElementById('service-access').innerText = profileData.service_access;
    document.getElementById('marketing').innerText = profileData.marketing;
    document.getElementById('bettors-per-week').innerText = profileData.bettors_per_week;

    const bettingHistoryList = document.getElementById('betting-history');
    profileData.betting_history.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.game}: ${item.result}`;
        bettingHistoryList.appendChild(listItem);
    });

    // Handle profile update modal
    const modal = document.getElementById('update-profile-modal');
    const updateButton = document.getElementById('update-profile-button');
    const closeButton = document.getElementById('close-modal-button');

    updateButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle profile update form submission
    document.getElementById('update-profile-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newProfilePicture = document.getElementById('new-profile-picture').value;
        const newServiceAccess = document.getElementById('new-service-access').value;
        const newMarketing = document.getElementById('new-marketing').value;

        // Update profile (mock data for illustration)
        profileData.username = newUsername;
        profileData.profile_picture = newProfilePicture;
        profileData.service_access = newServiceAccess;
        profileData.marketing = newMarketing;

        document.getElementById('username').innerText = profileData.username;
        document.querySelector('.profile-picture img').src = profileData.profile_picture;
        document.getElementById('service-access').innerText = profileData.service_access;
        document.getElementById('marketing').innerText = profileData.marketing;

        modal.style.display = 'none';
    });


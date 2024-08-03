document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display profile details (mock data for illustration)
    const profileData = {
        username: '#name',
        balance: 150.00,
        profile_picture: 'path/to/profile_picture.jpg',
        transaction_history: [
            { type: 'Deposit', amount: 100, date: '2024-06-10' },
            { type: 'Withdraw', amount: 50, date: '2024-06-11' }
        ],
        betting_history: [
            { game: 'Game 1', bet: 'Team A', result: 'Won', amount: 10 },
            { game: 'Game 2', bet: 'Team B', result: 'Lost', amount: 15 }
        ]
    };

    document.getElementById('username').innerText = profileData.username;
    document.getElementById('balance').innerText = profileData.balance.toFixed(2);
    document.querySelector('.profile-picture img').src = profileData.profile_picture;

    const transactionHistoryList = document.getElementById('transaction-history');
    profileData.transaction_history.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.type}: $${item.amount} on ${item.date}`;
        transactionHistoryList.appendChild(listItem);
    });

    const bettingHistoryList = document.getElementById('betting-history');
    profileData.betting_history.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.game} - Bet: ${item.bet}, Result: ${item.result}, Amount: $${item.amount}`;
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

        // Update profile (mock data for illustration)
        profileData.username = newUsername;
        profileData.profile_picture = newProfilePicture;

        document.getElementById('username').innerText = profileData.username;
        document.querySelector('.profile-picture img').src = profileData.profile_picture;

        modal.style.display = 'none';
    });
});


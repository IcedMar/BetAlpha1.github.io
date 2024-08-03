document.getElementById('show-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('ok-button').addEventListener('click', function open_page() {
    window.open("Home.html")
    document.getElementById('popup').style.display = 'none';
    // Add any additional functionality for OK button here
});

document.getElementById('cancel-button').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
    // Add any additional functionality for Cancel button here
});


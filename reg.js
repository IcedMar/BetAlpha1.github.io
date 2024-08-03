// Get the input element for date of birth
const dobInput = document.getElementById('dob');

// Calculate the minimum date allowed (16 years ago from now)
const minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 16);

// Format the minimum date as YYYY-MM-DD
const minDateString = minDate.toISOString().split('T')[0];

// Set the min attribute of the date input
dobInput.setAttribute('max', minDateString);

// Add event listener to form submit
document.getElementById('dob-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const dob = new Date(dobInput.value);
    const age = calculateAge(dob);
    if (age >= 16) {
        alert('Date of Birth is valid. Age: ' + age);
    } else {
        alert('You must be at least 16 years old.');
    }
});

// Function to calculate age
function calculateAge(birthday) { 
    const ageDiffMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDiffMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
function open_page(){
 window.open ("proceed.html")   
}


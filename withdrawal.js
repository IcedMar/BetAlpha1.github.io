document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('withdraw-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const amount = document.getElementById('withdraw-amount').value;
        const paymentMethod = document.getElementById('payment-method').value;

        console.log(`Withdrawal requested: $${amount} via ${paymentMethod}`);
        
        // Simulate withdrawal request submission
        // Here you would call your backend API to process the withdrawal
        // For demonstration, we'll just show an alert
        alert(`Withdrawal of $${amount} requested via ${paymentMethod}`);
    });
});


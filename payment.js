document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('payment-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
        proceedToPayment(selectedPaymentMethod);
    });
});

function proceedToPayment(method) {
    switch(method) {
        case 'paypal':
            // Integrate PayPal payment flow
            alert('Proceeding to PayPal payment...');
            break;
        case 'stripe':
            // Integrate Stripe payment flow
            alert('Proceeding to Stripe payment...');
            break;
        case 'credit-card':
            // Integrate Credit Card payment flow
            alert('Proceeding to Credit Card payment...');
            break;
        default:
            alert('Please select a payment method.');
    }
}


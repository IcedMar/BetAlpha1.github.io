document.addEventListener('DOMContentLoaded', () => {
    // Mock data for odds sellers
    const oddsSellers = [
        { id: 1, name: 'Seller 1', odds: '2.0' },
        { id: 2, name: 'Seller 2', odds: '3.5' }
    ];

    const oddsSellerList = document.getElementById('odds-seller-list');
    oddsSellers.forEach(seller => {
        const listItem = document.createElement('li');
        listItem.innerText = `${seller.name} - Odds: ${seller.odds}`;
        oddsSellerList.appendChild(listItem);
    });

    document.getElementById('betting-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const betAmount = document.getElementById('bet-amount').value;
        const eventSelected = document.getElementById('event').value;
        
        console.log(`Bet placed: $${betAmount} on ${eventSelected}`);
        
        // Simulate placing bet and updating the pool
        // Here you would call your backend API to process the bet
    });
});


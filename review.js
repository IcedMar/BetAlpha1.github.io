function displayOddsSellers(oddsSellers) {
    const oddsSellersContainer = document.getElementById('odds-sellers-container');

    oddsSellers.forEach(seller => {
        const sellerElement = document.createElement('div');
        sellerElement.classList.add('seller');

        // Create a link to the seller's page
        const sellerLink = document.createElement('a');
        sellerLink.href = `/seller/${seller.id}`; // Replace 'id' with the actual identifier for the seller
        sellerLink.textContent = seller.username;

        const usernameElement = document.createElement('h3');
        usernameElement.appendChild(sellerLink);

        const oddsCountElement = document.createElement('p');
        oddsCountElement.textContent = `Number of odds: ${seller.oddsCount}`;

        sellerElement.appendChild(usernameElement);
        sellerElement.appendChild(oddsCountElement);

        oddsSellersContainer.appendChild(sellerElement);
    });
}


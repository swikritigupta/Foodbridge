function handleClaim(id) {
  const listings = getListings();
  const listing = listings.find(l => l.id === id);
  if (!listing) return;

  if (getUrgencyState(listing.expiresAt).diffMin <= 0) {
    alert("This food has expired and can no longer be claimed.");
    return;
  }

  const input = prompt(`How many kg of "${listing.title}" do you want to claim? (max ${listing.qty})`);
  const amount = Number(input);

  if (!input || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid quantity.");
    return;
  }
  if (amount > listing.qty) {
    alert(`Only ${listing.qty} kg available.`);
    return;
  }

  listing.qty -= amount;
  listing.status = listing.qty === 0 ? "matched" : "matching";
  saveListings(listings);
  renderListings();
}

document.addEventListener("click", e => {
  if (e.target.classList.contains("claim-btn")) {
    handleClaim(Number(e.target.dataset.id));
  }
});
function handleClaim(id) {
  const listings = getListings();
  const listing = listings.find(l => l.id === id);
  if (!listing) return;

  if (getUrgencyState(listing.expiresAt).diffMin <= 0) {
    alert("This food has expired and can no longer be claimed.");
    return;
  }

  const confirmClaim = confirm(`Claim all ${listing.qty} kg of "${listing.title}" from ${listing.donor}?`);
  if (!confirmClaim) return;

  const updatedListings = listings.filter(l => l.id !== id);
  saveListings(updatedListings);
  renderListings();

  alert(`Claimed! "${listing.title}" has been removed from available inventory.`);
}

document.addEventListener("click", e => {
  if (e.target.classList.contains("claim-btn")) {
    handleClaim(Number(e.target.dataset.id));
  }
});
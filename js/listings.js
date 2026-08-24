function renderListings(filterCategory = "all") {
  const grid = document.getElementById("cardGrid");
  if (!grid) return;

  let listings = getListings();
  if (filterCategory !== "all") {
    listings = listings.filter(l => l.category === filterCategory);
  }

  grid.innerHTML = listings.map(l => {
    const state = getUrgencyState(l.expiresAt);
    const badgeClass =
      l.status === "matched" ? "badge-matched" :
      l.status === "matching" ? "badge-matching" : "badge-available";
    const badgeLabel = l.status.charAt(0).toUpperCase() + l.status.slice(1);

    return `
      <article class="food-card" data-id="${l.id}">
        <div class="food-card-top">
          <div>
            <div class="food-card-title">${l.title}</div>
            <div class="food-card-donor">${l.donor}</div>
          </div>
          <span class="badge ${badgeClass}">${badgeLabel}</span>
        </div>
        <div class="fresh-row">
          <div class="fresh-ring">
            <svg width="38" height="38" viewBox="0 0 38 38">
              <circle class="track" cx="19" cy="19" r="16"/>
              <circle class="progress" cx="19" cy="19" r="16" stroke-dasharray="100.5" stroke-dashoffset="20"/>
            </svg>
          </div>
          <div class="fresh-text">
            <span class="qty">${l.qty} kg</span>
            <span class="expiry">${state.label}</span>
          </div>
        </div>
        <div class="food-card-foot">
          <span class="loc">${l.location}</span>
          <span>${l.distance}</span>
        </div>
        <button class="btn btn-outline btn-sm claim-btn" data-id="${l.id}">Claim</button>
      </article>`;
  }).join("");

  refreshUrgency();
}

document.getElementById("listingTabs").addEventListener("click", e => {
  if (!e.target.classList.contains("listing-tab")) return;
  document.querySelectorAll(".listing-tab").forEach(t => t.classList.remove("active"));
  e.target.classList.add("active");
  renderListings(e.target.dataset.category);
});

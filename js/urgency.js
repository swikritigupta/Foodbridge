function getUrgencyState(expiresAt) {
  const diffMin = Math.round((expiresAt - Date.now()) / 60000);

  if (diffMin <= 0) {
    return { label: "Expired", cls: "expired", warn: true, diffMin: 0 };
  }
  if (diffMin < 30) {
    return { label: `Urgent — ${diffMin} min left`, cls: "urgent", warn: true, diffMin };
  }
  if (diffMin < 60) {
    return { label: `${diffMin} min left`, cls: "attention", warn: true, diffMin };
  }
  return { label: `${Math.round(diffMin / 60)} hr left`, cls: "available", warn: false, diffMin };
}

function refreshUrgency() {
  document.querySelectorAll(".food-card").forEach(card => {
    const id = Number(card.dataset.id);
    const listing = getListings().find(l => l.id === id);
    if (!listing) return;

    const state = getUrgencyState(listing.expiresAt);

    const expiryEl = card.querySelector(".expiry");
    if (expiryEl) expiryEl.textContent = state.label;

    const ring = card.querySelector(".progress");
    if (ring) {
      ring.classList.toggle("warn", state.warn);
      const pct = Math.max(0, Math.min(1, state.diffMin / 180));
      ring.setAttribute("stroke-dashoffset", String(100.5 * (1 - pct)));
    }
  });
}

setInterval(refreshUrgency, 30000);
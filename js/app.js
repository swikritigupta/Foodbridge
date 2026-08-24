document.addEventListener("DOMContentLoaded", () => {
  initStorage();
  renderListings();
});

function openModal(html) {
  document.getElementById("modalBox").innerHTML = html;
  document.getElementById("modalOverlay").classList.add("open");
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
}

document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target.id === "modalOverlay") closeModal();
});
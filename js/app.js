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

document.getElementById("addDonationBtn").addEventListener("click", () => {
  openModal(`
    <h3>Donate Food</h3>
    <label>Food title</label>
    <input id="donTitle" placeholder="e.g. Fresh Sandwiches">

    <label>Donor / business name</label>
    <input id="donDonor" placeholder="e.g. Green Leaf Restaurant">

    <label>Category</label>
    <select id="donCategory">
      <option>Bakery</option>
      <option>Prepared Meals</option>
      <option>Produce</option>
    </select>

    <label>Quantity (kg)</label>
    <input id="donQty" type="number" min="1" placeholder="e.g. 20">

    <label>Location</label>
    <input id="donLocation" placeholder="e.g. Thamel, Kathmandu">

    <label>Expires in (minutes)</label>
    <input id="donExpiry" type="number" min="1" placeholder="e.g. 90">

    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="submitDonation()">Publish</button>
    </div>
  `);
});

function submitDonation() {
  const title = document.getElementById("donTitle").value.trim();
  const donor = document.getElementById("donDonor").value.trim();
  const category = document.getElementById("donCategory").value;
  const qty = Number(document.getElementById("donQty").value);
  const location = document.getElementById("donLocation").value.trim() || "Kathmandu";
  const minutes = Number(document.getElementById("donExpiry").value);

  if (!title || !donor || !qty || qty <= 0 || !minutes || minutes <= 0) {
    alert("Please fill in all fields with valid values.");
    return;
  }

  const listings = getListings();
  listings.unshift({
    id: Date.now(),
    title,
    donor,
    category,
    qty,
    location,
    distance: "—",
    expiresAt: Date.now() + minutes * 60000,
    status: "available"
  });

  saveListings(listings);
  renderListings();
  closeModal();
}

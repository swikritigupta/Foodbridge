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

document.getElementById("donateBtn").addEventListener("click", () => {
  document.getElementById("addDonationBtn").click();
});

document.getElementById("requestBtn").addEventListener("click", () => {
  openModal(`
    <h3>Request Food</h3>
    <label>Organization name</label>
    <input id="reqOrg" placeholder="e.g. Kathmandu Community Kitchen">
    <label>What do you need?</label>
    <input id="reqNeed" placeholder="e.g. Rice, vegetables">
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="submitRequest()">Submit Request</button>
    </div>
  `);
});

function submitRequest() {
  const org = document.getElementById("reqOrg").value.trim();
  const need = document.getElementById("reqNeed").value.trim();
  if (!org || !need) { alert("Please fill in both fields."); return; }
  alert(`Request submitted for "${need}" from ${org}. We'll match you with a donor.`);
  closeModal();
}

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
  const minutes = Number(document.getElementById("donExpiry").value);

  if (!title || !donor || !qty || qty <= 0 || !minutes || minutes <= 0) {
    alert("Please fill in all fields with valid values.");
    return;
  }

  const listings = getListings();
  const newListing = {
    id: Date.now(),
    title, donor, category, qty,
    location: "Kathmandu",
    distance: "—",
    expiresAt: Date.now() + minutes * 60000,
    status: "available"
  };
  listings.unshift(newListing);
  saveListings(listings);
  renderListings();
  closeModal();
}

document.getElementById("listingTabs").addEventListener("click", e => {
  if (!e.target.classList.contains("listing-tab")) return;
  document.querySelectorAll(".listing-tab").forEach(t => t.classList.remove("active"));
  e.target.classList.add("active");
  renderListings(e.target.dataset.category);
});
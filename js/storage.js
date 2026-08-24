const STORAGE_KEY = "foodbridge_listings";

function initStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedListings));
  }
}

function getListings() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveListings(listings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(listings));
}
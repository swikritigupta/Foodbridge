const seedListings = [
  {
    id: 1,
    title: "Bakery Items",
    donor: "Himalayan Bakery",
    category: "Bakery",
    qty: 45,
    location: "Thamel, Kathmandu",
    distance: "3.2 km",
    expiresAt: Date.now() + 12 * 60000,
    status: "matched"
  },
  {
    id: 2,
    title: "Prepared Meals",
    donor: "Green Leaf Restaurant",
    category: "Prepared Meals",
    qty: 30,
    location: "Lazimpat, Kathmandu",
    distance: "5.6 km",
    expiresAt: Date.now() + 90 * 60000,
    status: "available"
  },
  {
    id: 3,
    title: "Vegetables",
    donor: "City Hotel",
    category: "Produce",
    qty: 75,
    location: "Durbar Marg, Kathmandu",
    distance: "4.1 km",
    expiresAt: Date.now() + 40 * 60000,
    status: "available"
  }
];
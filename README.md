# FoodBridge

FoodBridge is a web platform that connects businesses with surplus food to community organizations that need it. Donors list available food with quantity and expiry details, organizations can request food, and an urgency system highlights what needs to be picked up soonest — helping reduce food waste and support communities in Kathmandu.

## Features

- **Live food listings** — donations are rendered dynamically from stored data, not hardcoded HTML.
- **Urgency engine** — each listing shows a live countdown (e.g. "Urgent — 12 min left") based on its expiry time, recalculated automatically at intervals.
- **Add Donation** — a modal form lets a donor publish a new listing (title, donor name, category, quantity, location, expiry) which appears immediately at the top of the listings grid.
- **Request Food** — a modal form lets an organization submit what it needs.
- **Claim system** — clicking "Claim" on a listing confirms the action and removes that food item from available inventory.
- **Category filtering** — tabs (All / Bakery / Prepared Meals / Produce) filter the visible listings by category.
- **Persistence** — all listings are saved to the browser's `localStorage`, so data survives page refreshes.
- **Responsive design** — layout adapts across desktop, tablet, and mobile.

## Tech Stack

- HTML5
- CSS3 (custom properties, CSS Grid, Flexbox)
- Vanilla JavaScript (no frameworks)
- Browser `localStorage` for data persistence
- Git / GitHub for version control

## Project Structure

```
foodbridge/
├── index.html            # Main page markup
├── css/
│   └── style.css         # All styling, including modal and responsive rules
├── data/
│   └── listings.js        # Seed/demo listing data
├── js/
│   ├── storage.js         # localStorage read/write helpers
│   ├── urgency.js         # Expiry countdown and urgency-state logic
│   ├── listings.js        # Renders listing cards, handles category filtering
│   ├── claims.js          # Claim button logic and validation
│   └── app.js             # App entry point; donation/request modal logic
├── scripts/
│   └── setup.sh           # Bash script that checks the project is set up correctly
└── README.md
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/swikritigupta/Foodbridge.git
   cd Foodbridge
   ```
2. Open `index.html` directly in a browser, or use a tool like VS Code's Live Server extension for auto-reload during development.

No build step, package installation, or server is required — this is a static front-end project.

### Optional: run the setup check script

```bash
bash scripts/setup.sh
```

This confirms Git is installed and that the core project files are present.

## How It Works

1. **Donor lists surplus** — a business records available food, quantity, and expiry window via the "Add Donation" form.
2. **Organization requests** — a community organization submits what it needs via the "Request Food" form.
3. **Urgency is tracked** — each listing's countdown updates automatically so the most time-sensitive food is easy to spot.
4. **Food is claimed** — an organization claims a listing, which is then removed from the available inventory.

## Data Persistence

All listings are stored in the browser's `localStorage` under the key `foodbridge_listings`. To reset the demo data back to the original seed listings, open the browser console and run:

```js
localStorage.removeItem("foodbridge_listings");
location.reload();
```

## Git Workflow

This project was built using a feature-branch workflow:

```
main
 └── develop
      ├── feature/base-ui
      ├── feature/storage
      ├── feature/urgency
      ├── feature/listing-system
      ├── feature/claims
      ├── feature/app
      └── feature/bash-automation
```

Each feature was developed in isolation on its own branch, committed with atomic, descriptive commit messages, pushed to GitHub, and merged into `develop` via pull request before final integration into `main`.

| Branch | Responsibility |
|---|---|
| `feature/base-ui` | Homepage layout, nav, hero, impact strip, footer |
| `feature/storage` | `localStorage` read/write helpers for listing data |
| `feature/urgency` | Expiry countdown and urgency-state calculation |
| `feature/listing-system` | Rendering listing cards and category filtering |
| `feature/claims` | Claim button logic, confirmation, and removal from inventory |
| `feature/app` | App entry point, donation/request modal logic |
| `feature/bash-automation` | Bash setup/check script |

## Author

Swikriti Gupta
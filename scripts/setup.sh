#!/bin/bash
echo "Checking FoodBridge project setup..."

command -v git >/dev/null 2>&1 || { echo "Git is not installed."; exit 1; }
echo "Git installed: $(git --version)"

for f in index.html css/style.css js/app.js data/listings.js; do
  if [ -f "$f" ]; then
    echo "OK: $f found"
  else
    echo "MISSING: $f"
  fi
done

echo "Setup check complete."
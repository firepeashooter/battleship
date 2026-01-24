#!/usr/bin/env bash


#!/usr/bin/env bash
set -e  # stop immediately if any command fails

# Check for uncommitted changes
if [[ -n $(git status --porcelain) ]]; then
  echo "Your working tree is dirty. Commit your changes before deploying."
  exit 1
fi

echo "Switching to gh-pages branch..."
git checkout gh-pages

echo "Merging latest changes from main..."
git merge main --allow-unrelated-histories --no-edit

echo "Building project..."
npm run build

echo "Adding dist folder..."
git add dist -f

echo "Committing dist..."
git commit -m "Deployment commit" || echo "ℹ️ Nothing to commit (dist unchanged)"

echo "Pushing to GitHub Pages..."
git subtree push --prefix dist origin gh-pages

echo "Switching back to main branch..."
git checkout main

echo "Deployment complete!"

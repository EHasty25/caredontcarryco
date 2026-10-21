# Care Don't Carry Co. — site recovery

This folder is the complete corrected static site. Netlify should publish the repository root (`.`) with no build command.

## What this repairs

- Restores the coastal homepage instead of loading the manifesto at `/`
- Gives `/shop/` a clean four-product collection with working images
- Uses the same polished product-image treatment across all four caps
- Keeps `Care. Don't Carry.` as the flagship
- Keeps the original, untouched evening photo on the manifesto page
- Sends `Our Places` to a real placeholder page at `/our-places/`
- Removes the old Newport/Wedge copy and the broken image references
- Keeps contact, shipping/returns, privacy, and Printify links intact

## Safest GitHub workflow

1. In GitHub, open the `EHasty25/caredontcarryco` repository.
2. Use the branch menu near the upper left and create a new branch named `site-recovery` from `main`.
3. Stay on `site-recovery`.
4. Click **Add file → Upload files**.
5. On your computer, open this `FINAL-SITE` folder.
6. Select everything *inside* `FINAL-SITE` and drag those items into GitHub. Do not upload the `FINAL-SITE` folder itself.
7. Confirm the upload list includes `index.html`, `shop/index.html`, `manifesto/index.html`, `our-places/index.html`, the three `*-studio.png` files, and `manifesto-ordinary-evening.jpg`.
8. Commit the upload to the `site-recovery` branch.
9. Open a pull request from `site-recovery` into `main`.
10. Open the Netlify Deploy Preview and verify `/`, `/shop/`, `/manifesto/`, and `/our-places/` before merging.

Do not merge until those four routes are correct in the Deploy Preview.

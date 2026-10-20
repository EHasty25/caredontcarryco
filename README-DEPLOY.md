# Care Don't Carry Co. website rebuild

This folder is a complete static website for `caredontcarryco.com`. It is ready for GitHub and Netlify and does not require a build command.

## What changed

- The flagship leads, with the three supporting hat designs presented as one coherent collection.
- Big Bear and the Wedge anchor the campaign story.
- The established DM Sans / Libre Baskerville brand system and approved color palette are used throughout.
- The manifesto is preserved word-for-word.
- Every purchase button links to the correct live Printify product.
- Existing Netlify email and contact forms remain in place.
- Mobile navigation, SEO metadata, accessibility basics, redirects, a sitemap, and security headers are included.

## Deploy through GitHub

1. Unzip this package on your computer.
2. Open the `EHasty25/caredontcarryco` repository on GitHub.
3. Choose **Add file → Upload files**.
4. Drag the **contents** of this folder into the upload area. Upload `index.html`, the folders, and the other root files—not the enclosing `care-dont-carry-rebuild` folder.
5. Let GitHub replace files with matching names, then commit directly to `main` with a message such as `Launch Big Bear and Wedge flagship site`.
6. Netlify should deploy the commit automatically. In Netlify, confirm that the production publish directory is the repository root (`.`).
7. Open `https://caredontcarryco.com` in a private browser window and test the home page, shop page, all four product buttons, email form, contact form, and mobile menu.

## Add social accounts

Open `assets/site-config.js` and paste the full Instagram, Facebook, and TikTok profile URLs between the quotation marks. Until a URL is added, that social link stays hidden rather than sending visitors to a dead page.

Add the same profile URLs inside the social/profile settings for the Printify Pop-Up Store so both sites point to the same accounts.

## If the Printify product URL changes

Change `productUrl` once in `assets/site-config.js`. The buttons throughout the site will update automatically. Also update the URL in the Product structured data inside the root `index.html` for search engines.

## Before announcing the launch

- Confirm the product page still shows the correct final punctuation: `CARE.` / `DON'T CARRY.`
- Confirm the intended colorways are selectable and in stock on Printify.
- Confirm the public price is still $35.
- Submit one test email signup and one test contact message in Netlify.
- Place one end-to-end test order or at minimum complete the checkout flow up to payment.

Campaign images are editorial images created from the real cap and corrected embroidery artwork. The shop page explicitly directs buyers to use the live Printify listing to confirm exact color, placement, and availability before checkout.

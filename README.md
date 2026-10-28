# InteriorDecorate — Premium Interior Design Website

A responsive React + Vite landing page for InteriorDecorate, focused on interior design enquiries in Mumbai and Navi Mumbai.

## Run locally

1. Install Node.js (LTS) from https://nodejs.org/
2. Open this folder in VS Code.
3. Open Terminal and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL shown in the terminal.
5. Before publishing, run `npm run build` to test the production build.

## Deploy to GitHub + Vercel

1. Create a GitHub repository named `interiordecorate`.
2. Upload all files and folders in this project (not the ZIP file itself).
3. In Vercel, choose **Add New → Project**, import the repository, and deploy.
4. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
5. Add your domain in Vercel **Settings → Domains**, then follow the DNS records Vercel provides at your domain registrar.

## Before launch

- Replace the placeholder Unsplash image URLs with your own licensed project photography for a more authentic brand.
- In `index.html`, replace the canonical URL when you have your final domain. Add a canonical tag like `<link rel="canonical" href="https://YOUR-DOMAIN/" />`.
- The enquiry form opens WhatsApp with the form details pre-filled. The visitor must press **Send** in WhatsApp to deliver the enquiry. This starter does not save enquiries to a database or send them automatically.
- Confirm the business phone numbers, address, service area, and any claims before publishing.
- For ongoing SEO, create individual pages for each service and location, add Google Search Console, Google Business Profile, analytics, and submit your sitemap after the domain is connected.

## Included

- Responsive premium landing page
- First-visit enquiry popup with cancel/close option
- Project and service sections
- Click-to-call and WhatsApp actions
- Basic SEO metadata and LocalBusiness structured data

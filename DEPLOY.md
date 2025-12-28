# How to Deploy Alba Banquet Hall Website

This guide will help you deploy your website to Vercel and connect your custom domain (`albacatering.com`).

## 1. Push Code to GitHub

First, ensure your code is safe on GitHub.
1.  Go to [GitHub.com](https://github.com) and create a **New Repository** (name it `alba-banquet` or similar).
2.  Run these commands in your terminal (stopping the server first with `Ctrl+C`):

```bash
git add .
git commit -m "Ready for deployment"
# Replace URL with your new repository URL
git remote add origin https://github.com/YOUR_USERNAME/alba-banquet.git
git branch -M main
git push -u origin main
```

## 2. Deploy to Vercel

1.  Go to [Vercel.com](https://vercel.com) and Sign Up/Login (continue with GitHub is easiest).
2.  Click **"Add New..."** -> **"Project"**.
3.  You should see your `alba-banquet` repository. Click **"Import"**.
4.  In the configuration screen:
    *   **Project Name**: Leave as is or change.
    *   **Framework Preset**: It should auto-detect "Next.js".
    *   **Environment Variables**: You can add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` with your key if you want to keep it secure, otherwise the code has a fallback.
5.  Click **"Deploy"**.
6.  Wait for the confetti! Your site is live on a `.vercel.app` subdomain.

## 3. Connect Your Domain (albacatering.com)

Now, let's make it load on `albacatering.com`.

1.  In your Vercel Project Dashboard, click **"Settings"** (top right tab).
2.  Click **"Domains"** on the left menu.
3.  In the input box, type `albacatering.com` and click **"Add"**.
4.  Vercel will ask how you want to redirect `www`. Recommended: Redirect `www.albacatering.com` to `albacatering.com` (orphans the www).
5.  **DNS Configuration**: Vercel will show you the DNS records you need to add to your Domain Registrar (where you bought the domain, e.g., GoDaddy, BigRock, Namecheap).

    **You typically need to add:**
    *   **Type**: `A`
    *   **Name**: `@` (or leave blank)
    *   **Value**: `76.76.21.21` (This is Vercel's IP)

    *   **Type**: `CNAME`
    *   **Name**: `www`
    *   **Value**: `cname.vercel-dns.com`

6.  Log in to your Domain Registrar -> DNS Management -> Add these records.
7.  Wait 5-30 minutes. Vercel will verify the domain.
8.  Once valid, it will generate an SSL certificate (HTTPS) automatically.

Your site will be live at `https://albacatering.com`!

---

## Alternative: Traditional Web Hosting (cPanel, Hostinger, GoDaddy)

If you have a "Classic" hosting plan (File Manager / FTP), you need to deploy as a **Static Site**.

### 1. Update Configuration
Open `next.config.mjs` and update it to look like this (adding `output` and `unoptimized`):

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <--- Enables Static Export
    images: {
        unoptimized: true, // <--- REQUIRED for standard hosting (Server cannot optimize images)
        remotePatterns: [
            // ... keep your existing patterns here ...
        ],
    },
};
export default nextConfig;
```

### 2. Build the Project
Run this command in your terminal:
```bash
npm run build
```

### 3. Upload to Server
1.  A new folder named **`out`** will be created in your project.
2.  Open your Hosting File Manager (or FTP).
3.  Go to `public_html`.
4.  Upload **all files and folders inside** the `out` folder to `public_html`.
5.  Your site will be live!

**Note on Performance**: Since standard hosting cannot optimize images on-the-fly, enabling `unoptimized: true` means images might load a bit slower (LCP) compared to Vercel/Node.js hosting. This is a normal trade-off for static hosting.

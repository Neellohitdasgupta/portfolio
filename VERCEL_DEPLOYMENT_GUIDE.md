# 🚀 Vercel Deployment Guide

Complete guide to deploy your portfolio to Vercel.

## 📋 Prerequisites

- Git installed
- Node.js installed (for Vercel CLI)
- GitHub account (optional but recommended)

## 🎯 Method 1: Vercel CLI (Fastest)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Navigate to Portfolio

```bash
cd portfolio
```

### Step 3: Login to Vercel

```bash
vercel login
```

This will open your browser for authentication.

### Step 4: Deploy

```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **Project name?** → portfolio (or your choice)
- **Directory?** → ./ (current directory)
- **Override settings?** → No

### Step 5: Deploy to Production

```bash
vercel --prod
```

Your site is now live! 🎉

## 🎯 Method 2: Vercel Dashboard (Easiest)

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. In your portfolio folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Other
   - **Root Directory:** `portfolio`
   - **Build Command:** (leave empty)
   - **Output Directory:** (leave empty)
5. Click "Deploy"

Done! Your site will be live in ~1 minute.

## 🎯 Method 3: Drag & Drop (No Git Required)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Select "Deploy from template" or drag your `portfolio` folder
4. Wait for deployment

## ⚙️ Configuration Files

Your portfolio includes:

- `vercel.json` - Deployment configuration
- `.vercelignore` - Files to exclude from deployment
- `README.md` - Project documentation

## 🔧 Post-Deployment

### Update Domain (Optional)

1. Go to your project in Vercel dashboard
2. Settings → Domains
3. Add custom domain

### Environment Variables (If needed)

1. Settings → Environment Variables
2. Add any API keys or secrets

### Update EmailJS

Make sure your EmailJS credentials in `script.js` are correct:
- Service ID: `service_0g7drqi`
- Template ID: `template_8o2f13l`
- Public Key: `0ayShdLxjHBRNYQzY`

## 📊 What Gets Deployed

✅ **Included:**
- All HTML, CSS, JS files
- Images (jpg, png, svg)
- PDFs (certificates, resume)
- Project demos

❌ **Excluded:**
- Python backend files (.py)
- Batch files (.bat)
- Documentation files
- Node modules

## 🐛 Troubleshooting

### Issue: Build fails

**Solution:** Check that all file paths are relative and correct.

### Issue: Images not loading

**Solution:** Ensure image paths don't start with `/` - use relative paths like `images/photo.jpg`

### Issue: Contact form not working

**Solution:** Verify EmailJS credentials in `script.js`

### Issue: 404 errors

**Solution:** Check `vercel.json` routing configuration

## 🔄 Updating Your Site

### Using CLI:

```bash
cd portfolio
vercel --prod
```

### Using GitHub:

Just push changes to your repository:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel will auto-deploy!

## 📱 Testing

After deployment, test:

1. ✅ Homepage loads
2. ✅ All sections scroll smoothly
3. ✅ Project demos work
4. ✅ Contact form sends emails
5. ✅ Resume downloads
6. ✅ Certificates open
7. ✅ Mobile responsive
8. ✅ Dark/light mode toggle

## 🎉 Success!

Your portfolio is now live on Vercel with:
- ⚡ Lightning-fast global CDN
- 🔒 Free SSL certificate
- 🌍 Custom domain support
- 📊 Analytics dashboard
- 🔄 Automatic deployments

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Your Email: neellohitdsgpt@gmail.com

---

**Note:** The Python backends for your demos are not deployed. The demos use client-side simulations. For full backend functionality, consider deploying backends separately to Render, Railway, or PythonAnywhere.

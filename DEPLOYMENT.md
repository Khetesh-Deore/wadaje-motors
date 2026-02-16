# Deployment Guide - Wadaje Motors Website

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:5173

### 3. Build for Production

```bash
npm run build
```

The production files will be in the `dist` folder.

## Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts. Your site will be live in seconds!

### Option 2: Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/wadaje-motors"
}
```

3. Deploy:
```bash
npm run deploy
```

### Option 4: Traditional Web Hosting (cPanel, etc.)

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your web hosting via FTP/cPanel File Manager

3. Ensure the server is configured to serve `index.html` for all routes

## Important Configuration

### Before Deployment, Update:

1. **WhatsApp Number** in `src/components/WhatsAppButton.tsx`:
```typescript
const phoneNumber = '919876543210' // Replace with your number
```

2. **Social Media Links** in `src/components/SocialMedia.tsx`:
```typescript
const socials = [
  { icon: FaInstagram, name: 'Instagram', url: 'YOUR_INSTAGRAM_URL', color: '#E4405F' },
  { icon: FaFacebook, name: 'Facebook', url: 'YOUR_FACEBOOK_URL', color: '#1877F2' },
  { icon: FaLinkedin, name: 'LinkedIn', url: 'YOUR_LINKEDIN_URL', color: '#0A66C2' },
  { icon: FaXTwitter, name: 'X', url: 'YOUR_X_URL', color: '#000000' }
]
```

3. **Meta Tags** in `index.html` (for SEO):
```html
<meta name="description" content="Your custom description">
<meta property="og:title" content="Wadaje Motors - WM India">
<meta property="og:description" content="Engineering Precision. Driving Innovation.">
```

## Performance Optimization

The site is already optimized with:
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Optimized images
- ✅ Minified CSS/JS
- ✅ Tree shaking

## Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Issue: PDFs not loading
- Ensure all PDF files are in `public/documents/`
- Check file paths match exactly (case-sensitive)

### Issue: Logo not showing
- Verify `public/logo.png` exists
- Check `public/documents/1000024686.png` exists

### Issue: Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Support

For issues or questions, contact the development team.

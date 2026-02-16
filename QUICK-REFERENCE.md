# Quick Reference Guide

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📁 Important Files to Customize

### 1. WhatsApp Number
**File:** `src/components/WhatsAppButton.tsx`
**Line:** 10
```typescript
const phoneNumber = '919876543210' // Change this
```

### 2. Social Media Links
**File:** `src/components/SocialMedia.tsx`
**Lines:** 6-9
```typescript
const socials = [
  { icon: FaInstagram, name: 'Instagram', url: '#', color: '#E4405F' },
  { icon: FaFacebook, name: 'Facebook', url: '#', color: '#1877F2' },
  { icon: FaLinkedin, name: 'LinkedIn', url: '#', color: '#0A66C2' },
  { icon: FaXTwitter, name: 'X', url: '#', color: '#000000' }
]
```

### 3. Company Tagline
**File:** `src/components/Hero.tsx`
**Line:** 48
```typescript
Engineering Precision. Driving Innovation.
```

### 4. Colors
**File:** `src/index.css`
**Lines:** 8-10
```css
--primary-purple: #7c3aed;
--primary-blue: #1e40af;
--dark-blue: #0f172a;
```

### 5. Meta Tags (SEO)
**File:** `index.html`
**Line:** 7
```html
<meta name="description" content="Your description here" />
```

## 🎨 Color Palette

```css
Primary Purple: #7c3aed
Primary Blue: #1e40af
Dark Blue: #0f172a
Light Background: #ffffff
Glass Background: rgba(255, 255, 255, 0.7)
Text Gray: #64748b
```

## 📱 Responsive Breakpoints

```css
Mobile: max-width: 768px
Tablet: 768px - 1024px
Desktop: min-width: 1024px
Large: min-width: 1400px
```

## 🔧 Common Tasks

### Add a New Document
1. Place PDF in `public/documents/`
2. Update `src/App.tsx` documents array:
```typescript
{
  id: 'unique-id',
  title: 'Document Title',
  description: 'Document description',
  path: '/documents/filename.pdf'
}
```

### Change Logo
1. Replace `public/logo.png`
2. Replace `public/documents/1000024686.png`
3. Recommended size: 200x200px (transparent PNG)

### Add New Section
1. Create component in `src/components/`
2. Import in `src/App.tsx`
3. Add to JSX between existing sections

### Modify Animation Speed
**File:** Component CSS files
```css
transition: all 0.4s ease; /* Change 0.4s */
```

### Change Font
**File:** `index.html`
**Line:** 9-10
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

**File:** `src/index.css`
```css
font-family: 'YourFont', sans-serif;
```

## 🐛 Troubleshooting

### Issue: Port already in use
```bash
npm run dev -- --port 3000
```

### Issue: Changes not showing
```bash
# Hard refresh
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

### Issue: Build errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Issue: PDF not loading
- Check file path matches exactly
- Ensure file is in `public/documents/`
- Check browser console for errors

## 📦 Project Structure

```
wadaje-motors/
├── public/
│   ├── documents/          # PDF files
│   └── logo.png           # Company logo
├── src/
│   ├── components/        # React components
│   │   ├── Hero.tsx      # Landing section
│   │   ├── Documents.tsx # Document grid
│   │   ├── DocumentModal.tsx # PDF viewer
│   │   ├── SocialMedia.tsx # Social icons
│   │   └── WhatsAppButton.tsx # WhatsApp button
│   ├── App.tsx           # Main component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
└── vite.config.ts        # Build config
```

## 🌐 Deployment Checklist

- [ ] Update WhatsApp number
- [ ] Update social media links
- [ ] Update meta tags for SEO
- [ ] Test on mobile devices
- [ ] Test all document links
- [ ] Run production build
- [ ] Test production build locally
- [ ] Deploy to hosting
- [ ] Test live site
- [ ] Check mobile responsiveness
- [ ] Verify SSL certificate

## 📊 Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress before upload
   - Max size: 200KB per image

2. **Minimize Bundle**
   - Remove unused dependencies
   - Use dynamic imports
   - Enable gzip compression

3. **CDN Usage**
   - Host on Vercel/Netlify
   - Enable CDN caching
   - Use edge functions

## 🔗 Useful Links

- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Docs](https://vitejs.dev)
- [React Icons](https://react-icons.github.io/react-icons/)

## 💡 Pro Tips

1. Use browser DevTools (F12) for debugging
2. Test on real mobile devices, not just emulators
3. Check console for warnings/errors
4. Use Lighthouse for performance audits
5. Keep dependencies updated
6. Backup before major changes
7. Use Git for version control

## 📞 Support

For detailed guides, see:
- `README.md` - Overview and features
- `SETUP.md` - Installation guide
- `DEPLOYMENT.md` - Deployment options
- `FEATURES.md` - Complete feature list

---

**Quick Start:** Double-click `start.bat` (Windows) or run `npm install && npm run dev`

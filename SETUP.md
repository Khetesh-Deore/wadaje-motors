# Setup Instructions - Wadaje Motors Website

## Prerequisites

Before you begin, ensure you have:
- Node.js (v18 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)
- A code editor (VS Code recommended)

## Step-by-Step Setup

### 1. Verify Node.js Installation

Open terminal/command prompt and run:
```bash
node --version
npm --version
```

You should see version numbers. If not, install Node.js first.

### 2. Install Project Dependencies

Navigate to the project folder and run:
```bash
npm install
```

This will install all required packages (React, TypeScript, Framer Motion, etc.)

### 3. Start Development Server

```bash
npm run dev
```

You should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Open http://localhost:5173 in your browser.

### 4. Customize Your Website

#### Update WhatsApp Number
File: `src/components/WhatsAppButton.tsx`
```typescript
const phoneNumber = '919876543210' // Change this
```

#### Update Social Media Links
File: `src/components/SocialMedia.tsx`
```typescript
const socials = [
  { icon: FaInstagram, name: 'Instagram', url: 'https://instagram.com/yourpage', ... },
  // Update all URLs
]
```

#### Change Colors (Optional)
File: `src/index.css`
```css
:root {
  --primary-purple: #7c3aed;  /* Change these */
  --primary-blue: #1e40af;
}
```

### 5. Test Your Changes

After making changes:
1. Save the file
2. The browser will automatically reload
3. Check if everything looks good

### 6. Build for Production

When ready to deploy:
```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

### 7. Preview Production Build (Optional)

```bash
npm run preview
```

This lets you test the production build locally.

## Common Issues & Solutions

### Issue: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: Port 5173 already in use
**Solution:** 
```bash
# Kill the process or use a different port
npm run dev -- --port 3000
```

### Issue: Changes not reflecting
**Solution:** 
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Restart dev server

### Issue: Module not found errors
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

## Project Structure Explained

```
wadaje-motors/
├── public/                    # Static files
│   ├── documents/            # PDF documents
│   └── logo.png              # Company logo
├── src/
│   ├── components/           # React components
│   │   ├── Hero.tsx         # Landing section
│   │   ├── Documents.tsx    # Document cards
│   │   ├── DocumentModal.tsx # PDF viewer
│   │   ├── SocialMedia.tsx  # Social icons
│   │   ├── WhatsAppButton.tsx # WhatsApp button
│   │   └── ...
│   ├── App.tsx              # Main app
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
└── vite.config.ts           # Build config
```

## Next Steps

1. ✅ Install dependencies
2. ✅ Run development server
3. ✅ Customize content (WhatsApp, social links)
4. ✅ Test on mobile (use browser dev tools)
5. ✅ Build for production
6. ✅ Deploy (see DEPLOYMENT.md)

## Need Help?

- Check README.md for features overview
- Check DEPLOYMENT.md for deployment options
- Review code comments in source files

## Development Tips

- Use Chrome DevTools for debugging (F12)
- Test on mobile view (responsive design)
- Check console for errors
- Use React DevTools extension for component inspection

Happy coding! 🚀

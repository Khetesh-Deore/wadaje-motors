# Wadaje Motors - Premium Landing Page

A high-end, single-page website for Wadaje Motors (WM India) built with React, TypeScript, and Framer Motion.

## Features

- 🎨 Ultra-modern, premium UI with glassmorphism effects
- ⚡ Smooth animations and micro-interactions
- 📱 Fully responsive (mobile-first design)
- 🔒 Protected document viewer (view-only, no downloads)
- 💬 WhatsApp integration for instant contact
- 🌐 Social media integration
- 🎯 Scroll progress indicator
- ✨ Loading screen with logo animation

## Tech Stack

- React 18
- TypeScript
- Vite
- Framer Motion (animations)
- React Icons
- CSS3 (Flexbox & Grid)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Hero section with logo and CTA
│   ├── Documents.tsx         # Document cards grid
│   ├── DocumentModal.tsx     # Protected PDF viewer modal
│   ├── SocialMedia.tsx       # Social media icons
│   ├── WhatsAppButton.tsx    # Floating WhatsApp button
│   ├── ScrollProgress.tsx    # Scroll progress bar
│   └── LoadingScreen.tsx     # Initial loading animation
├── App.tsx                   # Main app component
├── main.tsx                  # Entry point
└── index.css                 # Global styles

public/
└── documents/                # PDF documents and logo
```

## Customization

### WhatsApp Number

Update the phone number in `src/components/WhatsAppButton.tsx`:

```typescript
const phoneNumber = '919876543210' // Replace with actual number
```

### Social Media Links

Update URLs in `src/components/SocialMedia.tsx`:

```typescript
const socials = [
  { icon: FaInstagram, name: 'Instagram', url: 'YOUR_URL', color: '#E4405F' },
  // ... other socials
]
```

### Colors

Modify CSS variables in `src/index.css`:

```css
:root {
  --primary-purple: #7c3aed;
  --primary-blue: #1e40af;
  --dark-blue: #0f172a;
}
```

## Document Protection

Documents are protected with:
- Disabled right-click context menu
- Disabled print functionality (Ctrl+P)
- Disabled text selection
- PDF toolbar hidden
- View-only iframe embedding

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved by Wadaje Motors

# 🎨 Visual Design Guide - Wadaje Motors Website

## 🖼️ Section Breakdown

### 1. Loading Screen (0-2.5 seconds)
```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│          [ANIMATED LOGO]            │
│                                     │
│         WADAJE MOTORS               │
│           WM INDIA                  │
│                                     │
│         ═══════════                 │
│        (progress bar)               │
│                                     │
└─────────────────────────────────────┘
```
**Features:**
- Animated logo with scale/opacity pulse
- Gradient text
- Smooth progress bar animation
- Fades out after 2.5s

---

### 2. Hero Section (Full Screen)
```
┌─────────────────────────────────────┐
│  [Scroll Progress Bar - Top]        │
├─────────────────────────────────────┤
│                                     │
│     ○ ○ ○ (Animated Orbs)          │
│                                     │
│        [COMPANY LOGO]               │
│                                     │
│      ╔═══════════════╗              │
│      ║ Coming Soon   ║              │
│      ╚═══════════════╝              │
│                                     │
│  Engineering Precision.             │
│  Driving Innovation.                │
│                                     │
│   ┌─────────────────┐               │
│   │ Explore Documents│               │
│   └─────────────────┘               │
│                                     │
│         Scroll ↓                    │
│         [scroll icon]               │
└─────────────────────────────────────┘
```
**Features:**
- Gradient background with floating orbs
- Large gradient text "Coming Soon"
- Animated CTA button
- Scroll indicator with animation

---

### 3. Documents Section
```
┌─────────────────────────────────────┐
│     ～～～～～～～～～～～～～～～     │
│        (Wave Divider)               │
│                                     │
│      Official Documents             │
│   Verified credentials and          │
│      certifications                 │
│                                     │
│  ┌──────────┐  ┌──────────┐        │
│  │  📄 GST  │  │ 📄 Udyam │        │
│  │          │  │          │        │
│  │ GST Cert │  │ MSME Reg │        │
│  │          │  │          │        │
│  │ View → │  │ View → │        │
│  └──────────┘  └──────────┘        │
│                                     │
│  ┌──────────┐  ┌──────────┐        │
│  │ 📄 Shop  │  │  📄 IEC  │        │
│  │   Act    │  │          │        │
│  │ Shop Act │  │ Import   │        │
│  │ License  │  │ Export   │        │
│  │ View → │  │ View → │        │
│  └──────────┘  └──────────┘        │
│                                     │
└─────────────────────────────────────┘
```
**Features:**
- 2x2 grid on desktop, stacked on mobile
- Glassmorphic cards
- Hover: scale up + glow effect
- Staggered fade-in animation
- Click to open modal

---

### 4. Document Modal (Overlay)
```
┌─────────────────────────────────────┐
│ [Blurred Background]                │
│  ┌─────────────────────────────┐   │
│  │ 📄 GST Certificate      [X] │   │
│  ├─────────────────────────────┤   │
│  │                             │   │
│  │  [PDF VIEWER]               │   │
│  │                             │   │
│  │  Document content here...   │   │
│  │                             │   │
│  │                             │   │
│  ├─────────────────────────────┤   │
│  │ 🛡️ This document is         │   │
│  │   protected and cannot      │   │
│  │   be downloaded             │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```
**Features:**
- Backdrop blur overlay
- Clean white modal
- Embedded PDF viewer
- Loading spinner
- Protected (no download)
- Close with X or ESC key

---

### 5. Social Media Section
```
┌─────────────────────────────────────┐
│     ～～～～～～～～～～～～～～～     │
│        (Wave Divider)               │
│                                     │
│      Connect With Us                │
│   Follow us on social media         │
│       for updates                   │
│                                     │
│    ⭕     ⭕     ⭕     ⭕           │
│   Insta  Face  Link    X            │
│          book  edIn                 │
│                                     │
└─────────────────────────────────────┘
```
**Features:**
- Circular glassmorphic buttons
- Hover: expand + color fill
- Bounce animation on appear
- Brand colors on hover
- Opens in new tab

---

### 6. WhatsApp Button (Fixed)
```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│                      [Chat with us] │
│                            💚       │
│                           (WhatsApp)│
└─────────────────────────────────────┘
```
**Features:**
- Fixed bottom-right position
- Green gradient background
- Pulse animation
- Tooltip on hover
- Opens WhatsApp with pre-filled message

---

## 🎨 Color Usage

### Primary Colors
```
Purple Gradient: ████████ #7c3aed
Blue Gradient:   ████████ #1e40af
Dark Blue:       ████████ #0f172a
```

### Secondary Colors
```
Light Gray:      ████████ #64748b
Border:          ████████ rgba(255,255,255,0.18)
Glass BG:        ████████ rgba(255,255,255,0.7)
```

### Accent Colors
```
WhatsApp:        ████████ #25D366
Instagram:       ████████ #E4405F
Facebook:        ████████ #1877F2
LinkedIn:        ████████ #0A66C2
X (Twitter):     ████████ #000000
```

---

## 📱 Responsive Layouts

### Desktop (> 1024px)
```
┌─────────────────────────────────────┐
│         [Full Width Hero]           │
│                                     │
│  [Doc1]  [Doc2]  [Doc3]  [Doc4]    │
│                                     │
│  [Social Icons in Row]              │
└─────────────────────────────────────┘
```

### Tablet (768px - 1024px)
```
┌───────────────────────┐
│   [Full Width Hero]   │
│                       │
│  [Doc1]    [Doc2]     │
│  [Doc3]    [Doc4]     │
│                       │
│  [Social Icons Row]   │
└───────────────────────┘
```

### Mobile (< 768px)
```
┌─────────────┐
│ [Hero]      │
│             │
│ [Doc1]      │
│ [Doc2]      │
│ [Doc3]      │
│ [Doc4]      │
│             │
│ [Social]    │
│ [Icons]     │
└─────────────┘
```

---

## ✨ Animation Timeline

### Page Load
```
0.0s  → Loading screen appears
0.5s  → Logo scales in
1.0s  → Text fades in
2.0s  → Progress bar completes
2.5s  → Loading screen fades out
3.0s  → Hero section fades in
```

### Scroll Animations
```
Hero → Documents:
  - Wave divider animates
  - Cards stagger in (0.15s delay each)
  - Fade up + scale effect

Documents → Social:
  - Wave divider animates
  - Icons bounce in (0.1s delay each)
```

### Hover Effects
```
Document Card:
  - Scale: 1.0 → 1.02
  - Shadow: normal → glow
  - Border: subtle → purple
  - Duration: 0.4s

Social Icon:
  - Scale: 1.0 → 1.15
  - Rotate: 0° → -5° → 5° → 0°
  - Color: gray → brand color
  - Duration: 0.3s

Button:
  - TranslateY: 0 → -2px
  - Shadow: normal → large glow
  - Duration: 0.3s
```

---

## 🎯 Interactive Elements

### Clickable Areas
1. **"Explore Documents" Button** → Smooth scroll to documents
2. **Document Cards** → Open modal with PDF
3. **Social Icons** → Open social media (new tab)
4. **WhatsApp Button** → Open WhatsApp chat
5. **Modal Close (X)** → Close modal
6. **Modal Background** → Close modal
7. **ESC Key** → Close modal

### Hover States
- All buttons: scale + shadow
- Document cards: scale + glow + border
- Social icons: scale + rotate + color
- WhatsApp button: scale + shadow

---

## 📐 Spacing & Typography

### Font Sizes
```
Hero Title:      48px - 96px (responsive)
Section Title:   36px - 56px (responsive)
Subtitle:        18px - 28px (responsive)
Body:            15px - 16px
Small:           12px - 14px
```

### Font Weights
```
Light:    300
Regular:  400
Medium:   500
Semibold: 600
Bold:     700
Extrabold: 800
```

### Spacing
```
Section Padding:  80px - 100px
Card Gap:         20px - 30px
Element Margin:   12px - 24px
Button Padding:   16px 40px
```

---

## 🎭 Visual Effects

### Glassmorphism
```css
background: rgba(255, 255, 255, 0.7)
backdrop-filter: blur(10px)
border: 1px solid rgba(255, 255, 255, 0.18)
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08)
```

### Gradient Text
```css
background: linear-gradient(135deg, #7c3aed, #1e40af)
-webkit-background-clip: text
-webkit-text-fill-color: transparent
```

### Glow Effect
```css
box-shadow: 0 0 40px rgba(124, 58, 237, 0.3)
```

---

## 🎬 Performance

### Load Times
- First Paint: < 1s
- Interactive: < 2s
- Full Load: < 3s

### Bundle Size
- CSS: ~13KB (gzipped: ~3KB)
- JS: ~280KB (gzipped: ~91KB)
- Total: ~293KB (gzipped: ~94KB)

---

**This visual guide helps understand the layout and design system of the website.**

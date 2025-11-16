# Air Plus Nepal Treks - Modern Travel Website

A modern, responsive travel website for a Nepal trekking and tours company built with Next.js 15, TypeScript, Tailwind CSS 4, and Framer Motion.

## 🚀 Features

- ✅ **Modern Design**: Clean, minimalist UI with glass morphism effects
- ✅ **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- ✅ **Fast & Optimized**: Built with Next.js 15 for optimal performance
- ✅ **Content Management**: Easy-to-edit JSON files for all content
- ✅ **SEO Optimized**: Proper metadata and structured HTML
- ✅ **Smooth Animations**: Framer Motion for beautiful transitions
- ✅ **Accessible**: WCAG compliant with proper ARIA labels
- ✅ **Dark/Light Mode**: Automatic theme switching

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Lucide React

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Management

Edit content in `public/content/config/`:

- `site.json` - Site metadata
- `home.json` - Home page content
- `contact.json` - Contact information
- `treks.json` - Trek listings
- `tours.json` - Tour listings

## 🖼️ Images

Currently using Unsplash placeholders. Replace with your own images:

1. Add images to `public/assets/images/`
2. Update JSON files with new paths:
   ```json
   "image": "/assets/images/treks/your-image.jpg"
   ```

## 🎨 Customization

### Colors

Edit `app/globals.css`:

```css
:root {
  --primary: #0ea5e9;
  --accent: #10b981;
}
```

### WhatsApp Number

Update in:
- `app/components/layout/WhatsAppButton.tsx`
- `public/content/config/contact.json`

## 📄 Pages

- **Home** (`/`) - Hero, stats, featured treks, testimonials, FAQ
- **Treks** (`/treks`) - All treks listing
- **Trek Detail** (`/treks/[slug]`) - Individual trek pages
- **Contact** (`/contact`) - Contact form and information

## 🔧 Project Structure

```
app/
├── components/
│   ├── layout/       # Navbar, Footer, WhatsApp
│   ├── sections/     # Stats, Activities, etc.
│   └── ui/           # Hero, TrekCard, etc.
├── treks/            # Trek pages
├── contact/          # Contact page
└── page.tsx          # Home page

public/content/config/  # JSON content files
```

## 📱 Responsive Design

- Mobile: `< 640px`
- Tablet: `≥ 640px`
- Desktop: `≥ 1024px`

## 🚀 Deployment

Deploy to Vercel:

```bash
npm run build
```

Push to GitHub and deploy via Vercel dashboard.

---

Built with Next.js 15, TypeScript, and Tailwind CSS 4

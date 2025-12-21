# Royal Grandeur Banquet Hall 🏰

A premium, high-performance website for **Royal Grandeur**, Patna's premier destination for weddings and events. Built with modern web technologies to deliver an elegant user experience.

![Project Preview](https://lh3.googleusercontent.com/aida-public/AB6AXuDyMdAN-7MxuazKKmMGBRb7aHbTT2PJAgE5MfKIpYJXZ2KP-3Jw07qxq2dWxHVTv-kanwcivOPyFVvXmf9eHgKkhhiSmo6XzXB-Wt4DNj1IYn-lutujl8ex5rxFaF-5CsWs9ola6npfoXpusyvkl7iHi7L2BLxHbtj5A-BQ9XKt4vvS2JqnYplJrM6UuIJHurzy8uRlsDzgyy6jVHqFu_OR9HDTk9pT3iUP8MptED-0LrmkbjUuL94AjDn15Z1pij-PYlKXAfeUqOAK)

## ✨ Features

*   **Royal Aesthetics**: Custom "Gold & Navy" theme with elegant typography and sophisticated animations.
*   **Performance First**: 
    *   Optimized LCP (Largest Contentful Paint) with `next/image` prioritization.
    *   Zero layout shift (CLS).
    *   Seamless page transitions.
*   **Fully Responsive**: Meticulously crafted for mobile, tablet, and desktop screens.
*   **SEO Optimized**: Comprehensive metadata, OpenGraph tags, and structured data (JSON-LD) for better search visibility.
*   **Dynamic Content**:
    *   Interactive Photo Gallery.
    *   Real-time Contact Form (integrated with Web3Forms).
    *   Testimonials Slider.

## 🛠 Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Maps**: [Leaflet](https://leafletjs.com/) (via `react-leaflet`) / HTML Embed

## 🚀 Getting Started

### Prerequisites

*   Node.js 18.17 or later
*   npm or yarn or pnpm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/invinci009/banquet.git
    cd banquet
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/                  # App Router pages & layouts
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── gallery/          # Gallery page
│   ├── services/         # Services page
│   ├── layout.tsx        # Root layout (Metadata, Fonts)
│   └── page.tsx          # Home page
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Page sections (Hero, Features, etc.)
│   └── shared/           # Reusable UI components
└── lib/                  # Utilities and helper functions
```

## 🌐 Optimization Highlights

*   **Fonts**: Using `Inter` and `Playfair Display` via `next/font` for zero CLS.
*   **Images**: All major images use `next/image` for automatic resizing and webp conversion.
*   **Metadata**: Dynamic metadata generation for social sharing previews.

## 📄 License

This project is proprietary and developed for Royal Grandeur Banquet Hall.

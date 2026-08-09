# Nexcent - Minimal Landing Page Design

A modern, responsive landing page built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, based on the Nexcent Figma design system.

---

## 🚀 Features

- ⚡ **Next.js 14 (App Router)** for fast performance and optimal SEO.
- 🎨 **Tailwind CSS** styled strictly according to Figma design specs (typography, colors, pixel dimensions).
- 📱 **Fully Responsive** layout optimized for desktop, tablet, and mobile viewports.
- ✨ **Interactive Animations** with smooth scroll marquee and scroll-triggered intersection observers.
- 🎯 **Modular Architecture** with reusable React UI components.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Icons:** Inline SVGs & Custom Asset Images
- **Deployment:** [Vercel](https://vercel.com)

---

## 📦 Project Structure

```text
├── app/
│   ├── layout.tsx         # Root layout with font definitions
│   └── page.tsx           # Main landing page combining all sections
├── components/
│   ├── Header.tsx         # Navigation & Top Bar
│   ├── HeroSection.tsx    # Hero Carousel / Header
│   ├── ClientsSection.tsx # Infinite marquee client logos
│   ├── Community.tsx      # Community management cards
│   ├── InfoSection1.tsx   # Pixelgrade unlock feature section
│   ├── Achievements.tsx   # Key business stats & numbers
│   ├── InfoSection2.tsx   # Footer design feature section
│   ├── Customer.tsx       # Testimonial & client links
│   ├── CommunityUpdates.tsx # Blog / Community updates section
│   ├── Frame16.tsx        # Pre-footer CTA banner
│   └── Footer.tsx         # Multi-column main footer
├── public/
│   └── assets/
│       └── images/        # Static images, icons, and illustrations

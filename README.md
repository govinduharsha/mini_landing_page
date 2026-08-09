# 🚀 Nexcent — Minimal Landing Page Design

A modern, high-performance, and fully responsive agency landing page built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

The design is recreated pixel-perfectly based on the **Nexcent Figma UI system**, with responsive layouts, smooth animations, and a clean component architecture.

---

## 📸 Overview & Features

* ⚡ **Next.js 14 App Router** — Optimized rendering and SEO-friendly architecture.
* 🎨 **Figma Pixel-Perfect Styling** — Typography, colors, spacing, and layouts closely match the original Figma design.
* 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop screens.
* ♾️ **Smooth Infinite Marquee** — Pure CSS infinite scrolling client/logo banner without visible gaps.
* ✨ **Intersection Animations** — Scroll-triggered fade-in and slide-up animations.
* 🧩 **Component Architecture** — Modular and maintainable React + TypeScript components.
* 🚀 **High Performance** — Lightweight animations and optimized frontend structure.

---

## 🛠️ Tech Stack

| Technology       | Usage                        |
| ---------------- | ---------------------------- |
| **Next.js 14**   | React framework & App Router |
| **TypeScript**   | Type-safe development        |
| **Tailwind CSS** | Styling & responsive design  |
| **Inter**        | Primary typography           |
| **Vercel**       | Deployment                   |

---

## 📂 Project Structure

```text
mini_landing_page/
│
├── app/
│   ├── layout.tsx              # Root layout & Inter font configuration
│   ├── page.tsx                # Main landing page
│   └── globals.css             # Global styles & animations
│
├── components/
│   ├── Header.tsx              # Navigation bar
│   ├── HeroSection.tsx         # Hero banner & CTA
│   ├── ClientsSection.tsx      # Infinite client/logo marquee
│   ├── CommunitySection.tsx    # Community feature cards
│   ├── InfoSection1.tsx        # Unlock story section
│   ├── AchievementsSection.tsx # Statistics & counters
│   ├── InfoSection2.tsx        # Feature highlight section
│   ├── CustomerSection.tsx     # Customer testimonial
│   ├── CommunityUpdates.tsx    # Blog/community cards
│   ├── Frame16.tsx             # Get a Demo CTA
│   └── Footer.tsx              # Footer & social links
│
├── public/
│   └── assets/
│       └── images/             # Static images
│
├── .eslintrc.json
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ghv061101/mini_landing_page.git
```

### 2. Navigate to the project

```bash
cd mini_landing_page
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

---

## 🌐 Deployment

This project can be deployed easily using **Vercel**.

```bash
npm run build
```

Then connect the GitHub repository to your Vercel project.

---

## 🎨 Design

The landing page is inspired by the **Nexcent Figma UI design system**, recreated using modern React and Tailwind CSS techniques.

### Key Design Principles

* Minimal and clean interface
* Consistent spacing system
* Responsive grid layouts
* Modern typography
* Smooth transitions
* Accessible interactive elements
* Reusable React components

---

## 📄 License

This project is intended for educational and portfolio purposes.

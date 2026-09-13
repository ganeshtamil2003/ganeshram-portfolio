# Ganesh Ram M — Portfolio

A modern, dark-themed personal portfolio website built with **Next.js 16**, **TypeScript**, and **CSS Modules**. Designed to showcase professional experience, technical skills, projects, and certifications as a QA Engineer & Full-Stack Enthusiast.

## 🌐 Live

> _Coming soon — will be deployed on Vercel_

---

## ✨ Features

- **Dark-mode first** design with premium gradient accents and glassmorphism
- **Animated terminal** hero section with simulated test suite output
- **Interactive STLC pipeline** showcasing QA expertise with animated nodes
- **Horizontal education timeline** with milestone cards and animated traveling dot
- **Responsive layout** — fully mobile-friendly with hamburger menu on small screens
- **Contact form** powered by Web3Forms (no backend required)
- **SEO optimized** — Open Graph, Twitter cards, JSON-LD structured data, dynamic sitemap
- **Security hardened** — Content-Security headers, `X-Frame-Options`, MIME sniffing protection
- **Accessible** — Semantic HTML, ARIA labels, skip-to-content link, `prefers-reduced-motion` support
- **Performance** — Google Fonts self-hosted via `next/font`, optimized images with `next/image`

---

## 🛠️ Tech Stack

| Category     | Technology                        |
| ------------ | --------------------------------- |
| Framework    | Next.js 16 (App Router)           |
| Language     | TypeScript                        |
| Styling      | CSS Modules + CSS Custom Properties |
| Fonts        | Inter, JetBrains Mono (Google Fonts via `next/font`) |
| Form Backend | Web3Forms                         |
| Deployment   | Vercel                            |

---

## 📁 Project Structure

```
portfolio-app/
├── public/                    # Static assets (logos, resume, fonts)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout (fonts, SEO metadata, JSON-LD)
│   │   ├── page.tsx           # Main page composing all sections
│   │   └── sitemap.ts         # Dynamic sitemap generation
│   ├── components/
│   │   ├── Navbar/            # Responsive nav with mobile hamburger menu
│   │   ├── Hero/              # Animated terminal hero section
│   │   ├── About/             # Developer profile card with photo
│   │   ├── Experience/        # Career timeline
│   │   ├── Expertise/         # STLC pipeline + capability grid
│   │   ├── Skills/            # Technical skills grouped by category
│   │   ├── Projects/          # Professional & personal projects
│   │   ├── Certifications/    # Credentials grid + achievement banner
│   │   ├── Education/         # Horizontal timeline (SSLC → HSC → B.Tech)
│   │   ├── Philosophy/        # Work philosophy quotes
│   │   ├── Contact/           # Contact links + Web3Forms form
│   │   ├── Footer/            # Footer with social links
│   │   └── AnimatedReveal/    # Scroll-triggered reveal wrapper
│   └── styles/
│       ├── tokens.css         # Design system tokens (colors, spacing, typography)
│       ├── globals.css        # Reset, base styles, utilities
│       └── animations.css     # Shared keyframes + reduced-motion
└── next.config.ts             # Security headers configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/ganeshtamil2003/portfolio.git
cd portfolio/portfolio-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🔒 Security

The following security headers are configured in `next.config.ts`:

| Header                 | Value                             | Purpose                                  |
| ---------------------- | --------------------------------- | ---------------------------------------- |
| X-Content-Type-Options | `nosniff`                         | Prevents MIME-type sniffing              |
| X-Frame-Options        | `DENY`                            | Prevents clickjacking via iframes        |
| X-XSS-Protection       | `1; mode=block`                   | Legacy XSS filter for older browsers     |
| Referrer-Policy        | `strict-origin-when-cross-origin` | Controls referrer information in requests |
| Permissions-Policy     | `camera=(), microphone=(), geolocation=()` | Disables unnecessary browser APIs |

---

## 📱 Responsive Breakpoints

| Breakpoint  | Behavior                                           |
| ----------- | -------------------------------------------------- |
| `> 1024px`  | Full desktop layout — multi-column grids           |
| `768-1024px`| Tablet — reduced columns, stacked layouts          |
| `641-768px` | Mobile landscape — hamburger menu, single columns  |
| `< 640px`   | Mobile portrait — fully stacked, optimized touch   |
| `< 480px`   | Small mobile — compact CTAs, reduced spacing       |

---

## 📬 Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com/) for serverless form submission:

1. Sign up at [web3forms.com](https://web3forms.com/)
2. Get your access key
3. Update the `WEB3FORMS_KEY` constant in `src/components/Contact/Contact.tsx`
4. Form submissions are delivered to the configured email

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Ganesh Ram M**
- GitHub: [@ganeshtamil2003](https://github.com/ganeshtamil2003)
- LinkedIn: [ganesh-ram-m](https://www.linkedin.com/in/ganesh-ram-m-410308213)
- Email: ganesh28062003@gmail.com

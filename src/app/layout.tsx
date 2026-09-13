import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ganesh Ram M — QA Engineer & Full-Stack Enthusiast | Portfolio",
  description:
    "Portfolio of Ganesh Ram M — a quality-focused software professional combining QA engineering expertise in enterprise banking with full-stack development knowledge. Explore projects, skills, and approach to building reliable software.",
  keywords: [
    "QA Engineer",
    "Software Testing",
    "Full-Stack Developer",
    "Cypress",
    "Automation Testing",
    "Portfolio",
    "Ganesh Ram M",
  ],
  authors: [{ name: "Ganesh Ram M" }],
  openGraph: {
    title: "Ganesh Ram M — QA Engineer & Full-Stack Enthusiast",
    description:
      "Quality-focused software professional combining QA engineering expertise with full-stack development knowledge.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh Ram M — QA Engineer & Full-Stack Enthusiast",
    description:
      "Quality-focused software professional combining QA engineering expertise with full-stack development knowledge.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ganesh Ram M",
    jobTitle: "Associate Software Analyst",
    knowsAbout: [
      "Software Quality Assurance",
      "Software Testing",
      "Cypress Automation",
      "Full-Stack Development",
      "API Testing",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

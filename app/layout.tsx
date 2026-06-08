import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Data Analyst Portfolio | Excel, SQL, Power BI, Python",
  description:
    "Data Analyst portfolio showcasing Excel, SQL, Power BI, Python, dashboard development, KPI analysis, and business insight storytelling.",
  keywords: [
    "Data Analyst",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Excel",
    "Analytics Portfolio",
    "Dashboard Portfolio"
  ],
  authors: [{ name: "Data Analyst" }],
  creator: "Data Analyst",
  openGraph: {
    title: "Turning Data Into Business Insights",
    description:
      "Recruiter-friendly Data Analyst portfolio focused on Power BI dashboards, SQL projects, Excel analysis, Python, and business decision support.",
    type: "website",
    locale: "en_US",
    url: siteUrl
  },
  alternates: {
    canonical: siteUrl
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Data Analyst",
    jobTitle: "Data Analyst",
    url: siteUrl,
    knowsAbout: ["Excel", "SQL", "Power BI", "Python", "Data Cleaning", "KPI Analysis", "Dashboard Development"],
    sameAs: ["https://www.linkedin.com", "https://github.com"]
  };

  return (
    <html lang="en">
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

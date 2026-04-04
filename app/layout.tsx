import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EleventhMedia — Motivated Seller Leads for Real Estate Investors",
  description:
    "We build and manage Meta Ads and Google PPC campaigns exclusively for real estate investors, wholesalers, and house flippers. Get more motivated seller leads.",
  keywords:
    "motivated seller leads, we buy houses marketing, real estate investor ads, meta ads real estate, google ppc real estate investors, cash home buyer leads",
  openGraph: {
    title: "EleventhMedia — Motivated Seller Leads for Real Estate Investors",
    description:
      "Meta Ads and Google PPC for real estate investors. Get more motivated seller leads, more appointments, and more deals in your pipeline.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

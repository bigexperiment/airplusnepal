import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Air Plus Nepal Treks - Discover the Magic of Nepal",
  description: "Embark on unforgettable trekking and cultural adventures in the heart of the Himalayas. Expert guides, authentic experiences, and memories that last a lifetime.",
  keywords: ["Nepal trekking", "Himalayan adventures", "Everest Base Camp", "Annapurna Circuit", "cultural tours Nepal", "adventure travel"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

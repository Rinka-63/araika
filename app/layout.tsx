import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatWA"; // Impor ini
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1A1412] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />

        <FloatingWhatsApp />
      </body>
    </html>
  );
}

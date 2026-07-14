import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Krishna Art Institute",
  description: "Krishna Art Institute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} antialiased`}>
      <head>
        {/* Latest Bootstrap min CSS */}
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
        {/* Font Awesome CSS */}
        <link rel="stylesheet" href="/assets/webfonts/themify-icons.css" />
        {/* All Min Css */}
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        {/* owl carousel Css */}
        <link rel="stylesheet" href="/assets/owlcarousel/css/owl.carousel.css" />
        <link rel="stylesheet" href="/assets/owlcarousel/css/owl.theme.css" />
        {/* MAGNIFIC CSS */}
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        {/* jquery-simple-mobilemenu Css */}
        <link rel="stylesheet" href="/assets/css/jquery-simple-mobilemenu.css" />
        {/* animate CSS */}
        <link rel="stylesheet" href="/assets/css/animate.css" />
        {/* Style CSS */}
        <link rel="stylesheet" href="/assets/css/style.css?v=2" />

        {/* Scripts */}
        <script defer src="/assets/js/jquery-1.12.4.min.js"></script>
        <script defer src="/assets/bootstrap/js/bootstrap.min.js"></script>			
        <script defer src="/assets/owlcarousel/js/owl.carousel.min.js"></script>	
        <script defer src="/assets/js/jquery-simple-mobilemenu.js?v=4"></script>			
        <script defer src="/assets/js/jquery.magnific-popup.min.js"></script>
        <script defer src="/assets/js/jquery.mixitup.js"></script>		
        <script defer src="/assets/js/gsap.min.js"></script>
        <script defer src="/assets/js/ScrollTrigger.min.js"></script>
        <script defer src="/assets/js/scrolltopcontrol.js"></script>	
        <script defer src="/assets/js/jquery.inview.min.js"></script>				
        <script defer src="/assets/js/wow.min.js"></script>				
        <script defer src="/assets/js/scripts.js"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

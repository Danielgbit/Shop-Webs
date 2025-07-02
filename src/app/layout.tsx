import { Poppins } from "next/font/google";
import "./globals.css";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: '400'
});

//FONT AWESOME
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importa los estilos
import { generateMetadata } from "@/lib/seo";
import { Metadata } from "next";

config.autoAddCss = false; // Evita la doble carga de CSS

export const metadata: Metadata = generateMetadata();


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

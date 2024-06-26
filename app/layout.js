import { Noto_Sans_Georgian as NotoSansGeorgianFont } from "next/font/google";
import "@/app/globals.css";
import { Suspense } from "react";
import ReduxProvider from "./ReduxProvider";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";


const inter = NotoSansGeorgianFont({ subsets: ["georgian"], display: "swap" });

export const metadata = {
  title: "عصفوره - ناقل أخباري عربي",
  description:
    "موقع عصفوره الإخباري يقدم آخر الأخبار والتحديثات حول العالم بشكل سريع وموثوق.",
  metadataBase: new URL("https://www.asfourah.online"),
  category: "الصفحه الرئيسيه",
  icons: {
    icon: "./icon.png",
    shortcut: "./icon.png",
    apple: "./icon.png",
  },
  canonical: "https://www.asfourah.online",
  openGraph: {
    title: "عصفوره - ناقل أخباري عربي",
    description:
      "موقع عصفوره الإخباري يقدم آخر الأخبار والتحديثات حول العالم بشكل سريع وموثوق.",
    siteName: "عصفوره",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <ReduxProvider>
          <Suspense>
            <Header />
          </Suspense>
          {children}
          <Suspense>
            <Footer />
          </Suspense>
        </ReduxProvider>
      </body>
    </html>
  );
}

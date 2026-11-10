import { Outfit } from "next/font/google";
import type { Viewport } from "next";
import { LuMessageCircle } from "react-icons/lu";
import { WHATSAPP_URL, type Locale } from "@/lib/site";
import "@/app/styles/site.css";
import "@/app/styles/pay-legacy.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-outfit",
  adjustFontFallback: true,
});

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07061a",
  colorScheme: "dark",
};

export default function RootShell({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className={outfit.variable}>
      <head>
        <link rel="icon" href="/img/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <a
          href={WHATSAPP_URL}
          className="wa-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <LuMessageCircle aria-hidden="true" />
        </a>
      </body>
    </html>
  );
}

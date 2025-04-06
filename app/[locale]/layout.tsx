import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-top";
import { ToastContainer } from "react-toastify";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NexLynk",
    template: "%s - NexLynk",
  },
  icons: {
    icon: "/logo-tag.png",
  },
  description:
    "NexLynk helps you learn Japanese easily with interactive lessons, expert guidance, and engaging content.",
  generator: "Next.js",
  applicationName: "NexLynk",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://www.nexlynk.com"),
  keywords: [
    "NexLynk Japanese learning",
    "NexLynk",
    "NexLynk language platform",
  ],
  category: "language platform",
  authors: [{ name: "Root.Studio" }],
  creator: "Root.Studio",
  publisher: "Root.Studio",
  openGraph: {
    title: "NexLynk Japanese",
    description:
      "NexLynk helps you learn Japanese easily with interactive lessons, expert guidance, and engaging content.",
    url: "https://www.nexlynk.com",
    siteName: "NexLynk",
    images: [
      {
        url: "https://ik.imagekit.io/rootstudio/nexlynk.jpg",
        alt: "NexLynk",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexLynk",
    description:
      "NexLynk helps you learn Japanese easily with interactive lessons, expert guidance, and engaging content.",
    creator: "Root.Studio",
    images: {
      url: "https://ik.imagekit.io/rootstudio/nexlynk.jpg",
      alt: "NexLynk",
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const messages = await getMessages();

  const { locale } = await params;

  return (
    <html lang={locale} dir="ltr">
      <head>
        <link rel="icon" href="/logo-tag.png" type="image/x-icon" />
      </head>
      <body className={` ${inter.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <ToastContainer />
          {children}
          <ScrollToTop />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

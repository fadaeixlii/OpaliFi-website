import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn - Landing template",
  description: "Landing template from Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning className="">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>
          OpaliFi - Seamless DeFi & CeFi Wallet Without Moving Assets
        </title>

        <meta
          name="description"
          content="OpaliFi is a next-gen digital wallet providing seamless asset management and diverse financial opportunities in both DeFi and CeFi without the need to move your assets. Enjoy secure trading, investment options, and smart trading bots all in one place."
        />

        <meta
          name="keywords"
          content="OpaliFi, digital wallet, cryptocurrency, DeFi, CeFi, seamless trading, asset management, crypto wallet, investment, trading bots, blockchain"
        />

        <meta name="author" content="OpaliFi Team" />

        <meta
          property="og:title"
          content="OpaliFi - Seamless DeFi & CeFi Wallet Without Moving Assets"
        />
        <meta
          property="og:description"
          content="Experience the future of digital asset management with OpaliFi. Access DeFi and CeFi services, manage assets securely without transfers, and leverage smart trading bots and investment opportunities all in one platform."
        />
        <meta
          property="og:image"
          content="https://opali-fi-website.vercel.app/images/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://opali-fi-website.vercel.app/"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="OpaliFi - Seamless DeFi & CeFi Wallet Without Moving Assets"
        />
        <meta
          name="twitter:description"
          content="OpaliFi combines secure and flexible digital asset management with the convenience of not moving your assets. Explore DeFi and CeFi services, and use smart trading bots directly from your wallet."
        />
        <meta
          name="twitter:image"
          content="https://opali-fi-website.vercel.app/images/twitter-image.jpg"
        />
      </head>
      <body className={cn("min-h-screen  bg-backgrounds ", inter.className)}>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

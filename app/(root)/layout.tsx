import React from "react";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "../../components/share/NavBar";
import BottomBar from "../../components/share/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HIntern!",
  description: "Website for intern",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="vi">
        <body className={inter.className}>
          <NavBar />
          <main>
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
          </main>

          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}

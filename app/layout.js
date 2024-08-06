import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Pantry Tracker",
  description: "Your digital pantry management system powered by AI!",
  keywords:
    "food, pantry, kitchen, cabinet, organization, food pantry, food, pantry inventory, grocery list, meal planning, AI-powered pantry, pantry organizer, food storage, kitchen inventory, smart pantry, pantry management, pantry app, food tracking, kitchen management, digital pantry, food inventory, pantry assistant, kitchen helper, pantry solutions, food management, pantry system, pantry tracking app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

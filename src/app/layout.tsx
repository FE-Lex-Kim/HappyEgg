import type { Metadata } from "next";
import "globals.css";

export const metadata: Metadata = {
  title: "HappyEgg",
  description:
    "Happy Egg: A premium brand offering fresh, healthy free-range eggs, prioritizing sustainable farming and animal welfare. Experience wholesome, naturally produced eggs with Happy Egg for a healthier lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

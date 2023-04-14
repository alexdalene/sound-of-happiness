import "./globals.scss";
import { Raleway } from "next/font/google";

export const metadata = {
  title: "Sound of Happiness",
  description: "Project by Noroff students.",
};

const raleway = Raleway({ subsets: ["latin"], variable: '--raleway-font' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.variable}>
      <body>{children}</body>
    </html>
  );
}

import { Nunito } from "next/font/google";

import "./globals.css";

export const metadata = {
  title: "REPLIQ",
  description: "Created By MD Rasedul Islam",
};
const font = Nunito({
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}

import { Roboto } from "next/font/google";
import "./ui/globals.css";

const roboto = Roboto({ subsets: ["latin"]  , weight : ["100","300","400" , "500" ,"500" ,"900"]});

export const metadata = {
  title: "Admin Dashboard",
  description: "generate by Ali_hji",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import FirstNavBar from "@/components/NavBar/FirstNavBar";
import SecondNavBar from "@/components/NavBar/SecondNavBar";
import Head from "next/head";
import ReduxProvider from "@/components/reduxProvider";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NetTruyen",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex flex-col h-screen w-screen bg-black">
        <ReduxProvider>
          {/* <div className="w-full"><FirstNavBar /></div>
          <div className="w-full sticky top-0 z-20"><SecondNavBar /></div>
          <div className="flex flex-col w-full">{children}</div> */}
          <NavBar/>
          <div className="flex flex-col w-full">{children}</div> 
        </ReduxProvider>
      </body>
    </html>
  );
}

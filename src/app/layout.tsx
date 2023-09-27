import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Lingyu Yang | Personal Website",
  authors: [
    { name: "Lingyu Yang", url: "https://github.com/littlesheep12" },
    { name: "杨凌宇", url: "https://github.com/littlesheep12" },
  ],
  description: "Lingyu's personal portfolio website, 杨凌宇的个人网站",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main className="container lg:px-28 flex-grow flex flex-col justify-center items-center">{children}</main>
        <BackToTop />
      </body>

      {/* <footer className="footer items-center justify-center">
        <span>&copy; 2023 <a href="https://littlesheep12.github.io/leoyang.github.io/en/">Lingyu&#39;s Blog</a></span>
        <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
        <span id="busuanzi_container">
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
          Vistiors : <span id="busuanzi_value_site_uv"></span>
          Views: <span id="busuanzi_value_site_pv"></span>
        </span>
      </footer> */}
    </html>
  );
}
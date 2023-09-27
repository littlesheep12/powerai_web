"use client";

import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";


const goldenSignature = localFont({
  src: "../assets/GoldenSignature.otf",
  display: "swap",
});

export default function Header() {
  // const links = ["about", "skills", "contact"];
  const links = [
    { text: "ABOUT", href: "/about" },
    { text: "EXPERIENCE", href: "/exp" },
    { text: "RESUME", href: "/LingyuYang_Resume_0920.pdf"}
  ];
  return (
    <>
      <nav className="justify-centerpy-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2">

        <div className="container flex flex-col items-center justify-between md:flex-row">

          <div
            className={cn(
              "text-5xl drop-shadow-2xl",
              goldenSignature.className,
            )}
          >
            <Link href="/">Lingyu Yang</Link>
          </div>

          <div className="nav-links flex gap-x-8 text-xs md:text-base">
            {links.map((link) => (
              <Link key={link.text} href={link.href}>
                <p>{link.text}</p>
              </Link>
            ))}
          </div>

        </div>
      </nav>
    </>
  );
}

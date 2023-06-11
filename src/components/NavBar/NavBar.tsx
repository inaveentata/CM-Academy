import React from "react";
import { Abril_Fatface } from "next/font/google";
import Link from "next/link";

const abrilFatface = Abril_Fatface({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

function CustomButton({ text }: { text: string }) {
  return (
    <button className=" border-2 border-black py-2 px-4 rounded-lg text-black bg-transparent text-xs font-semibold hover:bg-rgba(250, 248, 248, 0.608) ">
      {text}
    </button>
  );
}

type Props = {};

function NavBar({}: Props) {
  return (
    <header>
      <div className="flex items-center justify-center py-4">
        <h1 className={`${abrilFatface.className} tracking-wide text-5xl`}>
          CM Academy
        </h1>
      </div>
      <nav className=" border-b-2 border-black flex items-center justify-center gap-1 md:gap-20 pb-2">
        <Link href="/">
          <CustomButton text="Home" />
        </Link>
        <Link href="/about">
          <CustomButton text="About" />
        </Link>
        <Link href="/contact">
          <CustomButton text="Contact" />
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;

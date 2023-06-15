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
    <button className="border-2 border-black py-1 md:py-2 px-2 md:px-4 rounded-lg text-black bg-transparent text-[10px] md:text-sm font-semibold hover:bg-gray-200 transition duration-300">
      {text}
    </button>
  );
}

type Props = {};

function NavBar({}: Props) {
  return (
    <header>
      <div className="flex items-center justify-center py-4">
        <h1
          className={`${abrilFatface.className} tracking-wide text-xl md:text-5xl`}
        >
          CM Academy
        </h1>
      </div>
      <nav className="border-b-2 border-black flex items-center justify-center gap-4 md:gap-20 pb-2">
        <Link href="/">
          <CustomButton text="Jobs" />
        </Link>
        <Link href="/admissions">
          <CustomButton text="Admissions" />
        </Link>
        <Link href="/scholarships">
          <CustomButton text="Sholarships" />
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;

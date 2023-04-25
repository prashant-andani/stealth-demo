"use client";

import Image from "next/image";
import Link from "next/link";


export default function NavBar() {

  return (
    <>
      <div
        className={`fixed top-0 w-full z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <span>➕</span>
            <p>Medical Management</p>
          </Link>
          
        </div>
      </div>
    </>
  );
}

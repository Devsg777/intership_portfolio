import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Header() {
  return (
    <header className="h-screen bg-[rgb(0,0,0)] backdrop:blur-2xl flex flex-col  items-center py-5 gap-10 w-40 border-r-2 pr-10 text-white fixed left-0 top-0">
      <div>
        <Image src="/images/logo.png" width={150} height={150} alt="logo" />
      </div>
      <nav className="flex flex-col justify-center items-center gap-5 w-40">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>Home</Link>
        <button className="">Download</button>
      </nav>
      <div className="flex gap-5 text-2xl">
        <Link href="">
          <FaLinkedin />
        </Link>
        <Link href={''}>
          <FaInstagram />
        </Link>
        <Link href={''}>
          <FaFacebookSquare />
        </Link>
      </div>
    </header>
  );
}

export default Header;

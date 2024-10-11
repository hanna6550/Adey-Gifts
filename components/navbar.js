"use client";
import Image from "next/image";
import Logo from "@/public/images/logo_1.png"
import React from "react";
import Link from "next/link";

// Links array
const links = [
  { id: 1, link: "/", name: "HOME" },
  { id: 2, link: "/products", name: "PRODUCTS" },
  { id: 3, link: "/services", name: "SERVICES"},
  { id: 4, link: "/about", name: "ABOUT US"},
  { id: 5, link: "/contact", name: "CONTACT US"},
];

function Navbar() {
  return (
    <div className="py-1 bg-black text-yellow-200 text-sm mb-8">
      <div className="flex flex-col items-center">
        <Image className="pb-1 justify-center" src={Logo} width="40" height="60" alt="Logo" />
        <hr className="text-white h-4 w-full" />
        <div className="flex flex-row justify-center gap-x-16 pb-1">
          {links.map((link) => (
            <Link key={link.id} href={link.link} className="hover:text-white active:bg-white">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

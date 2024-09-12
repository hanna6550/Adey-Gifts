"use client";
import Image from "next/image";
import Logo from "@/images/logo_1.png"
import React from "react";
import Link from "next/link";

// Links array
const links = [
  { id: 1, link: "/", name: "Home" },
  { id: 2, link: "/products", name: "Product" },
  { id: 3, link: "/services", name: "Services"},
  { id: 4, link: "/about", name: "About Us"},
  { id: 5, link: "/contact", name: "Contact Us"},
];

function Navbar() {
  return (
    <div className="py-1 bg-black text-yellow-100 text-lg mb-5">
      <div className="flex flex-col items-center">
        <Image className="pb-1 justify-center" src={Logo} width="40" height="60" alt="Logo" />
        <hr className="text-white h-4 w-full" />
        <div className="flex flex-row justify-center gap-x-14">
          {links.map((link) => (
            <Link key={link.id} href={link.link} className="hover:text-yellow-300">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

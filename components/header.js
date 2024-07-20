import React from 'react'
import Image from "next/image";
import Logo from "@/public/images/logo.jpg"

function Header() {
  return (
    <div className="bg-slate-50">
    <Image src={Logo} className="h-20 w-40" />
    </div>
  )
}

export default Header
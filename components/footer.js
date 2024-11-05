import React from 'react'
import Image from 'next/image'
import Logo2 from "@/public/images/logo2.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
  <div className="mt-52  bg-black">
    <div className="w-full bottom-0 md:pt-10 md:pb-8 py-6">
     <Image alt='adey logo ' src={Logo2} className='md:w-32 w-28 md:h-40 h-32 mx-auto'/>
     <h1 className="text-xl font-thin text-yellow-400 text-center py-5"> Explore a diverse collection of <br/> handpicked gifts that inspire joy and <br/> celebration.</h1>
     <div className="flex justify-center gap-5 text-white md:py-3">
     <a href="https://www.facebook.com"> <FaFacebookF size={20} /> </a>
     <a href="https://t.me/adeygifts"> <FaTelegram size={20} /> </a>
     <a href="https://www.instagram.com/adey.gifts/"> <FaInstagram size={20}/> </a>
     <a href="https://www.tiktok.com/@amanuelz7"> <FaTiktok size={20} /> </a>
     </div>
     <div className="flex justify-center space-x-3 text-white pt-4">
     <LuPhoneCall size={30} className="pt-1"/> <h1 className="text-xl"> 0919208746 </h1><br/>
     <LuPhoneCall size={30} className="pt-1"/> <h1 className="text-xl"> 0955327885 </h1>
     </div>
    </div>
    <div className='flex justify-center text-gray-400 text-sm'>Copyright © {currentYear} Adey-Gifts. All rights reserved.</div>
  </div>
  )
}

export default Footer
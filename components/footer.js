import React from 'react'
import Image from 'next/image'
import Logo2 from "@/public/images/logo2.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
  <div className="mt-40 ">
    <div className="w-full bg-black bottom-0 md:py-10 py-6">
     <Image alt='adey logo ' src={Logo2} className='md:w-32 w-28 md:h-40 h-32 mx-auto'/>
     <h1 className="text-xl font-thin text-yellow-400 text-center py-5"> Explore a diverse collection of <br/> handpicked gifts that inspire joy and <br/> celebration.</h1>
     <div className="flex justify-center gap-5 text-white">
      <FaFacebookF size={20} />
      <FaTelegram size={20} />
      <FaInstagram size={20}/>
      <FaTiktok size={20} />
     </div>
     <div className="flex justify-center space-x-3 text-white pt-4">
     <LuPhoneCall size={30} className="pt-1"/> <h1 className="text-xl"> 0919208746 </h1>
     </div>
    </div>
  </div>
  )
}

export default Footer
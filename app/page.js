import Image from "next/image";
import Logo from "@/public/images/logo.jpg"

export default function Home() {
  return (
    <div>
      <Image src={Logo} className="h-20 w-40" />
    </div>
  );
}
import HomePage from "@/components/customComponents/HomePage";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return(
    //DIRECTLY IMPORTING THE HOMEPAGE FROM COMPONENTS
    <div>
      <HomePage/>
    </div>

  )
}

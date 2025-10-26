
"use client";
import Image from "next/image";

 

export default function WorkDetailGallery() {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[80vh]   overflow-hidden  ">
      <Image
        src="https://mma.prnewswire.com/media/2041787/PEPSI_Multipack.jpg?p=facebook"
        alt="Pepsi Multipack"
        width={1200}
        height={800}
        className="object-cover w-full h-full"
        priority
      />

    
    </section>
  );
}

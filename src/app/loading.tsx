import Image from "next/image";

 

export default function Loading () {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#390d63]">
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Animated glowing gradient ring */}
          <div className="absolute w-full h-full rounded-full animate-spin-slow bg-gradient-to-tr from-[#A43EF9] via-[#5A189A] to-[#E1AAFF] opacity-80 shadow-[0_0_40px_10px_#A43EF9]" />
          {/* Pulsing shadow effect */}
          <div className="absolute w-36 h-36 rounded-full bg-[#3D096C] flex items-center justify-center shadow-[0_0_60px_10px_#E1AAFF] animate-pulse">
            <Image src="/logo.png" alt="Logo" width={80} height={80} className="drop-shadow-[0_0_20px_#A43EF9]" />
          </div>
        </div>
        {/* Subtle text or loading bar below logo */}
        <div className="absolute bottom-1/3 w-full flex justify-center">
          <div className="w-32 h-2 rounded-full bg-gradient-to-r from-[#A43EF9] via-[#5A189A] to-[#E1AAFF] animate-gradient-x" />
        </div>
      </div>
    );
  }
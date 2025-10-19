import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-black/40">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Animated glowing gradient ring */}
        <div
          className="absolute w-full h-full rounded-full animate-spin-slow 
          bg-[conic-gradient(from_0deg,_#040150,_#5A189A,_#000,_#040150)] 
          opacity-90 shadow-[0_0_40px_10px_rgba(90,24,154,0.4)]"
        />

 
        {/* Inner circle with gradient background */}
        <div
          className="absolute w-36 h-36 rounded-full 
          bg-[linear-gradient(135deg,#040150_0%,#5A189A_50%,#000_100%)] 
          flex items-center justify-center 
          shadow-[0_0_60px_10px_rgba(164,62,249,0.3)]"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="drop-shadow-[0_0_25px_#A43EF9]"
          />
 
        </div>
      </div>

      {/* Subtle loading bar */}
      <div className="absolute bottom-1/3 w-full flex justify-center">
        <div
          className="w-32 h-2 rounded-full 
          bg-gradient-to-r from-[#A43EF9] via-[#5A189A] to-[#E1AAFF] 
          animate-gradient-x shadow-[0_0_20px_#5A189A]"
        />
      </div>
    </div>
  );
}

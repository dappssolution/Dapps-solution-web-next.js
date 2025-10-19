"use client"


import Image from "next/image";
import { useState, useEffect } from "react";
 


const AboutBanner = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 1500);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return (
			<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#3D096C]">
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
// Tailwind custom animations (add to your global.css or tailwind config if not present)
// .animate-spin-slow { animation: spin 2.5s linear infinite; }
// .animate-gradient-x { animation: gradient-x 1.5s ease-in-out infinite; }
// @keyframes gradient-x { 0%,100%{background-position:left} 50%{background-position:right} }

	return (
		<section className="relative w-full min-h-[90vh] flex items-center justify-center   overflow-hidden px-4 md:px-12 lg:px-24 pb-16 pt-22"
		style={{
  backgroundImage: "url('/bg-6.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}
>
			{/* Left Content */}
			<div className="flex-1 z-10 max-w-2xl">
				<div className="mb-4 text-lg font-medium text-white/80">Who we are</div>
				<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
					Building the future with <span className="text-[#A43EF9]">innovation</span> and passion.
				</h1>
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
					<button className="bg-white text-[#18191B] rounded-full px-8 py-4 font-semibold text-lg shadow-lg hover:bg-[#A43EF9] hover:text-white transition flex items-center gap-2">
						Explore our mission
					</button>
					<div className="flex items-center gap-2 mt-4 sm:mt-0">
						<div className="w-12 h-12 rounded-full overflow-hidden border-2  ">
							<img src="https://www.softlabsgroup.com/Software-Companies-Mumbai-India-Images/Trends%20in%20Information%20Technology%202023-2024.webp" alt="Team Member 1" width={48} height={48} className="w-full h-full object-cover" />
						</div>
						<div className="w-12 h-12 rounded-full overflow-hidden border-2   -ml-4">
							<img src="https://wallpapercave.com/wp/wp1877444.jpg" alt="Team Member 2" width={48} height={48} className="w-full h-full object-cover" />
						</div>
						<div className="w-12 h-12 rounded-full bg-[#A43EF9] flex items-center justify-center text-white font-bold text-2xl -ml-4">+</div>
					</div>
				</div>
			</div>
			{/* Right Graphic */}
			<div className="absolute right-0 top-0 h-full hidden md:flex items-center justify-end w-1/2 pointer-events-none">
				<svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
					<g stroke="#A43EF9" strokeWidth="1.5">
						<rect x="40" y="40" width="80" height="80" />
						<rect x="120" y="120" width="80" height="80" />
						<rect x="200" y="40" width="80" height="80" />
						<rect x="280" y="120" width="80" height="80" />
						<rect x="120" y="200" width="80" height="80" />
						<rect x="200" y="280" width="80" height="80" />
						<rect x="40" y="280" width="80" height="80" />
						<rect x="280" y="280" width="80" height="80" />
					</g>
				</svg>
			</div>
			{/* Responsive background graphic for mobile */}
			<div className="absolute right-0 bottom-0 md:hidden opacity-40">
				<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g stroke="#A43EF9" strokeWidth="1.5">
						<rect x="20" y="20" width="40" height="40" />
						<rect x="60" y="60" width="40" height="40" />
						<rect x="100" y="20" width="40" height="40" />
						<rect x="60" y="100" width="40" height="40" />
						<rect x="100" y="100" width="40" height="40" />
					</g>
				</svg>
			</div>
		</section>
	);
};

export default AboutBanner;

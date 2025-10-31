"use client"

 
import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";
 



const AboutBanner = () => {
    const { language, t } = useLanguage();


	// Layout direction and box position
	const isArabic = language === 'ar';
	return (
		<section
			className={`relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden px-4 md:px-12 lg:px-24 pb-16 pt-22 ${isArabic ? 'rtl' : 'ltr'}`}
			style={{
				backgroundImage: "url('/bg-6.jpg')",
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				direction: isArabic ? 'rtl' : 'ltr',
			}}
		>
			{/* Main Content and Graphic, order depends on language */}
			<div className={`flex-1 z-10 max-w-2xl ${isArabic ? 'text-right' : 'text-left'}`}>
				<div className="mb-4 text-lg font-medium text-white/80" dangerouslySetInnerHTML={{ __html: t('aboutBanner.badge') }} />
				<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t('aboutBanner.title') }} />
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
					<button
  onClick={() => {
    const phone = "919947400278";
    const message = `Hello Dapps Solutions,
I'm interested in learning more about your AI-driven websites, automation systems, and digital transformation services designed to enhance business growth and efficiency.
Please share more details.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}
  className="bg-white cursor-pointer text-[#18191B] rounded-full px-8 py-4 font-semibold text-lg shadow-lg hover:bg-[#A43EF9] hover:text-white transition flex items-center gap-2"
>
  {t('aboutBanner.button')}
</button>


					<div className="flex items-center gap-2 mt-4 sm:mt-0">
									<div className="w-12 h-12 rounded-full overflow-hidden border-2">
 										<Image src="https://www.softlabsgroup.com/Software-Companies-Mumbai-India-Images/Trends%20in%20Information%20Technology%202023-2024.webp" alt={t('aboutBanner.team1.alt')} width={48} height={48} className="w-full h-full object-cover" />
 									</div>
 									<div className="w-12 h-12 rounded-full overflow-hidden border-2 -ml-4">
 										<Image src="https://wallpapercave.com/wp/wp1877444.jpg" alt={t('aboutBanner.team2.alt')} width={48} height={48} className="w-full h-full object-cover" />
 									</div>
						<div className="w-12 h-12 rounded-full bg-[#A43EF9] flex items-center justify-center text-white font-bold text-2xl -ml-4">{t('aboutBanner.team.plus')}</div>
					</div>
				</div>
			</div>
					{/* Graphic: left for Arabic, right for English (hidden in Arabic) */}
					{!isArabic && (
						<>
							<div
								className={`absolute right-0 top-0 h-full hidden md:flex items-center justify-end w-1/2 pointer-events-none`}
							>
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
						</>
					)}
		</section>
	);
};

export default AboutBanner;

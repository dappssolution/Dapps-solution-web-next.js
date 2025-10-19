"use client"


import WorkDetailBanner from "@/components/work-detail/WorkDetailBanner";
import { ChallengesSection } from "@/components/work-detail/WorkDetailChallenge";
import WorkDetailFeaturedProjects from "@/components/work-detail/WorkDetailFeaturedProjects";
import WorkDetailGallery from "@/components/work-detail/WorkDetailGallery";
import WorkDetailInfo from "@/components/work-detail/WortDetailInfo";
import { worksData } from "@/lib/worksData";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SpotifyClone() {
    const { language: lang } = useLanguage();
    const data = worksData.spotifyClone;
    return (
        <div className="h-auto">
            <WorkDetailBanner title={data.banner.title[lang]} description={data.banner.description[lang]} />
            <WorkDetailInfo
                clientTitle={data.info.clientTitle[lang]}
                clientDescription={data.info.clientDescription[lang]}
                requirementTitle={data.info.requirementTitle[lang]}
                requirementDescription={data.info.requirementDescription[lang]}
            />
            <ChallengesSection
                challenges={data.challenges.map(c => ({ title: c.title[lang], description: c.description[lang] }))}
                description={data.challengesDescription[lang]}
            />
            <WorkDetailGallery/>
            <WorkDetailFeaturedProjects
                projects={data.featuredProjects.map(p => ({
                    image: p.image,
                    link: p.link,
                    delay: p.delay,
                    title: p.title[lang],
                    description: p.description[lang]
                }))}
                heading={data.featuredProjectsHeading[lang]}
            />
        </div>
    );
}
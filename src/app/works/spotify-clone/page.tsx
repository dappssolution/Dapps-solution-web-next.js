import WorkDetailBanner from "@/components/work-detail/WorkDetailBanner";
import { ChallengesSection } from "@/components/work-detail/WorkDetailChallenge";
import WorkDetailFeaturedProjects from "@/components/work-detail/WorkDetailFeaturedProjects";
import WorkDetailGallery from "@/components/work-detail/WorkDetailGallery";
import WorkDetailInfo from "@/components/work-detail/WortDetailInfo";

export default function SpotifyClone() {
    return (
        <div className="h-auto">
             <WorkDetailBanner/>
             <WorkDetailInfo/>
             <ChallengesSection/>
             <WorkDetailGallery/>
             <WorkDetailFeaturedProjects/>
        </div>
    )
}
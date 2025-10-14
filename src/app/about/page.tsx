import AboutBoxes from "@/components/aboutBoxes";
import ApproachSection from "@/components/approachSection";
import ClientReviews from "@/components/clientReview";
import TeamDescription from "@/components/teamDescription";
import AboutBanner from "@/components/aboutBanner";

export default function About() {
    return (
        
        <div>
            <AboutBanner/>
            <TeamDescription/>
            <AboutBoxes/>
            <ApproachSection/>         
            <ClientReviews/>
        </div>
    )
}

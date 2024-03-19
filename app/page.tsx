import Navbar from "@/app/components/navbar";
import GamePreview from "@/app/components/gamepreview";
import FeatureGame from "@/app/components/featuregame";
import AboutUs from "@/app/components/aboutus";
import NewsLetter from "@/app/components/newsletter";
import Footer from "@/app/components/footer";
import MultiPlatform from "@/app/components/multiplatform";

export default function Home() {
    return (
        <main>
            <Navbar />
            <GamePreview />
            <FeatureGame />
            <MultiPlatform />
            <AboutUs />
            <NewsLetter/>
            <Footer />
        </main>
    );
}

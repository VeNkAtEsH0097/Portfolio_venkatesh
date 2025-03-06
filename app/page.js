
import HeroSection from "@/components/Herosection";
import Skill from "@/components/Skills";
import ContactMe from "@/components/Contact";
import heroImage from "@/assets/images/skillss.jpg";
import AboutSection from "@/components/Aboutsection";



export default function Home() {


  return (
    < div className=" relative">
      <HeroSection />
      <AboutSection/>
      <Skill />
    </div>
  );
}

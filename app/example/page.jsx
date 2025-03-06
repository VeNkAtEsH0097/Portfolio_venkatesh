import AboutSec from "@/components/AboutExample";
import AboutSection from "@/components/Aboutsection";
import HeroSection from "@/components/Herosection";
import SkillsSection from "@/components/Skills";

const example = () => {
    return ( <>
    <div className=" relative">
    <HeroSection/>
    <div className=" absolute top-0 left-1/2 -translate-x-1/2 translate-y-[350%] z-10 ">
    <AboutSec/>
    </div>
    
    </div>
    <SkillsSection/>
    
    </>
     );
}
 
export default example;
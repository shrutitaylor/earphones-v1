import React from "react";
import Switch from "./switch";
const LandingFooter = ({sectionref}) => {
    return (
        <>
        <footer ref={sectionref} className="w-full overflow-hidden bottom-0 absolute font-aoMono justify-between  flex flex-row gap-4 text-black p-5 md:text-[1.2vw]">
        <section className=" flex flex-col md:flex-row md:gap-6 uppercase">
        <p>Immerse Yourself in Sound. Anytime, Anywhere.</p>
        </section>
        <section className="md:w-[15vw]">
        
        </section>
        <Switch />
        
        </footer>
        </>
    );
}

export default LandingFooter;
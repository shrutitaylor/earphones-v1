import React from "react";
const LandingFooter = ({sectionref}) => {
    return (
        <>
        <footer ref={sectionref} className="w-full overflow-hidden bottom-0 absolute font-aoMono justify-between  flex flex-row gap-4 text-black p-5 md:text-[1.2vw]">
        <section className=" flex flex-col md:flex-row md:gap-6 uppercase">
        <p>Immerse Yourself in Sound. Anytime, Anywhere.</p>
        </section>
        <section className="md:w-[15vw]">
        
        </section>
        <button className="font-aoMono text-[18px] h-[20px] xl:text-[1.2vw] xl:h-[2.5vw]  bg-black text-white p-3.5 leading-[1vw] w-[100px] rounded-lg">
                            SHOP
            </button>
        
        </footer>
        </>
    );
}

export default LandingFooter;
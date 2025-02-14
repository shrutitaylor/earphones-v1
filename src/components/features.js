import React from "react";

const Features = () =>{
    return(
    <>
    <section className="flex flex-col p-5">
    <header className="font-pressStart text-2xl lg:text-[4vw] lg:leading-[4.2vw]">
    Engineered for Excellence
    </header>
    <div className="font-outfit text-[16px] md:text-[25px] md:mt-1">
    Discover the features that make Bose headphones<br></br> the ultimate choice for music lovers, professionals, and adventurers alike.
    </div>
    <div className="justify-end flex font-aoMono pt-10 text-[12px] md:text-[25px]">
        <ul className="text-left">
            <li> - Active Noise Cancellation</li>
            <li> - Customizable EQ</li>
            <li> - Touch Controls</li>
            <li> - All-Day Comfort</li>
            <li> - Voice Assistant Integration</li>
            <li> - Water-Resistant Design</li>
        </ul>
        
    </div>
    </section>
    </>
    );
}

export default Features;
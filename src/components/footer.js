import React from "react";
import LogoDesign from "./logodesign";
const Footer = () => {
    return (
        <>


            <footer className="relative bottom-0 left-0 z-20 w-full p-4 bg-white border-t bg-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <span className="text-sm font-aoMono  text-black uppercase sm:text-center dark:text-gray-400">Developed by Shruti
                </span>
                <ul className="flex flex-wrap items-center mt-3 ">
                <LogoDesign />
                </ul>
            </footer>

        </>

    );
}

export default Footer;
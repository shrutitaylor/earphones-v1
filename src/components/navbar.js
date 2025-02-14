import React from "react";
import LogoDesign from "./logodesign";
import Button from "./button";
const Navbar = () => {
    return (
        <>
       


        <nav class="fixed w-full z-20 top-0 start-0">
        <div class=" flex flex-wrap  justify-between p-5">
            <a href="/" class="flex space-x-3 rtl:space-x-reverse">
               <LogoDesign />
            </a>
            
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <button className="font-aoMono text-[18px] h-[20px] xl:text-[1.2vw] xl:h-[2.5vw]text-white leading-[1vw] w-[100px] rounded-lg">
                      {/*        */}
           <Button />
            </button>
            </div>
        </div>
        </nav>

        </>
    );
}

export default Navbar;
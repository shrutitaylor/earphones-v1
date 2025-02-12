import React from "react";
const Navbar = () => {
    return (
        <>
       


        <nav class="fixed w-full z-20 top-0 start-0">
        <div class=" flex flex-wrap  justify-between p-5">
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <section className="font-pressStart text-[20px] ">BOSE</section>
            </a>
            
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <section className="font-aoMono text-[1.2vw] h-[2.5vw] bg-black text-white p-3.5 leading-[1vw] w-[100px] rounded-lg">
                            MENU
            </section>
            </div>
        </div>
        </nav>

        </>
    );
}

export default Navbar;
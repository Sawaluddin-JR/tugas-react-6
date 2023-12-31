import { document } from "postcss";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";

function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);

    const menuLinks = [
        { name: "HOME", link: "#home" },
        { name: "ABOUT", link: "#about" },
        { name: "SKILLS", link: "#skills" },
        { name: "PROJECTS", link: "#projects" },
        { name: "CONTACT", link: "#contact" },
    ];


    useEffect(() => {
        const handleScroll = () => {
            // eslint-disable-next-line no-unused-vars
            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="first-letter:fixed w-full left-0 top-0 z-[999] 
        bg-gray-800 text-gray-900">
            <div className="flex items-center justify-between">
                <div className="mx-7">
                    <h4 className="text-4xl uppercase font-bold text-white">
                        Sya<span className="text-primary">P</span>F
                    </h4>
                </div>
                <div className={`${sticky ? "md:bg-white/0 bg-white" : "bg-white"}text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}>
                    <ul className="flex items-center gap-1 py-2 text-semibold text-white">
                        {menuLinks?.map((menu, i) => (
                            <li key={i} className="px-6 hover:text-yellow-500">
                                <a href={menu?.link}>{menu?.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div onClick={() => setOpen(!open)} className="z-[999] text-white text-3xl md:hidden m-5">
                    <AiOutlineMenu />
                </div>
                <div className={`md:hidden text-white absolute w-4/2 h-screen px-7 py-2 font-medium bg-gray-700 top-0 duration-300 ${open ? "right-0" : "right-[-100%]"}`}>
                    <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                        {menuLinks?.map((menu,i) => (
                            <li onClick={() => setOpen(false)} key={i} className="px-6 hover:text-yellow-600">
                                <a href={menu?.link}>{menu?.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
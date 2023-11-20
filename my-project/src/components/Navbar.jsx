import { useState } from "react";
import { useEffect } from "react";
import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";





const Navbar = () => {
      const [isSticky, setIsSticky] = useState(false);
      const [menuOpen, setMenuOpen] = useState(true); // State to track if the menu is open or closed

      const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menuOpen state
      };


  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setIsSticky(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <>

        <div className={` text-white text-[20px] header p-4 md:py-0 md:px-16 fixed top-0 left-0 w-full z-10   ${isSticky ? 'bg-black ' : ' hidden'}`}  style={{transition: 'background-color 0.5s ease' }}>
        {menuOpen ? (
                        <span className=" flex-1 font-bold text-xl ml-2 pr-4 md:hidden hover:cursor-pointer material-symbols-outlined "  onClick={toggleMenu}>menu</span>
                        ) : (
                        <span className="font-bold text-xl ml-2 pr-4 md:hidden hover:cursor-pointer material-symbols-outlined"  onClick={toggleMenu}>close</span>
                        )}
            <div className={`flex flex-col md:flex-row md:flex   items-center  py-5 ${menuOpen ? 'hidden ' : 'active '}`}>
                <ul className=" flex-1 flex flex-col md:flex-row md:gap-7 gap-8 justify-center md:justify-start items-center w-[400]">
                    <a href="#about" className="hover:underline  cursor-pointer" >About</a>

                    <a href="#skills"  className="flex justify-center items-end cursor-pointer">Skills<span className="material-symbols-outlined cursor-pointer">expand_more</span></a>
                    <a href="#projects" className="hover:underline  cursor-pointer">Projects</a>
                </ul>
                <p className=" header hidden md:block  text-4xl px-5">Welcome</p>
                <div className="w-[100px] flex-1 gap-8 md:gap-0 pt-8 md:p-0 flex flex-col md:flex-row md:justify-end justify-center items-center ">
                    <a href="" target="_blank" className="material-symbols-outlined md:mr-4  cursor-pointer">
                    person
                    </a>
                    <a href="" target="_blank" className="md:mr-4 cursor-pointer">
                     <DiGithubBadge className=" text-3xl"/>
                    </a>
                    <a href="" target="_blank" className=" cursor-pointer">
                     <BsLinkedin className=" text-2xl"/>
                    </a>

                </div>
                
            </div>
        </div>

        
        
        </>
      );
}
 
export default Navbar;
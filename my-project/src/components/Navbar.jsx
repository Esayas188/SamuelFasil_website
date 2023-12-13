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

        <div className={` text-[#b2b4b2] text-[20px] header p-4 md:py-0 md:px-16 fixed top-0 left-0 right-0 w-full z-10   ${isSticky ? 'bg-[#121212] ' : ' hidden'}`} style={{ maxWidth: '1800px', margin: '0 auto',transition: 'background-color 0.5s ease' }} >
        {menuOpen ? (
                        <span className=" text-[#b2b4b2] flex-1 font-bold text-xl ml-2 pr-4 md:hidden hover:cursor-pointer material-symbols-outlined "  onClick={toggleMenu}>menu</span>
                        ) : (
                        <span className=" text-[#b2b4b2] font-bold text-xl ml-2 pr-4 md:hidden hover:cursor-pointer material-symbols-outlined"  onClick={toggleMenu}>close</span>
                        )}
            <div className={`flex flex-col md:flex-row md:flex   items-center  py-5 ${menuOpen ? 'hidden ' : 'active '}`}>
                <ul className=" flex-1 flex flex-col md:flex-row md:gap-7 gap-8 justify-center md:justify-start items-center w-[400]">
                    <a href="#about" className="hover:underline  cursor-pointer text-base" >ABOUT</a>

                    <a href="#skills"  className="flex justify-center hover:underline  items-end cursor-pointer text-base">SERVICES</a>
                    <a href="#projects" className="hover:underline  cursor-pointer text-base">PROJECTS</a>
                </ul>
                <p className=" header hidden md:block  text-4xl px-5 ">WELCOME</p>
                <div className="w-[100px] flex-1 gap-8 md:gap-0 pt-8 md:p-0 flex flex-col md:flex-row md:justify-end justify-center items-center ">
                  
                  <div className="flex gap-2 justify-center items-center">
                  <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4C16 1.8 14.2 0 12 0H4C1.8 0 0 1.8 0 4V20C0 22.2 1.8 24 4 24H12C14.2 24 16 22.2 16 20V4ZM9 22H7C6.4 22 6 21.6 6 21C6 20.4 6.4 20 7 20H9C9.6 20 10 20.4 10 21C10 21.6 9.6 22 9 22ZM14 17C14 17.6 13.6 18 13 18H3C2.4 18 2 17.6 2 17V5C2 4.4 2.4 4 3 4H13C13.6 4 14 4.4 14 5V17Z" fill="#B31358"/>
                  </svg>
                  <p className=" text-sm sm:pl-2">+2519009090</p>
                  </div>

                </div>
                
            </div>
        </div>

        
        
        </>
      );
}
 
export default Navbar;
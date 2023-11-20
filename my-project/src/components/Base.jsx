
import project6 from '../img/project6.jpg'
import TypingText from './TypingText';




const Base = () => {
    return ( 
        <>
        <div className=" md:min-h-screen min-h-[600px] bg-[#d9d9d9] grid md:grid-cols-2 sm:mb-[80px]">
            <div className=" flex justify-center items-center px-[40px] md:px-0" >
                <p className=' tracking-wide leading-[70px] text-4xl sm:text-5xl font-extrabold max-w-[320px]'>HI, I'M BIRUK ZELEKE, A   <span className=' text-[#07485B]'><TypingText/></span></p>
            </div>
            <div className="  md:block hidden bg-cover bg-center" style={{backgroundImage: `url(${project6})`,}}>

            </div>


        </div>
        </>
     );
}
 
export default Base;
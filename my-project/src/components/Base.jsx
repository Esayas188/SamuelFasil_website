
import project6 from '../img/project6.jpg'
import TypingText from './TypingText';
import line from '../assets/line.svg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'; // Change this based on the social media icon you want



const Base = () => {
    return ( 
        <>
        <div className=" md:min-h-screen min-h-[600px] bg-[#b2b4b2] grid md:grid-cols-2 sm:mb-[80px]">
            <div className="grid grid-cols-5   md:px-0" >
                <div className='text-[#b2b4b2] flex flex-col justify-end pb-[60px] items-center bg-[#07264a] col-span-1' >
                    <p className='transform -rotate-90 text-xl font-bold '>Follow Me</p>
                    <div className='pt-[40px] sm:pt-[45px]'>
                    <img className=' ' src={line} alt="My SVG" />

                    </div>

                    <FontAwesomeIcon icon={faFacebook} className=' hover:cursor-pointer' size="2x" />
                    <FontAwesomeIcon icon={faInstagram} className='pt-[20px] hover:cursor-pointer' size="2x" />
                    <FontAwesomeIcon icon={faTwitter} className='pt-[20px] hover:cursor-pointer' size="2x" />

                </div>
                <div className=' flex sm:justify-center px-[40px] pt-[140px] sm:pt-[160px] md:pt-[160px] col-span-4'>
                <p className='text-[#07264a] tracking-normal md:leading-[70px] text-4xl sm:text-5xl font-extrabold max-w-[325px]'>HI, I'M SAMUEL FASIL, <span className=' text-[#b31358]'><TypingText/></span></p>


                </div>
            </div>
            <div className="  md:block hidden bg-cover bg-center" style={{backgroundImage: `url(${project6})`,}}>

            </div>


        </div>
        </>
     );
}
 
export default Base;
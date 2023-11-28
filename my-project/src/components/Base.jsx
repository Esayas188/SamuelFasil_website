
import project6 from '../img/project6.jpg'
import TypingText from './TypingText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'; // Change this based on the social media icon you want



const Base = () => {
    return ( 
        <>
        <div className=" md:min-h-screen min-h-[600px] bg-[#d9d9d9] grid md:grid-cols-2 sm:mb-[80px]">
            <div className="grid grid-cols-5   md:px-0" >
                <div className=' flex flex-col justify-end pb-[60px] items-center bg-[#07485B] col-span-1' >
                    <p className='transform -rotate-90 text-xl font-bold '>Follow Me</p>
                    <div className='pt-[40px] sm:pt-[45px]'>
                    <svg width="5" height="100" viewBox="0 0 5 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="5" height="100" fill="#0B0A0A"/>
                    </svg>
                    </div>

                    <FontAwesomeIcon icon={faFacebook} className=' hover:cursor-pointer' size="2x" />
                    <FontAwesomeIcon icon={faInstagram} className='pt-[20px] hover:cursor-pointer' size="2x" />
                    <FontAwesomeIcon icon={faTwitter} className='pt-[20px] hover:cursor-pointer' size="2x" />

                </div>
                <div className=' flex sm:justify-center px-[40px] pt-[140px] sm:pt-[160px] md:pt-[160px] col-span-4'>
                <p className=' tracking-normal md:leading-[70px] text-4xl sm:text-5xl font-extrabold max-w-[320px]'>HI, I'M BIRUK ZELEKE, A   <span className=' text-[#07485B]'><TypingText/></span></p>


                </div>
            </div>
            <div className="  md:block hidden bg-cover bg-center" style={{backgroundImage: `url(${project6})`,}}>

            </div>


        </div>
        </>
     );
}
 
export default Base;
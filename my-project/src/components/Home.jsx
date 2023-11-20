import project1 from '../img/project1.jpg'
import project2 from '../img/project2.jpg'
import project3 from '../img/project3.jpg'
import project4 from '../img/project4.jpg'



import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import '../App.css'
import Navbar from './Navbar';
import Base from './Base';
import About from './About';
import Footer from './Footer';
import Typewriter from './TypingText';
import Gallery from './Gallery';



const Home = () => {
    return ( 
        <>
        <Navbar/>
        <Base/>
        <div>
         

         <About/>

        </div>

        <div className=' pt-[20px] px-[40px] md:px-[60px]'>
          <p className=' text-center font-extrabold text-2xl sm:text-3xl text-[#07485B]'>PROJECTS</p>
          <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      speed={2000}
      easing="ease-in-out"
      navigation
      pagination={{ clickable: true }}
      className=' mb-[50px] px-[20px] py-[40px] sm:p-[80px]'

    >
      <SwiperSlide >
        <img className='min-h-[300px]  md:h-screen w-full' src={`${project1}`} alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className=' min-h-[300px]  md:h-screen w-full' src={`${project2}`} alt="Image 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='min-h-[300px]   md:h-screen w-full' src={`${project3}`} alt="Image 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='min-h-[300px]  md:h-screen w-full' src={`${project4}`} alt="Image 4" />
      </SwiperSlide>
    </Swiper>

        </div>
        <div>
        <p className=' text-center font-extrabold text-2xl sm:text-3xl text-[#07485B]'>INTERIOR DESIGNS</p>
        </div>
        <Gallery/>
        <Footer/>


        </>
     );
}
 
export default Home;
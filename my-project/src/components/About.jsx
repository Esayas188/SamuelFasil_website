import photo from '../img/photo.jpg'
import photo1 from '../img/photo1.jpg'


import project6 from '../img/project6.jpg'
const About = () => {
    return ( 
        <div className=" min-h-screen w-full pt-[60px] md:px-[100px] lg:px-[120px] bg-[#d9d9d9] md:grid md:grid-cols-2 ">
            <div className="p-[60px] md:px-0  md:inline flex flex-col justify-center items-center" >
                <p className='text-[#07485B] text-3xl pb-2'>BIRUK ZELEKE</p>
                <p className='sm:max-w-[500px] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of 
                unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
            </div>
            <div className="  md:flex justify-center  hidden md:visible" >
                <img src={`${photo1}`} alt="photo" className=' h-[460px] pb-[52px]   '/>
                

            </div>




        </div>
     );
}
 
export default About;
import photo from '../img/photo.jpg'
import photo1 from '../img/photo1.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from 'framer-motion';
const leftvariants = {
    hidden:{
        x:'-100vh'

    },
    visible:{
        x:0,
        transition:{duration:3, type: "spring"}
    }
}
const rightvariants = {
    hidden:{
        x:'100vh'

    },
    visible:{
        x:0,
        transition:{duration:3, type: "spring"}
    }
}
const About = () => {
    return ( 
        <motion.div
        initial='hidden'
        whileInView='visible'

         id='about' className=" overflow-x-hidden md:min-h-[500px] py-[30px] md:py-[80px]  md:px-[100px] lg:px-[120px] bg-[#b2b4b2] md:justify-center md:items-center md:grid md:grid-cols-2 " style={{ maxWidth: '1800px', margin: '0 auto' }}>
            <motion.div 
            variants={leftvariants}


             className="px-[60px] md:px-0  md:inline flex flex-col justify-center items-center" >
                <p className='text-[#07264a] text-3xl pb-2 font-bold'>SAMUEL FASIL</p>
                <p className='text-[#07264a] sm:max-w-[500px] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.</p>
            </motion.div>
            <motion.div 
            variants={rightvariants}

            className="  md:flex justify-center  hidden md:visible" >
                <img src={`${photo1}`}
                alt="Image Alt"
                className=' md:h-[460px] pb-[52px]'
            />

            </motion.div>




        </motion.div>
     );
}
 
export default About;
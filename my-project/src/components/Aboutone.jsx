import { motion } from 'framer-motion';
import photo1 from '../img/photo1.jpg'

const Aboutone = () => {
    const variant={
        closed: {
          opacity: "var(--opacity-from)",
          x: "var(--x-from, 0px)",
        },
        open: {
          opacity: "var(--opacity-to)",
          x: "var(--x-to, 0px)",
          transition:{duration:2, type: "spring"}

        },
      }
    return (
        <div className='min-h-screen overflow-x-hidden '>
            <motion.div
            
            initial="closed"
            whileInView="open"

            className='
            md:min-h-[500px] w-full py-[30px] md:py-[80px]  md:px-[100px] lg:px-[120px] bg-[#b2b4b2] md:justify-center md:items-center md:grid md:grid-cols-2
            [--x-from:100vh] sm:[--scale-from:80%] [--opacity-from:0%]
            [--x-to:0px] sm:[--scale-to:100%] [--opacity-to:100%]'>

        <motion.div 
        variants={variant}
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
        variants={variant}
            className="  md:flex justify-center  hidden md:visible" >

                <img src={`${photo1}`}
                alt="Image Alt"
                className=' md:h-[460px] px-[50px] sm:mx-0 pb-[52px]'
            />

            </motion.div>

                
            </motion.div>

        </div>

      );
}
 
export default Aboutone;
import apartment from '../assets/apartment.svg';
import furniture from '../assets/furniture.svg';
import Layer from '../assets/Layer.svg';
import { motion } from 'framer-motion';

const leftvariants = {
    hidden:{
        x:'-100vh'

    },
    visible:{
        x:0,
        transition:{duration:2, type: "spring"}
    }
}
const rightvariants = {
    closed:{
        x:'100vh'

    },
    open:{
        x:0,
        transition:{duration:2, type: "spring"}
    }
}
const variant={
    closed: {
      opacity: "var(--opacity-from)",
      x: "var(--x-from, 0px)",
    },
    open: {
      opacity: "var(--opacity-to)",
      x: "var(--x-to, 0px)",
      transition:{duration:3, type: "spring"}

    },
  }


const Services = () => {
    return ( 


        <div

         className='min-h-[700px] py-[60px] overflow-x-hidden
        [--x-from:-100vh] sm:[--scale-from:80%] [--opacity-from:0%]
        [--x-to:0px] sm:[--scale-to:100%] [--opacity-to:100%] 
        ' id='skills ' style={{ maxWidth: '1800px', margin: '0 auto' }}>
            <p className=' text-2xl font-bold text-[#07264a] text-center pb-8 md:pb-0'>SERVICES</p>
            <motion.div
            
            initial="closed"
            whileInView="open"
             className="grid md:grid-cols-2 gap-[20px] md:gap-0 px-[60px] lg:px-[100px] text-[#07264a] min-h-[600px]  ">

            <motion.div

             className='flex flex-col gap-[40px] justify-center '>
            <motion.div
            variants={{
                closed: {
                  opacity: "var(--opacity-from)",
                  x: "var(--x-from, 0px)",
                },
                open: {
                  opacity: "var(--opacity-to)",
                  x: "var(--x-to, 0px)",
                  transition:{duration:3, type: "spring"}
            
                },
              }}


             className='flex justify-center items-center'>

                <img src={apartment} alt="My SVG" />
                <div className=' px-[20px] flex flex-col justify-center '>
                    <p className=' text-xl font-bold text-[#07264a]'>ARCHITECTURE</p>
                    <p className=' text-justify'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                </div>
            </motion.div>

            <motion.div 
            variants={variant}



            className='flex justify-center items-center'>
                <img className='w-[120px]' src={furniture} alt="My SVG" />
                <div className=' px-[20px] flex flex-col justify-center '>
                    <p className=' text-xl font-bold text-[#07264a] w-[150px]'>INTERIOR DESIGN</p>
                    <p className=' text-justify'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                </div>

            </motion.div>

            <motion.div
            variants={variant}


             className='flex justify-center items-center'>
                <img src={Layer} alt="My SVG" />
                <div className=' px-[20px] flex flex-col justify-center '>
                    <p className=' text-xl font-bold text-[#07264a] w-[150px]'>LIGHTING DESIGN</p>
                    <p className=' text-justify'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                </div>
            </motion.div>

            </motion.div>

            <motion.div 

             >

            <motion.div 
            variants={rightvariants}


            className="flex flex-col items-center justify-center min-h-full " style={{ maxWidth: '1800px', margin: '0 auto' }}>
            <div className=" w-full max-w-md bg-[#07264a] text-[#b2b4b2] rounded-lg  p-6">
                <h2 className="text-2xl font-bold  mb-4">Contact Me</h2>

                <form className="flex flex-wrap">
                <input
                    type="text"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-[48%] mr-[2%]"
                    placeholder="Full Name"
                />
                <input
                    type="email"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-[48%] ml-[2%]"
                    placeholder="Email"
                />
                <input
                    type="number"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-[48%] mr-[2%]"
                    placeholder="Phone Number"
                />
                <input
                    type="text"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-[48%] ml-[2%]"
                    placeholder="Company Name"
                />
                <input
                    type="text"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-[48%] mr-[2%]"
                    placeholder="Job Title"
                />
                <input
                    type="date"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-[48%] ml-[2%]"
                    placeholder="Date of Birth"
                />
                <textarea
                    name="message"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto  md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                    placeholder="Message"
                ></textarea>

                <button
                    type="submit"
                    className="bg-gradient-to-r from-[rgba(179,19,88,0.6)] to-[rgba(179,19,88,0.8)]  font-bold py-2 px-4 rounded-md mt-4  transition ease-in-out duration-150"
                >
                    Submit
                </button>
                </form>
            </div>
            </motion.div>

         

            </motion.div>

       




            </motion.div>
        </div>





     );
}
 
export default Services;
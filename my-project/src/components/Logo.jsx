import { delay, motion } from "framer-motion";





const Logo = () => {
    const svgVariants = {
        hidden:{
            rotate:-180
        },
        visible:{
            rotate:0,
            transition:{duration:1}
        }
    
    }
    const textvariants = {
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,
            transition:{duration:2, delay:1}
        }
    }
    const pathvariants = {
        hidden:{
            opacity:0,
            pathLength:0,
        },
        visible:{
            opacity:1,
            pathLength:1,
            transition:{duration:2, ease: "easeInOut"}
        }
    }

    return ( 
        <div className="md:px-[60px]  p-[40px]" style={{ maxWidth: '1800px', margin: '0 auto' }}>
            <div className="flex justify-center items-center bg-[#121212]  min-h-[200px]" >
            <motion.svg variants={svgVariants}
            initial='hidden'
            whileInView='visible'
            width="200" height="112" viewBox="0 0 200 112" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path variants={pathvariants} d="M71.6724 66.4851H120.644" stroke="#ED0000" strokeWidth="4"/>
            <motion.path variants={pathvariants} d="M71.6722 3.17627H120.644" stroke="#ED0000" strokeWidth="4"/>
            <motion.path variants={pathvariants} d="M71.6724 32.9058H100.375" stroke="#ED0000" strokeWidth="4"/>
            <motion.path variants={pathvariants} d="M154.194 41.9423H172.322V50.9253L168.545 57.4487L161.433 63.4908L154.446 66.5387H139.591L132.478 63.4908L125.554 57.4487L121.525 51.0857L118 41.9423V26.4359L121.525 17.239L125.176 11.09L132.352 4.99434L139.15 2H154.509L161.433 4.99434L168.608 11.09L172.322 17.239" stroke="white" strokeWidth="4"/>
            <motion.path variants={pathvariants} d="M12 67.2337V3.17632H12.5036L62.1675 66.4852H62.6711V2.42773" stroke="white" strokeWidth="4"/>
            <motion.path  variants={pathvariants} d="M8.05824 87.2727V96H6.46449L2.66761 90.5071H2.60369V96H0.758523V87.2727H2.37784L6.14489 92.7614H6.22159V87.2727H8.05824ZM11.087 96H9.10973L12.1225 87.2727H14.5004L17.5089 96H15.5316L13.3455 89.267H13.2773L11.087 96ZM10.9634 92.5696H15.6339V94.0099H10.9634V92.5696ZM18.5593 96V87.2727H24.3377V88.794H20.4045V90.8736H23.9542V92.3949H20.4045V96H18.5593ZM25.2464 88.794V87.2727H32.4141V88.794H29.7422V96H27.9183V88.794H25.2464ZM34.0323 96H32.055L35.0678 87.2727H37.4457L40.4542 96H38.4769L36.2908 89.267H36.2227L34.0323 96ZM33.9087 92.5696H38.5792V94.0099H33.9087V92.5696ZM41.5046 96V87.2727H43.3498V94.4787H47.0913V96H41.5046ZM48.3132 96V87.2727H54.1939V88.794H50.1584V90.8736H53.8913V92.3949H50.1584V94.4787H54.2109V96H48.3132ZM55.6609 87.2727H57.9364L60.3398 93.1364H60.4421L62.8455 87.2727H65.1211V96H63.3313V90.3196H63.2589L61.0004 95.9574H59.7816L57.5231 90.2983H57.4506V96H55.6609V87.2727ZM159.358 90.0938C159.298 89.8864 159.214 89.7031 159.107 89.544C158.999 89.3821 158.866 89.2457 158.71 89.1349C158.557 89.0213 158.381 88.9347 158.182 88.875C157.986 88.8153 157.768 88.7855 157.53 88.7855C157.084 88.7855 156.692 88.8963 156.354 89.1179C156.018 89.3395 155.757 89.6619 155.57 90.0852C155.382 90.5057 155.288 91.0199 155.288 91.6278C155.288 92.2358 155.381 92.7528 155.565 93.179C155.75 93.6051 156.011 93.9304 156.349 94.1548C156.688 94.3764 157.087 94.4872 157.547 94.4872C157.964 94.4872 158.321 94.4134 158.616 94.2656C158.915 94.1151 159.142 93.9034 159.298 93.6307C159.457 93.358 159.537 93.0355 159.537 92.6634L159.912 92.7188H157.662V91.3295H161.314V92.429C161.314 93.196 161.152 93.8551 160.828 94.4062C160.504 94.9545 160.058 95.3778 159.49 95.6761C158.922 95.9716 158.271 96.1193 157.538 96.1193C156.72 96.1193 156.001 95.9389 155.382 95.5781C154.763 95.2145 154.28 94.6989 153.933 94.0312C153.589 93.3608 153.418 92.5653 153.418 91.6449C153.418 90.9375 153.52 90.3068 153.724 89.7528C153.932 89.196 154.222 88.7244 154.594 88.3381C154.966 87.9517 155.399 87.6577 155.893 87.456C156.388 87.2543 156.923 87.1534 157.5 87.1534C157.994 87.1534 158.455 87.2259 158.881 87.3707C159.307 87.5128 159.685 87.7145 160.014 87.9759C160.347 88.2372 160.618 88.5483 160.828 88.9091C161.038 89.267 161.173 89.6619 161.233 90.0938H159.358ZM162.7 96V87.2727H166.143C166.802 87.2727 167.365 87.3906 167.831 87.6264C168.299 87.8594 168.656 88.1903 168.9 88.6193C169.147 89.0455 169.271 89.5469 169.271 90.1236C169.271 90.7031 169.146 91.2017 168.896 91.6193C168.646 92.0341 168.284 92.3523 167.809 92.5739C167.338 92.7955 166.767 92.9062 166.096 92.9062H163.791V91.4233H165.798C166.15 91.4233 166.443 91.375 166.676 91.2784C166.909 91.1818 167.082 91.0369 167.196 90.8438C167.312 90.6506 167.37 90.4105 167.37 90.1236C167.37 89.8338 167.312 89.5895 167.196 89.3906C167.082 89.1918 166.907 89.0412 166.672 88.9389C166.439 88.8338 166.145 88.7812 165.789 88.7812H164.545V96H162.7ZM167.413 92.0284L169.582 96H167.545L165.423 92.0284H167.413ZM178.595 91.6364C178.595 92.5881 178.414 93.3977 178.054 94.0653C177.696 94.733 177.207 95.2429 176.588 95.5952C175.971 95.9446 175.278 96.1193 174.508 96.1193C173.733 96.1193 173.037 95.9432 172.42 95.5909C171.804 95.2386 171.316 94.7287 170.958 94.0611C170.6 93.3935 170.422 92.5852 170.422 91.6364C170.422 90.6847 170.6 89.875 170.958 89.2074C171.316 88.5398 171.804 88.0312 172.42 87.6818C173.037 87.3295 173.733 87.1534 174.508 87.1534C175.278 87.1534 175.971 87.3295 176.588 87.6818C177.207 88.0312 177.696 88.5398 178.054 89.2074C178.414 89.875 178.595 90.6847 178.595 91.6364ZM176.724 91.6364C176.724 91.0199 176.632 90.5 176.447 90.0767C176.265 89.6534 176.008 89.3324 175.676 89.1136C175.343 88.8949 174.954 88.7855 174.508 88.7855C174.062 88.7855 173.673 88.8949 173.341 89.1136C173.008 89.3324 172.75 89.6534 172.565 90.0767C172.383 90.5 172.292 91.0199 172.292 91.6364C172.292 92.2528 172.383 92.7727 172.565 93.196C172.75 93.6193 173.008 93.9403 173.341 94.1591C173.673 94.3778 174.062 94.4872 174.508 94.4872C174.954 94.4872 175.343 94.3778 175.676 94.1591C176.008 93.9403 176.265 93.6193 176.447 93.196C176.632 92.7727 176.724 92.2528 176.724 91.6364ZM185.352 87.2727H187.197V92.9403C187.197 93.5767 187.045 94.1335 186.741 94.6108C186.44 95.0881 186.018 95.4602 185.476 95.7273C184.933 95.9915 184.301 96.1236 183.58 96.1236C182.855 96.1236 182.222 95.9915 181.679 95.7273C181.136 95.4602 180.714 95.0881 180.413 94.6108C180.112 94.1335 179.962 93.5767 179.962 92.9403V87.2727H181.807V92.7827C181.807 93.1151 181.879 93.4105 182.024 93.669C182.172 93.9276 182.379 94.1307 182.646 94.2784C182.913 94.4261 183.224 94.5 183.58 94.5C183.938 94.5 184.249 94.4261 184.513 94.2784C184.78 94.1307 184.986 93.9276 185.131 93.669C185.278 93.4105 185.352 93.1151 185.352 92.7827V87.2727ZM188.716 96V87.2727H192.159C192.821 87.2727 193.385 87.3991 193.85 87.652C194.316 87.902 194.672 88.25 194.916 88.696C195.163 89.1392 195.287 89.6506 195.287 90.2301C195.287 90.8097 195.162 91.321 194.912 91.7642C194.662 92.2074 194.299 92.5526 193.825 92.7997C193.353 93.0469 192.782 93.1705 192.112 93.1705H189.917V91.6918H191.814C192.169 91.6918 192.461 91.6307 192.691 91.5085C192.924 91.3835 193.098 91.2116 193.211 90.9929C193.328 90.7713 193.386 90.517 193.386 90.2301C193.386 89.9403 193.328 89.6875 193.211 89.4716C193.098 89.2528 192.924 89.0838 192.691 88.9645C192.458 88.8423 192.163 88.7812 191.805 88.7812H190.561V96H188.716Z" fill="white"/>
            <motion.path variants={textvariants} d="M69.4187 96V87.2727H75.2994V88.794H71.2638V90.8736H74.9968V92.3949H71.2638V94.4787H75.3164V96H69.4187ZM84.0661 87.2727V96H82.4723L78.6754 90.5071H78.6115V96H76.7663V87.2727H78.3857L82.1527 92.7614H82.2294V87.2727H84.0661ZM91.3775 90.0938C91.3178 89.8864 91.234 89.7031 91.1261 89.544C91.0181 89.3821 90.886 89.2457 90.7298 89.1349C90.5763 89.0213 90.4002 88.9347 90.2013 88.875C90.0053 88.8153 89.788 88.7855 89.5494 88.7855C89.1033 88.7855 88.7113 88.8963 88.3732 89.1179C88.038 89.3395 87.7766 89.6619 87.5891 90.0852C87.4016 90.5057 87.3079 91.0199 87.3079 91.6278C87.3079 92.2358 87.4002 92.7528 87.5849 93.179C87.7695 93.6051 88.0309 93.9304 88.369 94.1548C88.707 94.3764 89.1062 94.4872 89.5664 94.4872C89.984 94.4872 90.3406 94.4134 90.636 94.2656C90.9343 94.1151 91.1616 93.9034 91.3178 93.6307C91.4769 93.358 91.5565 93.0355 91.5565 92.6634L91.9315 92.7188H89.6815V91.3295H93.3335V92.429C93.3335 93.196 93.1715 93.8551 92.8477 94.4062C92.5238 94.9545 92.0778 95.3778 91.5096 95.6761C90.9414 95.9716 90.2908 96.1193 89.5579 96.1193C88.7397 96.1193 88.021 95.9389 87.4016 95.5781C86.7823 95.2145 86.2994 94.6989 85.9528 94.0312C85.609 93.3608 85.4371 92.5653 85.4371 91.6449C85.4371 90.9375 85.5394 90.3068 85.744 89.7528C85.9513 89.196 86.2411 88.7244 86.6133 88.3381C86.9854 87.9517 87.4187 87.6577 87.913 87.456C88.4073 87.2543 88.9428 87.1534 89.5195 87.1534C90.0138 87.1534 90.4741 87.2259 90.9002 87.3707C91.3263 87.5128 91.7042 87.7145 92.0337 87.9759C92.3661 88.2372 92.6374 88.5483 92.8477 88.9091C93.0579 89.267 93.1928 89.6619 93.2525 90.0938H91.3775ZM96.5646 87.2727V96H94.7195V87.2727H96.5646ZM105.382 87.2727V96H103.789L99.9918 90.5071H99.9279V96H98.0827V87.2727H99.7021L103.469 92.7614H103.546V87.2727H105.382ZM106.907 96V87.2727H112.788V88.794H108.752V90.8736H112.485V92.3949H108.752V94.4787H112.805V96H106.907ZM114.255 96V87.2727H120.135V88.794H116.1V90.8736H119.833V92.3949H116.1V94.4787H120.152V96H114.255ZM121.602 96V87.2727H125.045C125.705 87.2727 126.267 87.3906 126.733 87.6264C127.202 87.8594 127.558 88.1903 127.803 88.6193C128.05 89.0455 128.173 89.5469 128.173 90.1236C128.173 90.7031 128.048 91.2017 127.798 91.6193C127.548 92.0341 127.186 92.3523 126.712 92.5739C126.24 92.7955 125.669 92.9062 124.999 92.9062H122.693V91.4233H124.7C125.053 91.4233 125.345 91.375 125.578 91.2784C125.811 91.1818 125.984 91.0369 126.098 90.8438C126.214 90.6506 126.273 90.4105 126.273 90.1236C126.273 89.8338 126.214 89.5895 126.098 89.3906C125.984 89.1918 125.81 89.0412 125.574 88.9389C125.341 88.8338 125.047 88.7812 124.692 88.7812H123.447V96H121.602ZM126.315 92.0284L128.484 96H126.447L124.325 92.0284H126.315ZM131.322 87.2727V96H129.477V87.2727H131.322ZM140.14 87.2727V96H138.547L134.75 90.5071H134.686V96H132.841V87.2727H134.46L138.227 92.7614H138.304V87.2727H140.14ZM147.452 90.0938C147.392 89.8864 147.308 89.7031 147.2 89.544C147.092 89.3821 146.96 89.2457 146.804 89.1349C146.651 89.0213 146.474 88.9347 146.276 88.875C146.08 88.8153 145.862 88.7855 145.624 88.7855C145.178 88.7855 144.786 88.8963 144.447 89.1179C144.112 89.3395 143.851 89.6619 143.663 90.0852C143.476 90.5057 143.382 91.0199 143.382 91.6278C143.382 92.2358 143.474 92.7528 143.659 93.179C143.844 93.6051 144.105 93.9304 144.443 94.1548C144.781 94.3764 145.18 94.4872 145.641 94.4872C146.058 94.4872 146.415 94.4134 146.71 94.2656C147.009 94.1151 147.236 93.9034 147.392 93.6307C147.551 93.358 147.631 93.0355 147.631 92.6634L148.006 92.7188H145.756V91.3295H149.408V92.429C149.408 93.196 149.246 93.8551 148.922 94.4062C148.598 94.9545 148.152 95.3778 147.584 95.6761C147.016 95.9716 146.365 96.1193 145.632 96.1193C144.814 96.1193 144.095 95.9389 143.476 95.5781C142.857 95.2145 142.374 94.6989 142.027 94.0312C141.683 93.3608 141.511 92.5653 141.511 91.6449C141.511 90.9375 141.614 90.3068 141.818 89.7528C142.026 89.196 142.315 88.7244 142.688 88.3381C143.06 87.9517 143.493 87.6577 143.987 87.456C144.482 87.2543 145.017 87.1534 145.594 87.1534C146.088 87.1534 146.548 87.2259 146.974 87.3707C147.401 87.5128 147.778 87.7145 148.108 87.9759C148.44 88.2372 148.712 88.5483 148.922 88.9091C149.132 89.267 149.267 89.6619 149.327 90.0938H147.452Z" fill="#ED0000"/>
            </motion.svg>


            </div>

        </div>


     );
}
 
export default Logo;
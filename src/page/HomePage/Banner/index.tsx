import React from 'react'
import myImage from 'assets/myImage2.webp'
import { useOnScreen } from 'utilities/UseOnScreen'


export const Banner = () => {
 
   
    const ref = React.useRef<HTMLDivElement>(null)
    const currentView = useOnScreen(ref)

    
    return (
        <div ref={ref} className='h-fit items-center relative flex' id='aboutme'    
        >
            <div className={' relative  sm:min-h-screen  w-full overflow-hidden  items-center   drop-shadow-md flex flex-col sm:flex-row  sm:items-end  lg:items-center '} 
            >          
                <div className='transition-all duration-1000 flex  sm:absolute mt-[20vh] sm:mt-0 w-screen h-full'>
                    <div className=' rounded-full sm:rounded-none overflow-hidden sm:overflow-visible  h-[30vh] w-[30vh] sm:w-full  mx-auto sm:mx-0 transition-all duration-1000 relative sm:left-0 lg:left-[40%] sm:bottom-[50%] md:bottom-[40%] lg:bottom-[30%]'>
                        <img src={myImage} className={' sm:w-[70%%] object-contain sm:h-[220vh]'}/>
                    </div>
                </div>

                <div className={`z-[999] w-screen my-5 lg:w-[60vw] px-[20px] md:px-[70px] bg-white/70 md:mx-10 p-10 rounded-lg lg:bg-transparent transition-opacity duration-500 ${currentView ? 'opacity-100' : 'opacity-0'} `}>
                    <div className='hidden md:block'> 
                        <h1 className='text-2xl md:text-3xl font-medium'> Hello I&apos;m</h1>
                    </div>
                    <div className='font-extrabold text-2xl  flex justify-center md:block   md:text-7xl filter bg-gradient-to-t from-purple-900 to-blue-900  bg-clip-text text-transparent'> 
                        <h1 className=''> Jacob Allen Valderama</h1>
                    </div>
                   
                    <div className='mt-5'>
                        <h1 className='text-xl font-medium md:text-3xl text-[#393E46] tracking-wider '>
                      Front-end Developer 
                        </h1>
                        <div className='text-lg text-justify '>
                            <p>A fresh graduate student that aspires to be a skilled web developer , capable of creating user-friendly online apps, knowledgable in Java, JavaScript, TypeScript, and informed about
popular frameworks such as React TS and JS. outstanding debugging and issue-solving
abilities, a keen eye for detail, and a passion for producing high-caliber code.
                            </p>
                        </div>
                    </div>
                </div>


             

            </div>
        </div>
    )
}

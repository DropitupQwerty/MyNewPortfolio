import React from 'react'
import myImage from 'assets/myImage3.webp'
import { useOnScreen } from 'utilities/UseOnScreen'
import { twMerge } from 'tailwind-merge'
import { BiCurrentLocation } from 'react-icons/bi'
import { AppContactIcons } from 'components/AppContactIcons'


export const Banner = () => {
 
   
    const ref = React.useRef<HTMLDivElement>(null)
    const currentView = useOnScreen(ref)

    
    return (
        <div ref={ref} className='h-fit items-center relative flex' id='aboutme'    
        >
            <div className={' relative   w-full sm:h-screen  items-center   flex flex-col sm:flex-row  sm:items-end  lg:items-center '} 
            >          
                <div className='transition-all  duration-200 flex   sm:absolute mt-20 :mt-0  w-screen h-full'>
                    <div className=' rounded-full sm:rounded-none overflow-hidden sm:overflow-visible bottom-[20%]  h-[30vh] w-[30vh] sm:w-full  mx-auto sm:mx-0 transition-all duration-200 relative flex justify-center  items-start md:justify-center lg:justify-end lg:left-[10%]'>
                 
                        <img src={myImage} className={twMerge('rounded-full md:w-[70%]  object-contain lg:h-[220vh]  transition-all duration-[200ms]' , currentView ? 'opacity-100' : 'opacity-0')}/>
                    </div>
                </div>

                <div className={`z-[999]  w-screen my-5 lg:w-[60vw] px-[20px] md:px-[70px] bg-white/70 backdrop-blur-md md:mx-10 p-10 rounded-lg lg:bg-transparent transition-opacity duration-1000 ${currentView ? 'opacity-100' : 'opacity-0'} `}>
                    <div className='hidden md:block'> 
                        <h1 className='text-2xl md:text-3xl font-medium'> Hello I&apos;m</h1>
                    </div>
                    <div className='font-extrabold text-2xl  flex justify-center md:block   md:text-6xl '> 
                        <h1 className='xl:whitespace-nowrap'> Jacob Allen Valderama</h1>
                    </div>   
                    <div className='flex mt-1 flex-col md:flex-row items-center'>
                        <p className='flex items-center gap-2 justify-center md:justify-normal'><BiCurrentLocation/> San Rafael , Bulacan , Philippines</p>
                        <AppContactIcons/>  
                    </div>
                
                </div>

    
            </div>
       

        </div>
    )
}

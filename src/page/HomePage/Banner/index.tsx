import React from 'react'
import myImage from 'assets/myImage2.webp'


export const Banner = () => {
    
    return (
        <div className='h-fit items-center relative flex' id='aboutme'    
        >
            <div className={' relative min-h-[100vh] w-full overflow-hidden   drop-shadow-md flex  items-end  lg:items-center '} 
            >          
                <div className='absolute  flex justify-end w-full'>
                    <img src={myImage} className='object-cover  relative md:top-[30vh] lg:top-[40vh] w-auto lg:max-h-[220vh] lg:left-[20vw] xl:left-[10vw]    ease-linear duration-150 transition-all'/>
                </div>
                <div className=' z-20  tracking-wider md:mx-[70px]  bg-white/70 lg:bg-transparent  rounded-lg py-7 px-5 m-5 md:px-5 '>
                    <div className=''>
                        <h1 className='font-Sharetechmo font-bold w-fit text-[30px] lg:text-[50px] leading-none'><span className='text-[#393E46]'>Hello I&apos;m </span> </h1>
                        <div  className='text-[40px] lg:text-[90px]'>
                            <h1 className='font-extrabold filter drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-b from-purple-900 to-blue-700 leading-none '>Jacob Allen</h1>
                            <h1 className="font-extrabold filter drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-b from-purple-900 to-blue-700  leading-none "> Valderama</h1>
                        </div>
                    </div>
                    <div className=''>
                        <div className='md:w-full lg:w-[45vw] mt-3 lg:mt-6  md:mx-0 rounded-lg '>
                            <h1 className='font-bold leading-none text-[30px] lg:text-[50px] font-Sharetechmo  text-[#393E46] tracking-wider '>
                      Front-end Developer 
                            </h1>
                            <div className='text-[16px] lg:[25px] text-justify '>
                                <p>A web developer skilled in front-end development, capable of creating user-friendly online apps, knowledgable in Java, JavaScript, TypeScript, and informed about
popular frameworks such as React TS and JS. outstanding debugging and issue-solving
abilities, a keen eye for detail, and a passion for producing high-caliber code.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

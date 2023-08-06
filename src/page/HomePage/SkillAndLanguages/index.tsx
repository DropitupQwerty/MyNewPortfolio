
import React from 'react'
import { useOnScreen } from 'utilities/UseOnScreen'
import { twMerge } from 'tailwind-merge'
import { ProgrammingLanguages } from 'utilities/programmingLanguages'


export const SkillsAndLanguages = () => {
   
    const ref = React.useRef<HTMLDivElement>(null)
    const currentView = useOnScreen(ref)
    return (
        <div   className='relative flex flex-col justify-center   overflow-hidden min-h-screen items-center '  >
            <div className='px-[30px] md:px-[125px]  py-[50px] w-full font-Montserrat  '  id="skills"  >
                <div className='flex flex-row-reverse justify-between gap-10 items-center my-14'  >
                    <span className={twMerge('w-[80%] h-[1px] bg-[#393E46] transition-all duration-[1400ms] hidden md:block' , currentView  ? '' : 'w-0')}></span>
                    <div  className={twMerge(' leading-1 md:text-start transition-all duration-[1400ms] md:w-[40vw] text-justify' , currentView ? 'translate-x-0 opacity-100'  : 'translate-x-full opacity-0'  )} >
                        <p className={'mt-2 text-[#393E46] '} >I build with these</p>
                        <h1 className='text-[20px]  text-transparent bg-gradient-to-t from-purple-900 to-blue-900 font-extrabold lowercase   bg-clip-text drop-shadow-lg tracking-[6px]'>
                        Programming Languages , Frameworks and Devtools.
                        </h1>
                    </div>
                </div>
                <div  className='flex flex-col-reverse gap-10 lg:flex-row h-fit items-center justify-center' >
                    <div ref={ref} className='w-full place-items-center  grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 text-[#393E46] '>
                        {ProgrammingLanguages.map((language , index)=>
                        {
                            return <a href={language.link} target='_blank' key={index}  className={twMerge('hover:scale-105 overflow-hidden w-fit relative shadow-md hover:shadow-purple-900 duration-100 bg-white  rounded-full ' )} rel="noreferrer">
                                <div className={twMerge('p-5 flex  items-center flex-col xl:flex-row overflow-hidden   transition-all ease-in-out',currentView ? 'opacity-100 scale-100' : 'opacity-0 scale-0' )} style={{transitionDuration : `${(index*200) + 1000}ms` }}>
                                    <div style={{color:language.color}} className='text-[50px] md:text-[30px]'>
                                        {language.icon}
                                    </div>
                                    {/* <div className='lowercase text-sm mt-2 font-medium  md:block tracking-wide'>{language.name}</div> */}
                                </div>
                            </a>
                        }
                        )}
                    </div>  
                    <div className='backdrop-blur-md p-4 shadow-lg '>As a aspiring front end developer I use to work with some of these tools and programming languages in creating website&apos;s <span className='text-blue-700'>React,HTML, CSS</span></div>
                </div>
            </div>
        </div>

    )
}

// import { AboutMe } from 'page/HomePage/AboutMe'
import React from 'react'
import {  BiLogoCss3, BiLogoFirebase, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoTypescript, BiLogoUnity, BiLogoVisualStudio } from 'react-icons/bi'
import { SiAdobeillustrator, SiAdobephotoshop, SiMysql } from 'react-icons/si'


export const SkillsAndLanguages = () => {

    const ProgrammingLanguages = [

        
        {
            icon: <BiLogoJavascript />,
            name:'Javascript',
            color:'#EFD81D'
        },
        {
            icon: <BiLogoTypescript />,
            name:'Typescript',
            color:'#3178C6'
        },
        {
            icon: <BiLogoHtml5 />,
            name:'Html',
            color:'#E54C21'
        },
        {
            icon: <BiLogoCss3 />,
            name:'CSS',
            color:'#33A1D5'
        },
        {
            icon: <BiLogoJava />,
            name:'Java',
            color:'#5382A1'
        },
        {
            icon: <BiLogoReact />,
            name:'React',
            color:'#06bcee'
        },
        {
            icon: <BiLogoSpringBoot />,
            name:'Springboot',
            color:'#6CB52D'
        },
        
        {
            icon: <BiLogoTailwindCss />,
            name:'Tailwind',
            color:'#38bdf8'
        },
        {
            icon: <BiLogoVisualStudio />,
            name:'VS code',
            color:'#3BA4EA'
        },
        {
            icon: <BiLogoUnity />,
            name:'Unity',
            color:'#202124'
        },
        {
            icon: <BiLogoFirebase/>,
            name:'Firebase',
            color:'#FFCD32'
        },
        {
            icon: <SiAdobephotoshop/>,
            name:'Adobe Photoshop',
            color:'#001D34'
        },
        {
            icon: <SiAdobeillustrator className=''/>,
            name:'Adobe Illustrator',
            color:'#320000'
        },
        {
            icon: <BiLogoNodejs className=''/>,
            name:'NodeJs',
            color:'#6CB52D'
        },
        {
            icon: <SiMysql className=''/>,
            name:'MySql',
            color:'#5382A1'
        },

    ]



    return (
        <div className='relative flex flex-col justify-center    items-center bg-[#f5f5f5]' >
            <div className='px-[30px] md:px-[100px]  py-[50px] w-full font-Montserrat  min-h-screen '  id="skills"  >
                <div className='flex justify-between gap-10 items-center my-14'>
                    <span className='w-[80%] h-[1px] bg-[#393E46]  hidden md:block'></span>
                    <div className='text-center md:text-start '>
                        <h1 className='text-[20px] text-transparent bg-gradient-to-t from-purple-900 to-blue-900 font-extrabold lowercase   bg-clip-text drop-shadow-lg tracking-[6px]'>
                        Programming Languages , Frameworks and Devtools.
                        </h1>
                        <p className='mt-2 text-[#393E46]' >I build websites with these programming languages , frameworks , dev tools and designing tools.</p>
                    </div>
                </div>
                <div className='flex xl:px-[100px] items-center'>
                    <div className='w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 text-[#393E46]  justify-center '>
                        {ProgrammingLanguages.map((language , index)=>
                            <div key={index}  className='hover:scale-105 shadow-md hover:shadow-purple-900
                             bg-white duration-100  ease-linear  rounded-lg '>
                                <div className='p-5 flex  items-center flex-col xl:flex-row overflow-hidden  w-full'>
                                    <div style={{color:language.color}} className='text-[50px] md:text-[70px] mx-2 '>
                                        {language.icon}
                                    </div>
                                    <div className='capitalize text-sm mt-2 font-medium  md:block '>{language.name}</div>
                                </div>
                            </div>
                        )}
                    </div>  
                </div>
            </div>
        </div>

    )
}

import React from 'react'
// import { BsBrush } from 'react-icons/bs'
// import { BsDot } from 'react-icons/bs'
import {  BiLogoFirebase, BiLogoJava, BiLogoJavascript, BiLogoReact, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoTypescript, BiLogoUnity, BiLogoVisualStudio } from 'react-icons/bi'
import { SiAdobephotoshop } from 'react-icons/si'

// import { GoTools } from 'react-icons/go'
// import {MdComputer} from 'react-icons/md'

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

    ]



    return (
        <div className='relative h-[100vh] flex items-centers shadow-md'>
            <div className=' px-[100px]  w-full font-Montserrat ' id='knowledge'  >
                <div className='flex justify-between gap-10 items-center my-14'>
                    <span className='w-[80%] h-[1px] bg-[#00ADB5] '></span>
                    {/* <span><BsDot/></span> */}
                    <div className='w-[50vw] '>
                        <h1 className='text-[20px]  text-[#00ADB5] font-extrabold lowercase   bg-clip-text drop-shadow-lg tracking-[6px]'>
                        Programming Languages , Frameworks and Devtools
                        </h1>
                        <p className='mt-2 text-[#393E46]' >I build websites with these programming languages , frameworks , dev tools and designing tools.</p>
                    </div>
                </div>
                <div className='flex px-[100px] items-center'>
                    <div className='w-full grid grid-cols-5 gap-3 text-[#393E46]  justify-center '>
                        {ProgrammingLanguages.map((language , index)=>
                            <div key={index}  className=' border rounded-lg '>
                                <div className='p-5 flex flex-col items-center '>
                                    <div style={{color:language.color}} className='text-[100px]'>
                                        {language.icon}
                                    </div>
                                    <div className='capitalize text-sm mt-2'>{language.name}</div>
                                </div>
                            </div>
                        )}

                    </div>
                    
                </div>
            </div>
            
            
        </div>

    )
}

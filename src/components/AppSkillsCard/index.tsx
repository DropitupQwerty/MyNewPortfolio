import React from 'react'
// import { BsBrush } from 'react-icons/bs'
// import { BsDot } from 'react-icons/bs'
import { BiCodeAlt, BiLogoJava, BiLogoJavascript, BiLogoReact, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
// import { SiAdobephotoshop } from 'react-icons/si'
import { GoTools } from 'react-icons/go'
import {MdComputer} from 'react-icons/md'

export const AppSkillsCard = () => {

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
            icon: <BiLogoJava />,
            name:'HTML',
            color:'#5382A1'
        },
        {
            icon: <BiLogoJava />,
            name:'CSS',
            color:'#5382A1'
        },
        {
            icon: <BiLogoJava />,
            name:'C#',
            color:'#5382A1'
        },



    ]


    const Frameworks = [

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
            icon: <BiLogoSpringBoot />,
            name:'Material UI',
            color:'#6CB52D'
        },
        {
            icon: <BiLogoTailwindCss />,
            name:'Tailwind',
            color:'#38bdf8'
        },
    ]


    const devTools = [
        {
            name:'VS Code',
        },
        {
            name:'Android Studio'
        },
        {
            name:'Unity'
        },
        {
            name:'Adobe Photoshop',
        },
        {
            name:'Figma',
        },
    ]


    return (
        <div className='h-[100vh] p-10 w-full font-Montserrat shadow-lg' id='knowledge'  >
            <div className=' '>
                <div className=' text-[#00ADB5] '>
                    <div className='flex w-full items-center justify-end'>
                        <span className='w-full h-[2px] bg-[#00ADB5] mx-24'></span>
                        {/* <span><BsDot/></span> */}
                        <h1 className='text-[60px] font-extrabold lowercase text-justify bg-clip-text drop-shadow-lg tracking-[20px]'>
                        Toolings
                        </h1>
                    </div>
                </div>
         

            </div>
            <div className='flex justify-center gap-2 items-center mt-20 overflow-hidden mx-[100px] '>
                <div className='h-[500px] w-full  shadow-lg  rounded-[40px] py-8'>
                    <div className='w-full flex justify-center h-[30%] text-center items-center'>
                        <div className='p-5 rounded-full font-bold tracking-tighter text-[#FF6D60] '>
                            <div className='flex flex-col items-center'>
                                <div className='p-4  rounded-full  shadow-sm '>
                                    <BiCodeAlt className="text-[60px] "/>
                                </div>
                                <span className='text-[25px] font-normal  tracking-wider font-Ubuntu'>Programming Languages</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-5'>
                        <ul>
                            {ProgrammingLanguages.map((language, index)=>
                                <li key={index}>
                                    <div className='text-[20px] text-center leading-loose font-bold  text-[#393E46]'>
                                        {language.name}
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className='h-[500px] w-full  shadow-lg   rounded-[40px]  py-8'>
                    <div className='w-full flex justify-center h-[30%] text-center  items-center'>
                        <div className='p-5 rounded-full font-bold tracking-tighter text-[#FF6D60] '>
                            <div className='flex flex-col items-center'>
                                <div className='p-4  rounded-full  shadow-sm'>
                                    <MdComputer  className="text-[60px]"/>
                                </div>
                                <span className='text-[25px] font-normal tracking-wider font-Ubuntu'>Frameworks & Libraries</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-5'>
                        <ul>
                            {Frameworks.map((language, index)=>
                                <li key={index}>
                                    <div className='text-[20px] text-center leading-loose font-bold cap text-[#393E46]'>
                                        {language.name}
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className='h-[500px] w-full  shadow-lg  rounded-xl py-8'>
                    <div className='w-full flex justify-center  h-[30%] items-center'>
                        <div className='p-5 rounded-full font-bold tracking-tighter text-[#FF6D60]'>
                            <div className='flex flex-col items-center'>
                                <div className='p-4  rounded-full  shadow-sm '>
                                    <GoTools  className="text-[60px]"/>
                                </div>
                                <span className='text-[25px] font-normal tracking-wider font-Ubuntu'>Dev Tools</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 '>
                        <ul>
                            {devTools.map((language, index)=>
                                <li key={index}>
                                    <div className='text-[20px] text-center leading-loose  font-bold  text-[#393E46]'>
                                        {language.name}
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>


                {/* {ProgrammingLanguages.map((language , index)=>
                    <div key={index} className=''>
                        <div  className={'text-[100px] shadow-lg rounded-[30px] p-10 flex-col flex items-center '} style={{color:language.color}}>
                            <div> {language.icon}</div>
                            <div className='text-[15px] mt-4 text-[#00ADB5] font-bold'>{language.name}</div>
                        </div>
                    </div>
                )} */}
            </div>

        </div>
    )
}

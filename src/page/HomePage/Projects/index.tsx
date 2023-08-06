import React from 'react'
import reskyutBg from 'assets/projects/reskyutMainPage.png'
import healthcare from 'assets/projects/healthcareImage.png'
import yokai from 'assets/projects/yokai.png'
import { useOnScreen } from 'utilities/UseOnScreen'
import {  SiMysql } from 'react-icons/si'
import { BiLinkExternal, BiLogoFirebase, BiLogoJava, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoSpringBoot, BiLogoTypescript } from 'react-icons/bi'
// import Carousel from 'react-multi-carousel'



const projects = [
    {
        img: reskyutBg,
        name: 'RESKYUT : Made Pet Adoption Fun and Easy',
        links: 'https://reskyut-landing-page.vercel.app/',
        description:'A web and mobile project that makes it easier to select the ideal pet while also assisting overcrowded animal shelters. It aids animals in locating the ideal parents.',
        programminglanguagesIcons: [
            {
                icon: <BiLogoJavascript />,
                name: 'Javascript',
            },
            {
                icon: <BiLogoReact />,
                name: 'ReactJs',
            },
            {
                icon: <BiLogoFirebase />,
                name: 'Firebase',
            },
        ]
    
    },
    {
        img: yokai,
        name: 'Yokai Express',
        links: 'https://www.yokaiexpress.com/',
        description:'A web-based and mobile project, this was the project I worked on throughout my internship. As a full-stack developer, I work on the admin side. This website allows you to order ramen through an Android device and can display the location of the closest vending machine to you.',
        programminglanguagesIcons: [
            {
                icon: <BiLogoTypescript />,
                name: 'TypeScript',
            },
            {
                icon: <BiLogoReact />,
                name: 'ReactTs',
            },
            {
                icon: <BiLogoJava />,
                name: 'Java',
            },
            {
                icon: <BiLogoSpringBoot />,
                name: 'Springboot',
            },
            {
                icon: <SiMysql />,
                name: 'MySql',
            },
        ]
    },
    {
        img: healthcare,
        name: 'Santos Maternity Clinic Management System',
        links: 'https://healthcare-management-system.vercel.app/',
        description:'This is the mobile application and website I use at work. this assists the user in making an appointment with the clinic by handling doctor appointments and timetables.',
        programminglanguagesIcons: [
            {
                icon: <BiLogoJavascript />,
                name: 'Javascript',
            },
            {
                icon: <BiLogoTypescript />,
                name: 'Typescript',
            },
            {
                icon: <BiLogoReact />,
                name: 'ReactTS',
            },
            {
                icon: <BiLogoNodejs />,
                name: 'NodeJs',
            },
            {
                icon: <SiMysql />,
                name: 'MySql',
            },
        ]
    },

]


export const Projects = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    const currentView = useOnScreen(ref)

    console.log(0  %  2 == 0)
    


    return (
        <div  className=' items-center h-fit flex-col flex' id="projects" >
            <div className='mb-[70px] px-[30px] md:px-[100px]  w-full font-Montserrat '>
                <div className='flex  flex-row-reverse justify-center gap-10 items-center my-14'>
                    <div className={`duration-1000 transition-all ${currentView ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0' }`}>
                        <h1 className='text-[20px] md:text-[40px] font-extrabold drop-shadow-lg tracking-[6px]'>
                Thesis project and collaborative projects.
                        </h1>
                        <p className='text-[16px] md:text-[20px]'>Here you will find our capstone project and collaborative clients project as one of their developer.  This will show my programming languages  that I use in building these projects</p>
                    </div>
                </div>
                <div ref={ref} className='grid grid-cols-1  gap-4 justify-center z-[10] rounded-lg lg:p-10'>

                    {projects.map((project, index)=> 
                        <div key={index} className={`duration-1000 transition-all ${currentView ? 'translate-x-0 opacity-100' : index  %  2 == 0 ? '-translate-x-10 opacity-0' :'translate-x-10 opacity-0'}`} style={{transitionDuration : `${(index+1*1)}s` }}>
                            <div className='relative bg-white overflow-hidden  h-fit lg:h-[50vh] flex flex-col md:flex-row  shadow-lg  md:bg-white rounded-lg'>
                            
                                <img  src={project.img} className='rounded-lg object-cover w-full h-[50%] md:h-auto md:w-[50%]'/>
                                
                                <div className='p-4 lg:p-10 md:w-[50%] relative flex flex-col justify-between'>
                                    <div>
                                        <div className='font-bold'>{project.name}</div>
                                        <div className='overflow-hidden line-clamp-5 text-ellipsis text-sm md:text-lg'>
                                            {project.description}
                                        </div>
                                    </div>
                                    <div className=' bottom-5 gap-4'>
                                        <div className='flex gap-2 '>
                                            {project.programminglanguagesIcons.map((programminglanguage, index)=>
                                                <div key={index} className='text-lg md:text-3xl m-4 border rounded-full p-2'>{programminglanguage.icon}</div>
                                            )
                                            }
                                        </div>
                                        <a href={project.links} target='_blank' className='border text-sm  p-2 w-fit flex items-center gap-2  rounded-md duration-150 hover:bg-black hover:text-white' rel="noreferrer">
                                        Live Demo <BiLinkExternal className='text-sm md:text-xl'/>
                                        </a>
                                    </div>
                                </div>
                                    
                              
                                
                            </div>
                        </div>)}
                </div>
            </div>
        </div>

    )
}

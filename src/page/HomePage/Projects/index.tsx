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
        description:'A tinder like project that help to find the best pet you want and it helps animal shelters for being overpopulated. it also helps animal to find their best parents',
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
        description:'This is the project I work with in my Intership Program . I work in the admin side as a fullstack developer . This is a website for ordering a ramen and through a vending machine and can show the location of the vending machine that near to you',
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
        description:'A website for managing the Clinic and for the user appointments',
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
                        <p className='text-[16px] md:text-[20px]'>Here you will find some of the personal and clients projects and project that I collaborated with, Some of these projects are not impressive as they are hoping to learn and gain experience for the my future projects</p>
                    </div>
                </div>
                <div ref={ref} className='grid grid-cols-1  gap-4 justify-center z-[10] rounded-lg lg:p-10'>

                    {projects.map((project, index)=> 
                        <div key={index} className={`duration-1000 transition-all ${currentView ? 'translate-x-0 opacity-100' : index  %  2 == 0 ? '-translate-x-10 opacity-0' :'translate-x-10 opacity-0'}`} style={{transitionDuration : `${(index+1*1)}s` }}>
                            <div className='relative bg-white overflow-hidden  h-fit lg:h-[50vh] flex flex-col md:flex-row  shadow-lg  md:bg-white rounded-lg'>
                            
                                <img  src={project.img} className=' object-cover w-full h-[50%] md:h-auto md:w-[50%]'/>
                                
                                <div className='p-4 lg:p-10 md:w-[50%] relative flex flex-col justify-between'>
                                    <div>
                                        <div className='font-bold'>{project.name}</div>
                                        <div className='overflow-hidden line-clamp-3 text-ellipsis text-sm'>
                                            {project.description}
                                        </div>
                                    </div>
                                    <div className=' bottom-5 gap-4'>
                                        <div className='flex gap-2 '>
                                            {project.programminglanguagesIcons.map((programminglanguage, index)=>
                                                <div key={index} className='text-lg md:text-3xl m-4'>{programminglanguage.icon}</div>
                                            )
                                            }
                                        </div>
                                        <a href={project.links} target='_blank' className='border text-sm md:text-lg p-2 w-fit flex items-center gap-2  rounded-md duration-150 hover:bg-black hover:text-white' rel="noreferrer">
                                        Live Demo <BiLinkExternal className='text-sm md:text-lg'/>
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

import React from 'react'
import reskyutBg from 'assets/projects/reskyutMainPage.png'
import healthcare from 'assets/projects/healthcareImage.png'
import yokai from 'assets/projects/yokai.png'
import { useOnScreen } from 'utilities/UseOnScreen'
// import Carousel from 'react-multi-carousel'



const projects = [
    {
        img: reskyutBg,
        name: 'RESKYUT : Made Pet Adoption Fun and Easy',
        links: 'https://reskyut-landing-page.vercel.app/',
        description:'A tinder like project that help to find the best pet you want and it helps animal shelters for being overpopulated. it also helps animal to find their best parents'
    },
    {
        img: yokai,
        name: 'Yokai Express',
        links: 'https://www.yokaiexpress.com/',
        description:'This is the project I work with in my Intership Program . I work in the admin side as a fullstack developer . This is a website for ordering a ramen and through a vending machine and can show the location of the vending machine that near to you'
    },
    {
        img: healthcare,
        name: 'Santos Maternity Clinic Management System',
        links: 'https://healthcare-management-system.vercel.app/',
        description:'A website for managing the Clinic and for the user appointments'
    },

]


export const Projects = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    const currentView = useOnScreen(ref)

    


    return (
        <div  className=' items-center h-fit flex-col flex' id="projects" >
            <div className='mb-[70px] px-[30px] md:px-[100px]  w-full font-Montserrat '>
                <div className='flex  flex-row-reverse justify-center gap-10 items-center my-14'>
                    <div className={`duration-1000 transition-all ${currentView ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0' }`}>
                        <h1 className='text-[20px] md:text-[40px] text-transparent bg-gradient-to-t from-purple-900 to-blue-900 font-extrabold lowercase   bg-clip-text drop-shadow-lg tracking-[6px]'>
                Thesis Project And Collaborative Projects.
                        </h1>
                        <p className='text-[16px] md:text-[20px]'>Here you will find some of the personal and clients projects and project that I collaborated with</p>
                    </div>
                </div>
                <div ref={ref} className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center z-[10] rounded-lg lg:p-10'>

                    {projects.map((project, index)=> 
                        <div key={index} className={`duration-1000 transition-all ${currentView ? 'translate-x-0 opacity-100' : index + 1 % 2 == 0 ? '-translate-x-10 opacity-0' :'translate-x-10 opacity-0'}`} style={{transitionDuration : `${(index*1)}s` }}>
                            <div className='relative h-full shadow-lg overflow-hidden md:bg-white rounded-lg'>
                                <div className='absolute h-full w-full border-2 border-transparent hover:border-2 rounded-lg hover:border-white  text-white hover:bg-gradient-to-t  from-purple-900/80 to-blue-900/80 opacity-0 hover:opacity-100 duration-700 flex items-center justify-center'>
                                    <div className='p-5'>
                                        <div className=' overflow-ellipsis text-[12px] md:text-sm lg:text-xl'>
                                            <div className='font-bold md:text-sm lg:text-xl my-2'>{project.name}</div>
                                            {project.description}
                                        </div>
                                        <a href={project.links} target='_blank' className='absolute text-sm bottom-4 right-4 text-white  border border-white-900 rounded-lg px-3 py-2 bg-gradient-to-t from-purple-900 to-blue-900' rel="noreferrer">
                                            Visit Page
                                        </a>
                                    </div>
                                </div>
                                <img  src={project.img} />
                            </div>
                        </div>)}
                </div>
            </div>
        </div>

    )
}

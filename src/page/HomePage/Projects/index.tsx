import React from 'react'
import reskyutBg from 'assets/projects/reskyutMainPage.png'
import healthcare from 'assets/projects/healthcareImage.png'
import yokai from 'assets/projects/yokai.png'
import Carousel from 'react-multi-carousel'

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
        description:'This is the project I work with in my Intership Program . I work in the admin side as a fullstack developer'
    },
    {
        img: healthcare,
        name: 'Santos Maternity Clinic Management System',
        links: 'https://healthcare-management-system.vercel.app/',
        description:'A website for managing the Clinic and for the user appointments'
    },

]

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
}


export const Projects = () => {
    return (
        <div className=' items-center flex-col hidden md:flex' id="projects" >
            <div className='mb-[70px] px-[30px] md:px-[100px]  w-full font-Montserrat '>
                <div className='flex  flex-row-reverse justify-center gap-10 items-center my-14'>
                    <div className=''>
                        <h1 className='text-[20px] md:text-[40px] text-transparent bg-gradient-to-t from-purple-900 to-blue-900 font-extrabold lowercase   bg-clip-text drop-shadow-lg tracking-[6px]'>
                Thesis Project And Collaborative Projects.
                        </h1>
                        <p className='text-[16px] md:text-[20px]'>Here you will find some of the personal and clients projects and project that I collaborated with</p>
                    </div>
                </div>
                <div className='flex gap-4 justify-center z-[10] rounded-lg shadow-md p-10 bg-white'>
                    <Carousel 
                        responsive={responsive}  
                        transitionDuration={300}
                        autoPlay={true}
                        infinite={true}
                        itemClass='p-1'
                        containerClass='md:w-[70vw]'>
                        {projects.map((project ,index)=>
                            <div key={index} className='h-fit  rounded-lg shadow-md; overflow-hidden'>
                                <div className='h-[70%] w-full'>
                                    <img src={project.img} className='h-full w-full object-cover' alt="" />
                                </div>
                                <div className=' flex flex-col  w-full justify-between bg-white h-[30%] p-4'>
                                    <div className=''>
                                        <a  href={project.links} className=' hover:underline font-bold capitalize text-[#393E46] tracking-wide'>{project.name}</a>
                                        <p className='text-[14px] overflow-hidden overflow-ellipsis text-[#393E46] font-mediums'>{project.description}</p>
                                        {/* <p className='text-blue-500 text-[12px] underline '>{project.links}</p> */}
                                    </div>
                                    <a className='text-sm  flex justify-end' href={project.links} target='_blank' rel="noreferrer"><h1 className='px-5 py-3 w-full md:w-fit text-center border rounded-lg hover:bg-gradient-to-t from-purple-900 to-blue-900 hover:text-white  duration-150 ease-in-out border-[#393E46]   text-[#393E46]  '>Visit Page</h1></a>
                                </div>
                            </div>    
                        )
                        }
                    </Carousel>
                
                </div>
            </div>
        </div>

    )
}

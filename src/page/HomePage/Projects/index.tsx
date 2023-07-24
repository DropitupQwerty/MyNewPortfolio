import React from 'react'
import reskyutBg from 'assets/projects/reskyutMainPage.png'
import healthcare from 'assets/projects/healthcareImage.png'
import yokai from 'assets/projects/yokai.png'
import Carousel from 'react-multi-carousel'
import  DynamicBg  from 'assets/subtle-prism.svg'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'

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
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
}


export const Projects = () => {
    return (
        <div className=' flex items-center flex-col' 
            style={{
                backgroundImage: `url(${DynamicBg})` ,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
            }} 
        >
            <div className='mb-[70px] px-[100px]  w-full font-Montserrat '>
                <div className='flex  flex-row-reverse justify-center gap-10 items-center my-14'>
                    {/* <span className='w-[80%] h-[1px] bg-[#00ADB5] '></span> */}
                    {/* <span><BsDot/></span> */}
                    <div className=''>
                        <h1 className='text-[40px]  text-[#393E46] font-extrabold lowercase   bg-clip-text drop-shadow-lg tracking-[6px]'>
                Thesis Project And Collaborative Projects 
                        </h1>
                        <p className='text-[20px]'>Here you will find some of the personal and clients projects and project that I collaborated with</p>
                        {/* <p className='mt-2' >I Build websites with these programming languages , frameworks and Dev Tools . Hoping to gain more a lot of new programming languages and frameworks   </p> */}
                    </div>
                </div>
                <div className='flex gap-4 justify-center '>
                    <Carousel 
                        responsive={responsive}  
                        transitionDuration={300}
                        autoPlay={true}
                        infinite={true}
                        itemClass='p-1'
                        containerClass='w-[70vw] '>
                        {projects.map((project ,index)=>
                            <div key={index} className='h-[70vh]  rounded-lg shadow-lg overflow-hidden'>
                                <div className='h-[70%] w-full'>
                                    <img src={project.img} className='h-full w-full object-cover' alt="" />
                                </div>
                                <div className=' flex flex-col  w-full justify-between bg-white h-[30%] p-4'>
                                    <div className=''>
                                        <h1 className='font-bold capitalize text-[#393E46] tracking-wide'>{project.name}</h1>
                                        <p className='text-[14px] overflow-hidden overflow-ellipsis text-[#393E46] font-mediums'>{project.description}</p>
                                        {/* <p className='text-blue-500 text-[12px] underline '>{project.links}</p> */}
                                    </div>
                                    <div className='text-sm  flex justify-end' ><h1 className='p-2 border border-[#393E46]  rounded-lg text-[#4DC5CA]  w-fit'>Visit Page</h1></div>
                                </div>
                            </div>    
                        )
                        }
                    </Carousel>
                
                </div>
            </div>
            <div className='py-[40px] font-Montserrat text-center  text-[30px] text-[#393E46] flex justify-center'>
                <div className='flex '><BiSolidQuoteAltLeft/> Mistakes are the seeds from which trees of knowledge grow<BiSolidQuoteAltRight/></div>
            </div>
        </div>

    )
}

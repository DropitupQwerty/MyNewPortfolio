import React from 'react'
import { BsFacebook, BsInstagram, BsDiscord,  BsGithub, BsLinkedin} from 'react-icons/bs'



const MySocmed = [
    {
        icon:<BsFacebook/>
    },
    {
        icon:<BsInstagram />
    },
    {
        icon:<BsDiscord />
    },
    {
        icon:<BsGithub />
    },
    {
        icon:<BsLinkedin />
    },
]


export const MyContacts = () => {
    return (
      
        <div className='rounded-t-[50px]  flex flex-row-reverse items-center justify-evenly'>
            <div>Emai Me at jacoballen.valderama.s@gmail.com</div>

            <div className='flex  items-end justify-start p-5 gap-10  h-full'>
                <div>
                    <div className='flex  gap-10'>
                        {
                            MySocmed.map((coms, index)=> 
                                <div key={index} className='text-[#393E46]  text-[20px]'>
                                    {coms.icon}
                                </div>)
                        }
                
                    </div>

                    {/* <div className=' text-white  gap-2 '>
                        <div className='text-[15px]'>Lets Create A Project </div>
                        <div className='text-[18px] flex items-center gap-2'><BiLogoGmail/> jacoballen.valderama.s@gmail.com</div>
                    </div>
                    <div className=' text-white  gap-2 '>
                        <div className='text-[15px]'>Or Call Me </div>
                        <div className='text-[15px] flex items-center gap-2'><BiPhoneCall/>+63947-530-7716</div>
                        <div className='text-[15px] flex items-center gap-2'><BiPhoneCall/>+63995-481-6759</div>
                    </div> */}
                </div>
            </div>
        </div> 
    )
}

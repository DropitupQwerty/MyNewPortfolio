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
      
        <div className='rounded-t-[50px] h-[40vh] flex flex-row-reverse items-center justify-evenly'>

            
            


          

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

         
                </div>
            </div>
        </div> 
    )
}

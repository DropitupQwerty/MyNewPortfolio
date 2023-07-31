import React from 'react'
import { BsFacebook, BsInstagram, BsDiscord,  BsGithub, BsLinkedin} from 'react-icons/bs'



const MySocmed = [
    {
        icon:<BsFacebook/>,
        link: 'https://www.facebook.com/vjacoballen/',
    },
    {
        icon:<BsInstagram />,
        link: 'https://www.instagram.com/valderamajacoballen/',

    },
    {
        icon:<BsDiscord />,
        link: 'https://discord.com/users/697003746361606175',
    },
    {
        icon:<BsGithub />,
        link: 'https://github.com/DropitupQwerty',

    },
    {
        icon:<BsLinkedin />,
        link: 'https://www.linkedin.com/in/jacob-allen-valderama-616743253/',

    },
]



export const MyContacts = () => {
    const myEmail = 'jacoballen.valderama.s@gmail.com'

    const copyEmail = () => {
        navigator.clipboard.writeText(myEmail)
        alert(myEmail + ' is Copied')
    }

    return (
      
        <div className='rounded-t-[50px] flex flex-col items-center justify-evenly'>          
            <div className='flex  items-end justify-start p-5 gap-10  h-full'>
                <div>
                    <div className='flex  gap-10'>
                        {
                            MySocmed.map((coms, index)=> 
                                <a href={coms.link} target='_blank' key={index} className='text-[#393E46]  text-[20px] hover:scale-105  hover:drop-shadow-xl ' rel="noreferrer">
                                    {coms.icon}
                                </a>)
                        }
                
                    </div>

         
                </div>
                
            </div>
            <div className='tracking-wider text-sm p-5 text-gray-400'>
             Email me at  <button onClick={() => copyEmail()} className='text-blue-700 underline'>{myEmail}</button>
            </div>
        </div> 
    )
}

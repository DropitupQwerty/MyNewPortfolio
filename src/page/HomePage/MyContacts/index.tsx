import React from 'react'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'
import { MySocmed } from 'utilities/Social'




export const MyContacts = () => {

    return (
      
        <div className=' bg-white flex flex-col items-center justify-evenly ' >   
            <div className='py-[40px] px-[20px] font-Montserrat text-center  text-[20px] text-[#393E46] flex justify-center'>
                <div className='flex '><BiSolidQuoteAltLeft/> Mistakes are the seeds from which trees of knowledge grow<BiSolidQuoteAltRight/></div>
            </div>       
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
            {/* <div className='tracking-wider text-sm p-5 text-gray-400 flex items-center'>
               Email me at    <SiGmail className='mx-2 mr-1'/><button onClick={() => copyEmail()} className='text-blue-700 underline'> {myEmail}</button>
            </div> */}
        </div> 
    )
}

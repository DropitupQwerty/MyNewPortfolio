import React from 'react'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'
import { MySocmed } from 'utilities/Social'
import { useOnScreen } from 'utilities/UseOnScreen'





export const MyContacts = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    const currentView = useOnScreen(ref)
    const quote : string = ' Mistakes are the seeds from which trees of knowledge grow'

    



    return (
      
        <div ref={ref} className=' bg-white flex flex-col items-center justify-evenly ' >   
            <div className='py-[40px] px-[20px] font-Montserrat text-center  text-[20px] text-[#393E46] flex justify-center'>
            
               | <BiSolidQuoteAltLeft/>
                {quote}
                <BiSolidQuoteAltRight/> |
            </div>       
            <div className='flex  items-end justify-start p-5 gap-10  h-full'>
                <div>
                    <div className='flex  gap-10'>
                        {
                            MySocmed.map((coms, index)=> 
                                <a href={coms.link} target='_blank' key={index} className='text-[#393E46]  text-[20px] hover:scale-105  hover:drop-shadow-xl ' rel="noreferrer">
                                    <div className={twMerge('duration-1000 transition-all ', currentView? 'opacity-100 scale-100' : 'opacity-0 scale-75')} style={{transitionDuration : `${index + 1}s`}}>
                                        {coms.icon}
                                    </div>
                                </a>)
                        }
                    </div>
                </div>
                
            </div>
            <div className='text-[14px] p-2 text-gray-400 '>Portfolio Created by Jacob Allen Valderama</div>
        </div> 
    )
}

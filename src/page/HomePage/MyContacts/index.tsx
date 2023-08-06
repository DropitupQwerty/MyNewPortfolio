import { AppContactIcons } from 'components/AppContactIcons'
import React from 'react'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'



export const MyContacts = () => {

    const quote : string = ' Mistakes are the seeds from which trees of knowledge grow'

    



    return (
      
        <div className='flex flex-col items-center justify-evenly ' >   
            <div className='py-[40px] px-[20px] font-Montserrat text-center  text-[20px] text-[#393E46] flex justify-center'>
            
                <BiSolidQuoteAltLeft/>
                {quote}
                <BiSolidQuoteAltRight/>
            </div>       
            <AppContactIcons/>
            <div className='text-[14px] p-2 text-gray-400 '>Portfolio Created by © Jacob Allen Valderama</div>
        </div> 
    )
}

import React from 'react'
import { ScrollPosition } from 'types/scrollPosition'






export const AppSideButtons = () => {

    const pageHeight = document.documentElement.scrollHeight 
    const pagePercent =  pageHeight - ScrollPosition() 
    const percent = (pagePercent / pageHeight ) * 100

    return (
        <div className='z-[99999] h-full relative' > 
            <div className='fixed bottom-0 w-[120vw]'>

                <div  className={'h-[4px]  bg-purple-900   duration-400 transition-all'}  style={{width:`${(100 - percent) }%`}}  >
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { ScrollPosition } from 'types/scrollPosition'






export const AppSideButtons = () => {

    const pageHeight = document.documentElement.scrollHeight 
    const pagePercent =  pageHeight - ScrollPosition() 
    const percent = (pagePercent / pageHeight ) * 100

    return (
        <div className='fixed bottom-0 z-[99999]  h-screen w-[250vh]  overflow-hidden ' > 
            <div  className={'relative  h-[4px]  bg-purple-900   duration-1000 transition-all'}  style={{width:`${(100 - percent) }%`}}  >
            </div>
        </div>
    )
}

import React from 'react'
import { BsDot } from 'react-icons/bs'
import { ScrollPosition } from 'types/scrollPosition'
import { handleScrollToId } from 'utilities'
import { paths } from 'utilities/Paths'





export const AppSideButtons = () => {

    const pageHeight = document.documentElement.scrollHeight 
    const pagePercent =  pageHeight - ScrollPosition() 
    const percent = (pagePercent / pageHeight ) * 100

    return (
        <div className='fixed z-100 md:flex items-center  right-5 h-full z-[999] hidden' >
            <div className='flex flex-col items-center justify-center h-screen w-[200px]'>
                <BsDot className='text-[30px]'/>
                <div  className={'relative rounded-lg w-[7px] my-4 bg-purple-900   '}  style={{height:`${(100 - percent) }%`}}  >
                </div>
                <div >
                    {paths.map((path, index)=>
                        <div key={index}>
                            { path.scrollPos <= ScrollPosition() && path.pathname.toLowerCase() !== 'my resume' &&
                                <button  onClick={()=>handleScrollToId(path.href)} className='my-2 flex flex-col duration-1000 transition-all'>
                                    {path.pathname}
                                    <span className='h-[4px] mt-1 w-[50%] rounded-full  bg-purple-900'></span>
                                </button >
                            }
                        </div>)}
                </div>
                <div  className={'relative rounded-lg w-[7px] my-4 bg-purple-900   '}  style={{height:`${(100 - percent) }%`}}  >

                </div>
                <BsDot  className='text-[30px]'/>
            </div>
        </div>
    )
}

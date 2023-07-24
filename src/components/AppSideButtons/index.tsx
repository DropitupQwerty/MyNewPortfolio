import React from 'react'
import { BsDot } from 'react-icons/bs'
import { GiDiamonds } from 'react-icons/gi'
import { pathType } from 'types/pathType'


type AppSideButtonsProps = {
    path : pathType[]
}




export const AppSideButtons = (props : AppSideButtonsProps) => {

    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }


    return (
        <div className='fixed z-100 flex items-center  top-0 right-4 h-full ' >
            <div className='flex flex-col gap-5 items-center'>
                <span><BsDot/></span>
                <span className='h-[40px] w-[2px] bg-[#393E46]'></span>
                {props.path.map((href ,index)=>
                    <button onClick={()=>handleClickScroll(href.href)} key={index} >
                        <span><GiDiamonds className="text-xl hover:stroke-black filter drop-shadow-lg hover:scale-125 ease-in-out text-[#393E46] duration-300 hover:opacity-50 "/></span>
                    </button>)}
                <span className='h-[40px] w-[2px] bg-[#393E46]'></span>
                <span><BsDot/></span>
            </div>
        </div>
    )
}

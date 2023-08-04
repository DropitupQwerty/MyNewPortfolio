import React, { useState } from 'react'
import { pathType } from 'types/pathType'
import logo from 'assets/myLogo.svg'
import { handleScrollToId } from 'utilities'
import { MySocmed } from 'utilities/Social'

type AppNavigationBarProps = { 
    path : pathType[]
}

export const AppNavigationBar = (props : AppNavigationBarProps) => {
    const [open,setOpen] = useState(false)


    return (
        <div className=''>
            {/* <div className='h-[60px] absolute m-5 md:hidden '>
                <a href='/'>
                    <img src={logo} className='h-full '/>
                </a>
            </div>  */}
            <div className='fixed z-[99999] flex top-0 justify-end w-full'> 
                <button className={'flex flex-col gap-2  p-2 m-5  rounded  md:hidden '} onClick={()=> setOpen(!open)}>
                    <span className={`h-[4px] rounded-full w-[30px] bg-[#39383D] transition-all duration-400 ease-in transform ${open ?'rotate-[225deg] translate-y-3 ' : 'rotate-0 translate-y-0'}`}></span>
                    <span className={`h-[4px] rounded-full w-[30px] bg-[#39383D] transition-all duration-400 ease-in transform ${open ?'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`h-[4px] rounded-full w-[30px] bg-[#39383D] transition-all duration-400 ease-in transform ${open ?'-rotate-[225deg] -translate-y-3' : 'rotate-0  translate-y-0'}`}></span>
                </button>
            </div>
            <div className={` fixed bg-white w-full h-full z-[9999] md:hidden opacity-0 ${open?' opacity-60': 'hidden'}`} onClick={()=> setOpen(false)}></div>
            <div className={`font-Montserrat border w-[70vw]  h-full md:h-fit md:w-full fixed z-[9999]  bg-[#f5f5f5]/70 filter backdrop-blur-md   md:flex  top-0   flex justify-between items-center duration-700 transition-all ease-in-out flex-col md:flex-row ${open ? 'translate-x-0 ' : '-translate-x-full '} md:translate-x-0`}>  
                <div className='h-[50px] mx-5 mt-2 hidden md:block'>
                    <a href='/'>
                        <img src={logo} className='h-full '/>
                    </a>
                </div>          
                <ul className='flex mt-20 md:mt-0 p-6 md:p-0 justify-end md:gap-10 w-full flex-col md:flex-row '>
                    {props.path.map((NavPath, index)=>
                        <button key={index} onClick={()=>{handleScrollToId(NavPath.href)
                            setOpen(false)}} >
                            <div className='p-3 md:p-5 border-b-2 flex flex-col lowercase md:border-none font-medium hover:drop-shadow-lg  text-[#39383D] text-start md:text-center text=[#393E46] text-[16px]'>
                                {NavPath.pathname} 
                            </div>
                      
                        </button>
                    )}
                </ul>
                <div className=' flex flex-col items-center md:hidden'>

                    <div>
    Visit My Accounts
                    </div>
                    <div className='flex gap-5 p-5'>
                        {
                            MySocmed.map((coms, index)=> 
                                <a href={coms.link} target='_blank' key={index} className='text-[#393E46]  text-[30px] hover:scale-105  hover:drop-shadow-xl ' rel="noreferrer">
                                    {coms.icon}
                                </a>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

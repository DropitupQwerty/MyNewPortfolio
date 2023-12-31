import React, { useState } from 'react'
import { pathType } from 'types/pathType'
import logo from 'assets/myLogo.svg'
import { handleScrollToId } from 'utilities'
import { AppContactIcons } from 'components/AppContactIcons'

type AppNavigationBarProps = { 
    path : pathType[]
}

export const AppNavigationBar = (props : AppNavigationBarProps) => {
    const [open,setOpen] = useState(false)


    return (
        <div className=''>
            <div className='absolute m-5 md:hidden '>
                <a href='/' className='flex items-center font-bold gap-2'>
                    <img src={logo} className='h-[60px] '/>
                   
                </a>
            </div> 
            <div className='fixed z-[99999] flex top-0 justify-end w-full '> 
                <button className={'flex flex-col gap-2  p-2 m-5  rounded  lg:hidden'} onClick={()=> setOpen(!open)}>
                    <span className={`h-[4px] rounded-full w-[30px] bg-[#39383D] transition-all duration-400 ease-in transform ${open ?'rotate-[225deg] translate-y-3 ' : 'rotate-0 translate-y-0'}`}></span>
                    <span className={`h-[4px] rounded-full w-[30px] bg-[#39383D] transition-all duration-400 ease-in transform ${open ?'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`h-[4px] rounded-full w-[30px] bg-[#39383D] transition-all duration-400 ease-in transform ${open ?'-rotate-[225deg] -translate-y-3' : 'rotate-0  translate-y-0'}`}></span>
                </button>
            </div>
            <div className={` fixed bg-white w-full h-full z-[9999] lg:hidden opacity-0 ${open?' opacity-60': 'hidden'}`} onClick={()=> setOpen(false)}></div>
            <div className={`font-Montserrat  bg-white/80 lg:white/40 w-[70vw] overflow-hidden   h-full lg:h-fit lg:w-full fixed z-[9999]  lg:flex  top-0   flex justify-between items-center duration-700 transition-all ease-in-out flex-col md:flex-row ${open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 lg:opacity-100'} lg:translate-x-0`}>  
                <div className='h-[50px] mx-5 mt-2 hidden lg:block'>
                    <a href='/'>
                        <img src={logo} className='h-full '/>
                    </a>
                </div>          
                <ul className='flex mt-20  md:mt-0 p-6 md:p-0 justify-center md:gap-10 w-full flex-col lg:flex-row overflow-hidden '>
                    {props.path.map((NavPath, index)=> NavPath.pathname.toLowerCase() !== 'my resume' ?
                        <button key={index} onClick={()=>{
                            handleScrollToId(NavPath.href)
                            setOpen(false)}} >
                            <div className='p-3 md:p-5 border-b-2  flex flex-col capitalize md:border-none font-medium hover:drop-shadow-lg  text-start md:text-center text=[#393E46] text-[16px]'>
                                {NavPath.pathname} 
                            </div>
                        </button> :
                        <a key={index}  href={NavPath.href} target='_blank' rel="noreferrer">
                            <div className='p-3 md:p-5 border-b-2 flex flex-col Capitalize md:border-none font-medium hover:drop-shadow-lg  text-start md:text-center text=[#393E46] text-[16px]'>
                                {NavPath.pathname} 
                            </div>
                        </a>
                    )}
                </ul>
                <div className=' flex flex-col items-center md:hidden'>

                    <div className='text-sm text-gray-500'>
    Visit My Accounts
                    </div>
                    <AppContactIcons/>
                </div>

            </div>
        </div>
    )
}

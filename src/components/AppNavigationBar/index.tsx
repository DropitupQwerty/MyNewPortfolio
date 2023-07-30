import React from 'react'
import { pathType } from 'types/pathType'
import logo from 'assets/myLogo.svg'

type AppNavigationBarProps = { 
    path : pathType[]
}

export const AppNavigationBar = (props : AppNavigationBarProps) => {

    return (
        <div className='font-Montserrat w-full fixed bg-[#f5f5f5]  top-0 z-50 flex justify-between items-center'>  
            <div className='h-[50px] mx-5'>
                <a href='/'>
                    <img src={logo} className='h-full'/>
                </a>
            </div>          
            <ul className='flex justify-end gap-10'>
                {props.path.map((NavPath, index)=>
                    <a key={index} className='' href={NavPath.href}>
                        <div className='p-5 font-medium hover:drop-shadow-lg text-[#39383D] text-center capitalize text=[#393E46] text-[16px]'>
                            {NavPath.pathname} 
                        </div>
                    </a>
                )}
            </ul>
        </div>
    )
}

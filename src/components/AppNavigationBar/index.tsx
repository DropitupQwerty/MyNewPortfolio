import React from 'react'



export const AppNavigationBar = () => {

    const NavPath = [
        {
            pathname: 'About Me',
            href:''
        },
        {
            pathname: 'Skills',
            href:''
        },
        {
            pathname: 'Projects',
            href:''
        },
        {
            pathname: 'Contact',
            href:''
        },
    ]


    return (
        <div className='fixed font-Montserrat w-full bg-white/30 backdrop-blur-lg drop-shadow-lg  top-0 z-50'>            
            <div className=' top-0 z-50'>
                <ul className='flex justify-end gap-10'>
                    {NavPath.map((NavPath, index)=>
                        <li key={index}>
                            <div className='p-5 font-medium hover:drop-shadow-lg text-[#39383D] text-center capitalize text=[#393E46] text-[16px]'>
                                {NavPath.pathname} 
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

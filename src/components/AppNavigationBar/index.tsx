import React from 'react'



export const AppNavigationBar = () => {

    const NavPath = [
        {
            pathname: "About Me",
            href:""
        },
        {
            pathname: "Skills",
            href:""
        },
        {
            pathname: "Projects",
            href:""
        },
        {
            pathname: "Contact Me",
            href:""
        },
    ]


    return (
        <div className='absolute w-full top-0 z-50'>            
            <div className='absolute w-full top-0 z-50'>
            <ul className='flex s'>
            {NavPath.map((NavPath, index)=>
                <li key={index}>
                    <div className='p-4 text-[20px]'>
                    {NavPath.pathname} 
                    </div>
                </li>
                )}
            </ul>
        </div>
    </div>
    )
}

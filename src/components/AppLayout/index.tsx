import React from 'react'
// import  DynamicBg  from 'assets/subtle-prism.svg'

type AppLayoutProps = { 
    children : React.ReactNode
}


export const AppLayout = (props : AppLayoutProps) => {

  

    return (
        <div >
            <div
                className='relative select-none overflow-hidden divide-y-[2px]' 
                style={{
                    // backgroundImage: `url(${DynamicBg})` ,
                    // backgroundSize:'cover',
                    // backgroundRepeat:'no-repeat',
                }}>
                {/* <AppSideButtons /> */}
                {props.children}
            
            </div>
        

            
        </div>
    )
}

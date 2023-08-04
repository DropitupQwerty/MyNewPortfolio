import React from 'react'
import  DynamicBg  from 'assets/subtle-prism.svg'

// import { useOnScreen } from 'utilities/UseOnScreen'
// import { AppSideButtons } from 'components/AppSideButtons'

type AppLayoutProps = { 
    children : React.ReactNode
}


export const AppLayout = (props : AppLayoutProps) => {

  

    return (
        <div >
            <div
                className='relative select-none' 
                style={{
                    backgroundImage: `url(${DynamicBg})` ,
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                }}>
                {/* <AppSideButtons /> */}
                {props.children}
            
            </div>
        

            
        </div>
    )
}

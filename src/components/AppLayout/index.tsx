import React from 'react'
import  DynamicBg  from 'assets/subtle-prism.svg'
import { AppSideButtons } from 'components/AppSideButtons'


type AppLayoutProps = { 
    children : React.ReactNode
}


export const AppLayout = (props : AppLayoutProps) => {

  

    return (
        <div >
            <div
                className='relative select-none overflow-hidden ' 
                style={{
                    backgroundImage: `url(${DynamicBg})` ,
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                }}>
                <div className=' filter'>

                    <AppSideButtons />
                    {props.children}
                </div>
            
            </div>
        

            
        </div>
    )
}

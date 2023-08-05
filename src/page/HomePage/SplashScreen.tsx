import React from 'react'
import { BiMouse } from 'react-icons/bi'
import { useOnScreen } from 'utilities/UseOnScreen'
import { twMerge } from 'tailwind-merge'
import { ScrollPosition } from 'types/scrollPosition'

export const SplashScreen = () => {
   
    const ref = React.useRef<HTMLDivElement>(null)
    const currentView = useOnScreen(ref)

    console.log('skills' ,currentView)
    

    const texts = [
        'W',
        'E',
        'L',
        'C',
        'O',
        'M',
        'E',
        ' ',
        '',
    ]


    console.log(ScrollPosition())
    

    return (
        <div className={twMerge('h-screen relative rounded-b-[100px] overflow-hidden' )}>
            <div ref={ref} className='absolute w-full bg-gradient-to-t from-blue-400 to bg-purple-900 z-[999999]  font-bold h-screen flex justify-center items-center '>
      
                {texts.map((text,index)=> 
                    <div key={index} className={` text-[150px] font-Sharetechmo bg-clip-text text-transparent ${currentView ? 'opacity-100 text-white' : 'opacity-0 bg-gradient-to-tr from-purple-900 to-blue-900'}`} style={{transitionDuration: `${index+2}s`}}>
                        {text}
                    </div>
                )}
                 
                <div className='absolute bottom-0 flex w-full items-center justify-center z-[999999]'>
                    <BiMouse className='text-5xl m-10 animate-bounce'/>    
                </div>
            </div>
          
        </div>
    )
}

import React from 'react'
import { twMerge } from 'tailwind-merge'
import { useOnScreen } from 'utilities/UseOnScreen'

export const AboutMe = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    const currentView = useOnScreen(ref)

    

    return (
        <div ref={ref} className='z-20 lg:w-[60vw] bg-white/75 backdrop-blur-md  w-full flex justify-center md:my-16 p-5'>
            <div className={twMerge(' md:px-[100px]  rounded-lg  duration-1000 transition-all ',currentView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10')}>
                <div className='z-[9999]'>
                    <h1 className='text-xl font-medium md:text-3xl text-[#393E46] tracking-wider '>
                      Front-end Developer 
                    </h1>
                    <div className='text-md md:text-lg text-justify '>
                        <p>A fresh graduate student that aspires to be a skilled web developer , capable of creating user-friendly online apps, knowledgable in Java, JavaScript, TypeScript, and informed about
popular frameworks such as React TS and JS. outstanding debugging and issue-solving
abilities, a keen eye for detail, and a passion for producing high-caliber code.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

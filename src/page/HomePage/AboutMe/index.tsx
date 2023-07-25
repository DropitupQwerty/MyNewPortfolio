import React from 'react'

export const AboutMe = () => {
    return (
        <div className='  z-20 drop-shadow-md   absolute -top-16 w-full flex justify-center'>
            <div className=' w-[80%] bg-white rounded-lg  p-10'>
                <div  className=' w-full  flex-col'>
                    <div className=''>
                        <h1 className='text-[30px] font-extrabold text-[#39383D] tracking-widest   lowercase text-center'>About me</h1>
                    </div>
                </div>
                <div className=''>
                    <p className='text-[18px] text-center text-[#39383D]'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export const GetInTouch = () => {
    return (
        <div className=' flex items-center bg-white' id="contact">
            <div className='w-full  my-10  flex justify-center ' >
                <div className='flex flex-col bg-white p-10 lowercase w-full md:w-[60%] leading-none'>
                    <div className='text-[40px] lg:text-[70px] font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-purple-900 to-blue-900'>Email me here.</div>
                    <div className='text-[20px]'>Want to work with me? Message me now!</div>
                    <div className='flex flex-col gap-5 mt-10'>
                        <input className='p-4 border  rounded-lg focus:shadow-purple-900 focus:shadow outline-none' placeholder='Email'/>
                        <input className='p-4 border  rounded-lg focus:shadow-purple-900 focus:shadow outline-none' placeholder='Subject'/>
                        <textarea rows={5} className='resize-none border rounded-lg p-4 focus:shadow-purple-900 focus:shadow outline-none' placeholder='Description '/>
                        <div className='w-full flex justify-center'>
                            <button className='font-bold  rounded-lg  py-2 w-full bg-gradient-to-t from-purple-900 to-blue-900 text-white '>Submit</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
// import { useOnScreen } from 'utilities/UseOnScreen'
import emailJs from '@emailjs/browser'
import { twMerge } from 'tailwind-merge'
import { useOnScreen } from 'utilities/UseOnScreen'
import { BiCheckCircle } from 'react-icons/bi'
import { BsExclamationCircle } from 'react-icons/bs'



const Service_ID = 'service_3d1soey'
const emailTemplate = 'template_w9ia62s'
const publicKey='_p02JMH-OM30WSzUh'

export const GetInTouch = () => {
    const ref = React.useRef<HTMLDivElement>(null)
    const currrentView = useOnScreen(ref)
    const formRef =  React.useRef<HTMLFormElement | null>(null)
    const [isSending , setIsSending] = useState('')
    const [isError, setIsError] = useState('')
    
    const sendEmail  = (e : React.FormEvent) => { 
        e.preventDefault()
        setIsSending('Send')            
        
        emailJs.sendForm(Service_ID , emailTemplate , formRef.current as HTMLFormElement , publicKey)
            .then((result)=> {
                console.log(result.text)
                setIsSending(result.text)            
            }
            ).catch((error)=>{
                console.log(error)
                setIsSending('')
                setIsError(error)
            }
            )
    }


    return (
        <div  className=' flex items-center bg-white' id="contact">
            <div className='w-full  my-10  flex justify-center ' >
                <div className='flex flex-col bg-white p-10 lowercase w-full md:w-[60%] '>
                    <div className={twMerge('duration-1000 transition-all ', currrentView ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0')}>
                        <div className='text-[40px] lg:text-[70px] font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-purple-900 to-blue-900'>Email me here.</div>
                    </div>

                    <div  ref={ref} className={twMerge('text-[20px] text-[#39383D]','duration-1000 transition-all ', currrentView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full')}>if you have any questions or would like to work with me, please feel free to email me and say hello!</div>
                    <form ref={formRef} onSubmit={(e)=>sendEmail(e)}>
                        <div  className='flex flex-col gap-5 mt-10'>
                            <input id="email" required name='email' className={twMerge('  w-full p-4 border  rounded-lg focus:shadow-purple-900 focus:shadow outline-none','duration-1000 transition-all ', currrentView ? 'opacity-100' : 'opacity-0')} placeholder='Enter your Email Address'/>
                            <input id="name" required name='name' className={twMerge('w-full p-4 border  rounded-lg focus:shadow-purple-900 focus:shadow outline-none','duration-[1300ms] transition-all ', currrentView ? 'opacity-100' : 'opacity-0')} placeholder='Enter your Name'/>
                            <input  id="subject" required name='subject' className={twMerge('w-full p-4 border  rounded-lg focus:shadow-purple-900 focus:shadow outline-none','duration-[1600ms] transition-all ', currrentView ? 'opacity-100' : 'opacity-0')} placeholder='Enter Subject'/>
                            <textarea name='message' required rows={5} className={twMerge('resize-none border rounded-lg p-4 focus:shadow-purple-900 focus:shadow outline-none','duration-[1900ms] transition-all ', currrentView ? 'opacity-100' : 'opacity-0')} placeholder='Message... '/>
                            {isSending && <span className='text-green-600 flex gap-2 items-center'>Message Send <BiCheckCircle/></span>}
                            {isError && <span className='text-red-600 flex gap-2 items-center'>Error Sending Message <BsExclamationCircle/></span>}
                            <div  className={twMerge('w-full flex justify-center','duration-1000 transition-all ', currrentView ? 'opacity-100' : 'opacity-0')}>
                                <button type="submit" disabled={ !!isSending} className={twMerge(' rounded-lg   p-3 w-full bg-gradient-to-t from-purple-900 to-blue-900 text-white ', isSending && 'cursor-not-allowed opacity-25')}>{'Send'}</button>
                            </div>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    )
}

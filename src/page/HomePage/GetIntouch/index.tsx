import React from 'react'
// import { useOnScreen } from 'utilities/UseOnScreen'
import emailJs from '@emailjs/browser'


const Service_ID = 'service_3d1soey'
const emailTemplate = 'template_w9ia62s'
const publicKey='_p02JMH-OM30WSzUh'

export const GetInTouch = () => {
    // const [data  , setData] = React.useState<emailType | null>(null)
    const ref = React.useRef<HTMLDivElement>(null)
    const formRef =  React.useRef<HTMLFormElement | null>(null)



    const sendEmail  = (e : React.FormEvent) => { 
        e.preventDefault()
        console.log(formRef.current)

        emailJs.sendForm(Service_ID , emailTemplate , formRef.current as HTMLFormElement , publicKey)
            .then((result)=> {
                console.log(result.text)
                window.location.reload()
            }
            ).catch((error)=>
                console.log(error)
            )
    }


    return (
        <div ref={ref} className=' flex items-center bg-white' id="contact">
            <div className='w-full  my-10  flex justify-center ' >
                <div className='flex flex-col bg-white p-10 lowercase w-full md:w-[60%] leading-none'>
                    <div className='text-[40px] lg:text-[70px] font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-purple-900 to-blue-900'>Email me here.</div>
                    <div className='text-[20px]'>Want to work with me? Message me now!</div>
                    <form ref={formRef} onSubmit={(e)=>sendEmail(e)}>
                        <div className='flex flex-col gap-5 mt-10'>
                            <input id="email" name='email' className='w-full p-4 border  rounded-lg focus:shadow-purple-900 focus:shadow outline-none' placeholder='Enter your Email Address'/>
                            <input id="name" name='name' className='w-full p-4 border  rounded-lg focus:shadow-purple-900 focus:shadow outline-none' placeholder='Enter your Name'/>
                            <input id="subject" name='subject' className='w-full p-4 border  rounded-lg focus:shadow-purple-900 focus:shadow outline-none' placeholder='Enter Subject'/>
                            <textarea name='message' rows={5} className='resize-none border rounded-lg p-4 focus:shadow-purple-900 focus:shadow outline-none' placeholder='Message... '/>
                            <div className='w-full flex justify-center'>
                                <button type="submit" className='font-bold  rounded-lg  py-2 w-full bg-gradient-to-t from-purple-900 to-blue-900 text-white '>Submit</button>
                            </div>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import myImage from 'assets/myImage2.webp'
import DynamicBg from 'assets/subtle-prism.svg'


export const Banner = () => {
    
    return (
        <div className='h-fit items-center z-0 relative flex ' id='name'    
            style={{
                backgroundImage: `url(${DynamicBg})` ,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
            }}>

            <div className={' relative h-[100vh] w-full overflow-hidden  drop-shadow-sm flex items-center'} 
                style={{
                    backgroundImage : `url(${myImage})`,
                    backgroundSize:'130vh' ,
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'60vh -23vh',
                }}
            >

                <div className=' z-20 mx-[70px] tracking-wider w-full '>
                    <div className='px-5'>
                        <h1 className='font-Sharetechmo font-bold w-fit text-[50px] leading-none'><span className='text-[#393E46]'>Hello! I&apos;m </span> </h1>
                        <h1 className='font-extrabold text-[90px] filter drop-shadow-lg leading-none text-[#00ADB5]'>Jacob Allen</h1>
                        <h1 className="font-extrabold text-[90px] leading-none text-[#00ADB5]"> Valderama</h1>
                    </div>
                    <div className='mt-9'>

                        <div className='w-[45vw]  rounded-md bg-white/40 backdrop-blur-md p-5 '>
                            <h1 className='font-bold text-[25px] font-Sharetechmo  text-[#393E46] tracking-wider '>
                      Front-end Developer and Aspiring Designer
                            </h1>
                            <div className='text-[14px]'>
                                <p>Aspiring designer and web developer skilled in front-end development, capable of creating user-friendly online apps, knowledgable in Java, JavaScript, TypeScript, and informed about
popular frameworks such as React TS and JS. outstanding debugging and issue-solving
abilities, a keen eye for detail, and a passion for producing high-caliber code.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                
                </div>

            </div>
        </div>
    )
}

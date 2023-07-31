import React from 'react'
import myImage from 'assets/myImage2.webp'
import DynamicBg from 'assets/subtle-prism.svg'


export const Banner = () => {
    
    return (
        <div className='h-fit items-center relative flex' id='aboutme'    
            style={{
                backgroundImage: `url(${DynamicBg})` ,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
            }}>
            <div className={' relative h-[100vh] w-full overflow-hidden justify-evenly  drop-shadow-md flex items-center'} 
                // style={{
                //     backgroundImage : `url(${myImage})`,
                //     backgroundSize:'130vh' ,
                //     backgroundRepeat:'no-repeat',
                //     backgroundPosition:'60vh -23vh',
                //     backgroundAttachment:'fixed'
                // }}
            >          

                <div className=' z-20  tracking-wider '>
                    <div className='px-5'>
                        <h1 className='font-Sharetechmo font-bold w-fit text-[50px] leading-none'><span className='text-[#393E46]'>Hello I&apos;m </span> </h1>
                        <div  className=''>
                            <h1 className='font-extrabold text-[90px] filter drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-b from-purple-800 to-blue-600 leading-none '>Jacob Allen</h1>
                            <h1 className="font-extrabold text-[90px]  filter drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-b from-purple-800 to-blue-600  leading-none "> Valderama</h1>
                        </div>
                    </div>
                    <div className=''>
                        <div className='w-[45vw]  rounded-md p-5 '>
                            <h1 className='font-bold text-[25px] font-Sharetechmo  text-[#393E46] tracking-wider '>
                      Front-end Developer 
                            </h1>
                            <div className='text-[14px]'>
                                <p>A web developer skilled in front-end development, capable of creating user-friendly online apps, knowledgable in Java, JavaScript, TypeScript, and informed about
popular frameworks such as React TS and JS. outstanding debugging and issue-solving
abilities, a keen eye for detail, and a passion for producing high-caliber code.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <img src={myImage} className='relative h-[100vh] rounded-[40px] object-contain '></img>
                </div>
                
            </div>
        </div>
    )
}

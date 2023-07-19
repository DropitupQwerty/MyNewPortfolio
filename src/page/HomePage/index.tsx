import React from 'react'
// import { AppNavigationBar } from 'components/AppNavigationBar'
import myImage from 'assets/myImage2.webp'
import { BsMouse ,BsDot } from 'react-icons/bs'
import {GiDiamonds} from 'react-icons/gi'
// import {BiLogoJava, BiLogoJavascript, BiLogoReact, BiLogoTypescript} from 'react-icons/bi'
// import {SiAdobephotoshop} from 'react-icons/si'
import { AppNavigationBar } from 'components/AppNavigationBar'
import { AppSkillsCard } from 'components/AppSkillsCard'
// TbDiamondsFilled ,


const hrefs = [ 
    {
        pathname: 'myname',
        id:'name'
    },
    {
        pathname: 'knowledge',
        id:'knowledge'
    },
    {
        pathname: 'myname',
        id:'name'
    },
    {
        pathname: 'myname',
        id:'name'
    },
]





export const HomePage = () => {

    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }


    return (
        <div className='relative '>
            <AppNavigationBar/>
            <div className='h-fit items-center z-0 relative flex ' id='name'>
                <div className={'h-[100vh] w-full overflow-hidden font-Montserrat  rounded-br-[70px] shadow-md  flex items-center'} 
                    style={{
                        backgroundImage : `url(${myImage})`,
                        backgroundSize:'130vh' ,
                        backgroundRepeat:'no-repeat',
                        backgroundPosition:'60vh -23vh',
                        backgroundAttachment:'fixed'
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

            <AppSkillsCard/>

            {/* <div className='font-Montserrat text-center mt-20 text-[30px] text-[#00ADB5]'>
                    <div>&quot;Programming is the art of algorithm design and the craft of debugging errant code&quot; - Ellen Ullman</div>
                </div> */}

            <div className='h-[100vh] px-[100px]  w-full font-Montserrat '>
                <div className='flex  flex-row-reverse justify-between gap-10 items-center my-14'>
                    <span className='w-[80%] h-[1px] bg-[#00ADB5] '></span>
                    {/* <span><BsDot/></span> */}
                    <div className='w-[50vw] '>
                        <h1 className='text-[50px]  text-[#00ADB5] font-extrabold lowercase   bg-clip-text drop-shadow-lg tracking-[6px]'>
                        Thesis Project And Collaborative Projects 
                        </h1>
                        {/* <p className='mt-2' >I Build websites with these programming languages , frameworks and Dev Tools . Hoping to gain more a lot of new programming languages and frameworks   </p> */}
                    </div>
                </div>
                <div className='px-[100px]'>
                    <div className='h-[400px] w-[350px] border '>

                    </div>
                </div>
            </div>

            <div className='h-[20vh] '>Get in touch</div>

            {/* Mouse Animation  */}
            <div className=' bottom-5 flex justify-center w-full z-100 fixed' >
                <div className='flex flex-col items-center  text-white  animate-bounce'>
                    <BsMouse className="text-[30px]  filter rotate-180  drop-shadow-md"/>
                    <span><BsDot/></span>
                </div>
            </div>


            <div className='fixed z-100 flex items-center  top-0 right-4 h-full ' >
                <div className='flex flex-col gap-5 items-center'>
                    <span><BsDot/></span>
                    <span className='h-[40px] w-[2px] bg-[#393E46]'></span>
                    {hrefs.map((href ,index)=>
                        <button onClick={()=>handleClickScroll(href.id)} key={index} >
                            {/* <div className='h-[10px] w-[10px] border border-black rotate-45 hover:bg-[#F3E99F] ease-out duration-100'></div> */}
                            <span><GiDiamonds className="text-xl hover:stroke-black filter drop-shadow-lg hover:scale-125 ease-in-out text-[#393E46] duration-300 hover:opacity-50 "/></span>
                        </button>
                    )}
                    <span className='h-[40px] w-[2px] bg-[#393E46]'></span>
                    <span><BsDot/></span>
                  
                </div>
            </div>
        </div>
    )
}

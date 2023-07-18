import React from 'react'
// import { AppNavigationBar } from 'components/AppNavigationBar'
import myImage from 'assets/myImage2.png'
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
        <div className='bg-[#fff] relative'>
            <AppNavigationBar/>
            <div className='h-fit items-center z-0 relative flex ' id='name'>
                <div className={'h-[100vh] w-full overflow-hidden bg-[#f5f5f5] rounded-br-[70px] shadow-md  flex items-center'} 
                    style={{
                        backgroundImage : `url(${myImage})`,
                        backgroundSize:'130vh' ,
                        backgroundRepeat:'no-repeat',
                        backgroundPosition:'60vh -23vh'
                    }}
                >
                    <div className='font-Sharetechmo relative z-20 mx-[70px] tracking-wider'>
                
                        <h1 className=' font-bold w-fit text-[50px] leading-none'><span className='text-[#393E46]'>Hello! I&apos;m </span>
                        </h1>
                        <h1 className='font-extrabold text-[100px] filter drop-shadow-lg leading-none text-[#00ADB5]'>
                             Jacob Allen
                        </h1>
                        <h1
                            className="font-extrabold text-[100px] leading-none text-[#00ADB5]"
                        > Valderama</h1>
                        <h1 className='font-bold text-[30px] leading-none text-[#393E46] tracking-wider '>
                              Im a Front-end Developer 
                        </h1>
                    </div>
                </div>
            </div>


            <AppSkillsCard/>


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
                            <span><GiDiamonds className="text-xl hover: filter drop-shadow-lg hover:scale-125 ease-in-out text-[#393E46] duration-300 hover:opacity-50 "/></span>
                        </button>
                    )}
                    <span className='h-[40px] w-[2px] bg-[#393E46]'></span>
                    <span><BsDot/></span>
                  
                </div>
            </div>
        </div>
    )
}

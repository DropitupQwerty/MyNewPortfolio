import React, { useEffect} from 'react'
import { AppNavigationBar } from 'components/AppNavigationBar'
import { SkillsAndLanguages } from 'page/HomePage/SkillAndLanguages'
import { Projects } from 'page/HomePage/Projects'
import { MyContacts } from 'page/HomePage/MyContacts'
import { Banner } from 'page/HomePage/Banner'
import { pathType } from 'types/pathType'
// import { AppSideButtons } from 'components/AppSideButtons'
// import { Fade ,Slide } from '@mui/material'



const paths: pathType[] = [
    {
        pathname: 'About Me',
        href:'aboutme'
    },
    {
        pathname: 'Skills',
        href:'skills'
    },
    {
        pathname: 'Projects',
        href:'projects'
    },
    {
        pathname: 'Contact',
        href:''
    },
    {
        pathname: 'My Resume',
        href:''
    },
]

export const HomePage = () => {
    // const [scroll, setScroll] = useState(0)
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            console.log(scrollTop)
            
            // setScroll(scrollTop)
        }
  
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
  

    return (
        <div className='relative select-none' >
            <AppNavigationBar path={paths}/>
            <Banner/>
            <SkillsAndLanguages/>
            <Projects/>
            <MyContacts/>
            {/* <AppSideButtons path={paths}/> */}
        </div>
    )
}

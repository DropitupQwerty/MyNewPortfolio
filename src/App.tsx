import React from 'react'
import { AppNavigationBar } from 'components/AppNavigationBar'
import { SkillsAndLanguages } from 'page/HomePage/SkillAndLanguages'
import { Projects } from 'page/HomePage/Projects'
import { MyContacts } from 'page/HomePage/MyContacts'
import { Banner } from 'page/HomePage/Banner'
import { GetInTouch } from 'page/HomePage/GetIntouch'
import { paths } from 'utilities/Paths'
import { AppLayout } from 'components/AppLayout'
import { AboutMe } from 'page/HomePage/AboutMe'

function App() {
    return (
        <div>
            <AppLayout >
                <AppNavigationBar path={paths}/>
                <Banner/>
                <AboutMe/>
                <SkillsAndLanguages/>
                <Projects/> 
                <GetInTouch/>
                <MyContacts />
            </AppLayout>
        </div>
    )
}

export default App

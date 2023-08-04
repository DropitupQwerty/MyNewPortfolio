import React from 'react'

export const ScrollPosition = () => {
    const [scrollPos, setScrollPos] = React.useState(0)

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.pageYOffset || document.documentElement.scrollTop
            setScrollPos(scrollValue)
        }
    
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return scrollPos
}




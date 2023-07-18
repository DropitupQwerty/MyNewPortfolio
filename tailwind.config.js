


/** @type {import('tailwindcss').Config} */




export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: { 
            fontFamily: {
                'Montserrat': ['Montserrat', 'sans-serif'],
                'Sharetechmo' : ['Share Tech Mono', 'monospace'],
                'Ubuntu' : ['Ubuntu' , 'monospace']
            },
            backgroundImage : {
                'myPicture' : 'url(\'/assets/myImage.png\')'
            }
        },
    },
    plugins: [],
}


import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const areactElement = React.createElement(
    "a",
    {href: "https://google.com", target: "_blank"},
    "Click to visit google"
)


createRoot(document.getElementById('root')).render(
 
    areactElement

)

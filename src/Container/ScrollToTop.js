import React, { useState } from 'react'
import {animateScroll as scroll } from 'react-scroll'
import "./ScrollToTop.css";


const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        scrolled > 300 ? setVisible(true) : setVisible(false);
    }

    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    window.addEventListener('scroll', toggleVisible);

    return (
        <button
            id="ScrollToTop"
            onClick={scrollToTop}
            style = {{display : visible ? 'block' : "none"}}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
            </svg>
        </button>
    )
}

export { ScrollToTop }
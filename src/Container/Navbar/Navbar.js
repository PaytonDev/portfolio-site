import React, { useState } from 'react';
import { NavbarLinks } from './NavbarLinks'
import "./Navbar.css"

const Navbar = () => {
    const [visible, setVisible] = useState(false)

    const toggleNavVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        scrolled > 940 ? setVisible(true) : setVisible(false);
    }

    window.addEventListener("scroll", toggleNavVisible)

    return (
        <nav
            className={ visible ? "Navbar animate__animated animate__slideInDown " : "Navbar animate__animated animate__slideOutUp"}
            style = {{display : visible ? 'flex' : "none"}}
        >
            <NavbarLinks />
        </nav>
    )
}

export { Navbar };
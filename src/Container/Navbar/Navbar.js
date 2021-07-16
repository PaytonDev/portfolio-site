import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarLinks } from './NavbarLinks'
import "./Navbar.css"
import "./NavbarLink.css"

const NavbarContainer = () => {
    const [visible, setVisible] = useState(false)

    const toggleNavVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        scrolled > 850 ? setVisible(true) : setVisible(false);
    }


    window.addEventListener("scroll", toggleNavVisible)

    return (
        // <div  style = {{display : visible ? 'flex' : "none"}}>
            <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="lg" style = {{display : visible ? 'flex' : "none"}} className={ visible ? "animate__animated animate__slideInDown mr-auto" : "animate__animated animate__slideOutUp"}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <NavbarLinks />
                    </ Navbar.Collapse>
            </Navbar>
        // </div>
    )
}

export { NavbarContainer };
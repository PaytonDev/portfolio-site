import React from 'react';
import { NavbarLinks } from './NavbarLinks'
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavbarLinks />
        </nav>
    )
}

export { Navbar };
import React from 'react';
import { NavBarLink } from './NavbarLink';
import "./NavbarLinks.css"
import { Link } from 'react-scroll'

const NavbarLinks = () => {

    return (
        <div className="NavbarLinks">
                <Link 
                    to='about-me' 
                    smooth={true} 
                    duration={500} 
                    spy={true}  
                    className="NavbarLink" 
                    exact='true' 
                    key='about-me'
                >
                    About Me
                </Link>
                <Link 
                    to='skills' 
                    smooth={true} 
                    duration={500} 
                    spy={true}  
                    className="NavbarLink" 
                    exact='true' 
                    key="skills"
                >
                    Skills
                </Link>
                <NavBarLink name="Resume" path='https://docs.google.com/document/d/1SgLPZmhQmgbMM05Ic4K9zIJTSEXhyi3qgkVWoZa5Bwg/edit?usp=sharing' /> 
                <Link 
                    to='projects'
                    smooth={true} 
                    duration={500} 
                    spy={true}  
                    className="NavbarLink" 
                    exact='true' 
                    key='projects'
                >
                    Projects
                </Link>
                <Link 
                    to='contact'
                    smooth={true} 
                    duration={500} 
                    spy={true}  
                    className="NavbarLink" 
                    exact='true' 
                    key='contact'
                    offset={-50}
                >
                    Contact
                </Link>
        </div>
    )
}

export { NavbarLinks };
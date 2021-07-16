import React from 'react';
import Nav from 'react-bootstrap/Nav';
import "./NavbarLinks.css"
import "./NavbarLink.css"
import { scroller } from 'react-scroll'

const NavbarLinks = () => {

    return (
        <Nav className="NavbarLinks">
            <Nav.Link
                onClick={() => scroller.scrollTo(
                    'about-me', {
                        smooth:true, 
                        duration:500, 
                        spy:true,
                        exact: true,
                        offset: -100
                    }
                )}
                className="NavbarLink"  
                id="aboutme"
                key='about-me'
            >
                About Me
            </Nav.Link>
            <Nav.Link 
                onClick={() => scroller.scrollTo(
                'skills', {
                    smooth:true, 
                    duration:500, 
                    spy:true,
                    exact: true,
                }
            )}
                className="NavbarLink" 
                key="skills"
            >
                Skills
            </Nav.Link>
            <Nav.Link
                    name="Resume" 
                    href='https://docs.google.com/document/d/1SgLPZmhQmgbMM05Ic4K9zIJTSEXhyi3qgkVWoZa5Bwg/edit?usp=sharing'
                    className= "NavbarLink"
                    target="_blank"
                    rel="noreferrer"
            >
                Resume
            </Nav.Link> 
            <Nav.Link 
                onClick={() => scroller.scrollTo(
                    'projects', {
                        smooth:true, 
                        duration:500, 
                        spy:true,
                        exact: true,
                        offset: -72
                    }
                )}
                className="NavbarLink" 
                key='projects'
            >
                Projects
            </Nav.Link>
            <Nav.Link 
                onClick={() => scroller.scrollTo(
                    'contact', {
                        smooth:true, 
                        duration:500, 
                        spy:true,
                        exact: true,
                        offset: -70
                    }
                )}
                className="NavbarLink" 
                key='contact'
            >
                Contact
            </Nav.Link>
        </Nav>
    )
}

export { NavbarLinks };
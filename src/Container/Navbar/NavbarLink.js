import React from 'react';
import './NavbarLink.css';


const NavBarLink = ({name, path}) => {
    return (
        <div className='NavbarLink'>
            <a href={path} target="_blank" rel="noreferrer">{name}</a>
        </div>
    )
}



const links = [
    {
    id: 'about-me',
    name: "About Me",
    path: '#'
    },
    {
    id: "skills",
    name: "Skills",
    path: '#'
    },
    {
    id: "resume",
    name: "Resume",
    path: 'https://docs.google.com/document/d/1SgLPZmhQmgbMM05Ic4K9zIJTSEXhyi3qgkVWoZa5Bwg/edit?usp=sharing'
    },
    {
    id: "projects",
    name: "Projects",
    path: '#'
    },
    {
    id: "contact",
    name: "Contact",
    path: '#'
    }

]

export {NavBarLink, links};
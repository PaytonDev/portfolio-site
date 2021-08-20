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
    path: 'https://drive.google.com/file/d/12Uk9sbmSeSTwWO21z15WSxIUhwWuVVKx/view?usp=sharing'
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

import React from 'react'
import { NavbarContainer } from './Navbar/Navbar'
import { Hero } from "./Hero-Section/Hero"
import "./Container.css"
import { AboutMe } from './About-Me/AboutMe'
import { Skills } from './Skills/Skills'
import { Projects } from './Projects/Projects'
import { Contact } from './Contact/Contact'

const Container = () => {
    return (
        <>
            <NavbarContainer />
            <div className="hero-bg">
                <Hero />
            </div>
            <div className="container-bg">
                <div className='container'>
                    <AboutMe />
                    <hr />
                    <Skills />
                    <hr />
                    <Projects />
                    <hr />
                    <Contact />
                </div>
            </div>
            
        </>
    )
}

export { Container };
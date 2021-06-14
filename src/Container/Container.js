import React from 'react'
import { Navbar } from "./Navbar/Navbar"
import { Hero } from "./Hero-Section/Hero"
import "./Container.css"
import { AboutMe } from './About-Me/AboutMe'
import { Skills } from './Skills/Skills'
import { Projects } from './Projects/Projects'
import { Contact } from './Contact/Contact'

const Container = () => {
    return (
        <>
            <div className="bg-image">
                <div className="bg-blur">
                    <div className='container'>
                        <Navbar />
                        <Hero />
                        <AboutMe />
                        <hr/>
                        <Skills />
                        <hr />
                        <Projects />
                        <hr />
                        <Contact />
                    </div>
                </div>
            </div>
        </>
    )
}

export { Container };
import React from 'react';
import "./Projects.css"
import { ProjectCard } from "./ProjectCard"
import WalletDashboardVid from "./WalletDashboardVid.gif"
import FieldImpHub from "./FieldImpHub.png"
import MusicLandingPage from "./MusicLandingPage.png"

const Projects = () => {
    return (
        <div className="Projects-container section" id="projects">
            <p className="Projects-header">PROJECTS</p>
            <div className="Projects">
                {projectArr.map((proj) => (
                    <ProjectCard
                        title={proj.title}
                        image={proj.image}
                        stack={proj.stack}
                        desc={proj.desc}
                        codeLink={proj.codeLink}
                        siteLink={proj.siteLink}
                        key={proj.id}
                    />
                ))}
            </div>
        </div>
    )
}

const projectArr = [
    {
        id: 1,
        title: 'Wallet Dashboard',
        image: WalletDashboardVid,
        stack: "React, Reactstrap, CSS, Chart.js",
        desc: "A dashboard to showcase and track a musician's various incomes.",
        codeLink: "https://github.com/PaytonDev/Wallet-Dashboard",
        siteLink: "https://paytondev.github.io/Wallet-Dashboard/"
    },
    {
        id: 2,
        title: 'Field Implementation Hub',
        image: FieldImpHub,
        stack: "HTML/Bootstrap, Javascript, Python/Flask, Postgres, Google Maps API",
        desc: "At a previous job, I worked as a Field Implementation Specialist. Tired of having to look in multiple places for general info. I began building a tool to solve the problem.",
        codeLink: "https://github.com/PaytonDev/Field_Implementation_Hub",
        siteLink: "https://field-implementation-hub.herokuapp.com/"
    },
    {
        id: 3,
        title: 'Music Artist Landing Page',
        image: MusicLandingPage,
        stack: "HTML/Bootstrap, CSS",
        desc: "Landing Page for music artist, Kehlani's, single Toxic. I built this to show strong understanding of Bootstrap and flex properties as well as responsiveness testing.",
        codeLink: "https://github.com/PaytonDev/music-landing-page",
        siteLink: "https://paytondev.github.io/music-landing-page/"
    },
]

export { Projects };
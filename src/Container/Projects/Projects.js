import React, { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"
import "./Projects.css"
import { ProjectRow } from "./ProjectRow"
import { Container } from 'reactstrap';
import WalletDashboardVid from "./WalletDashboardVid.gif"
import ImpInstallHubVid from "./ImpInstallHubVid.gif"
import PortfolioNewVid from "./PortfolioNew.gif"

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 2000})
    }, [])
    return (
            <Container className="Projects-container" fluid data-aos="fade-up" id="projects">
                <div className="Projects-text">
                    <p className="Projects-header">Projects</p>
                </div>
                {projectArr.map((proj) => (
                    <ProjectRow
                        title={proj.title}
                        image={proj.image}
                        stack={proj.stack}
                        desc={proj.desc}
                        codeLink={proj.codeLink}
                        siteLink={proj.siteLink}
                        key={proj.id}
                    />
                ))}
            </Container>
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
        image: ImpInstallHubVid,
        stack: "HTML/Bootstrap, Javascript, Python/Flask, Postgres, Google Maps API",
        desc: "At a previous job, I worked as a Field Implementation Specialist. Tired of having to look in multiple places for general info. I began building a tool to solve the problem.",
        codeLink: "https://github.com/PaytonDev/Field_Implementation_Hub",
        siteLink: "https://field-implementation-hub.herokuapp.com/"
    },
    {
        id: 3,
        title: 'My Portfolio Site',
        image: PortfolioNewVid,
        stack: "HTML/ReactStrap, CSS, React, Node.js",
        desc: "The website you're on right now! My deeper dive into animate.css and different react tools such as react-scroll, AOS (Animate on Scroll), and Reactstrap.",
        // codeLink: "https://github.com/PaytonDev/music-landing-page", 
        siteLink: "https://breeanapayton.com"
    },
]

export { Projects };
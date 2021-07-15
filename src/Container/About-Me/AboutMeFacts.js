import React from 'react';
import "./AboutMeFacts.css"
import { ReactComponent as ChartSVG } from './chart.svg'
import { ReactComponent as InstallSVG } from './install.svg'
import { ReactComponent as MusicSVG } from './music.svg'
import { ReactComponent as PlayingCardSVG } from './playing_card.svg'

const AboutMeFacts = () => {
    return (
        <div className="AboutMeFacts-container">
            <div className="AboutMeFacts">
                <div className="AboutMe-fact">
                    <div className="fact-text"> Currently working on projects to assist musicians who couldn't tour due to Covid-19.</div>
                    <div>
                        <MusicSVG />
                    </div>
                </div>
                <div className="AboutMe-fact">
                    <div className="fact-text"> Data visiualization is one of my favorite parts of Front End Engineering. </div>
                    <div>
                        <ChartSVG />
                    </div>
                </div>
                <div className="AboutMe-fact">
                    <div className="fact-text"> I have installed and configured computer hardware and software at every job I've had. Even when not in the job description.</div>
                    <div>
                        <InstallSVG />
                    </div>
                </div>
                <div className="AboutMe-fact">
                    <div className="fact-text"> I fell in love with tech and puzzles when I first played solitaire on the family PC.</div>
                    <div>
                        <PlayingCardSVG />
                    </div>
                </div>
            </div>
        </div>
    )
}


export {AboutMeFacts};
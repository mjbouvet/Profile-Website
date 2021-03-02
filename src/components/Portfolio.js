import React from "react"
import download1 from "../images/download1.png";
import download2 from "../images/download2.png";
import download3 from "../images/download3.png";
import download4 from "../images/download4.png";
// FONT AWESOME IMPORTS //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//REACT POPUP BOX //
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

//pic 1
const openPopupbox1 = () => {
    const content = (
        <>
        <img className = "portfolio-image-popupbox" src={download1} alt="Netflix Clone Project..."/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, temporibus?</p>
        <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/mjbouvet/Profile-Website/tree/experience")}>https://github.com/mjbouvet/Profile-Website/tree/experience</a>
        </>

    )
    PopupboxManager.open({content})
}

const popupboxConfig1 = {
    titleBar: {
        enable: true,
        text: "Picture 1"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

//pic 2
const openPopupbox2 = () => {
    const content = (
        <>
        <img className = "portfolio-image-popupbox" src={download2} alt="City Guide Project..."/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, temporibus?</p>
        <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/mjbouvet/Profile-Website/tree/experience")}>https://github.com/mjbouvet/Profile-Website/tree/experience</a>
        </>

    )
    PopupboxManager.open({content})
}

const popupboxConfig2 = {
    titleBar: {
        enable: true,
        text: "Picture 2"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

//pic 3
const openPopupbox3 = () => {
    const content = (
        <>
        <img className = "portfolio-image-popupbox" src={download2} alt="Portfolio React and Material UI Project..."/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, temporibus?</p>
        <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/mjbouvet/Profile-Website/tree/experience")}>https://github.com/mjbouvet/Profile-Website/tree/experience</a>
        </>

    )
    PopupboxManager.open({content})
}

const popupboxConfig3 = {
    titleBar: {
        enable: true,
        text: "Picture 3"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

//pic 4
const openPopupbox4 = () => {
    const content = (
        <>
        <img className = "portfolio-image-popupbox" src={download2} alt="Task Manager React and Redux Project..."/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, temporibus?</p>
        <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/mjbouvet/Profile-Website/tree/experience")}>https://github.com/mjbouvet/Profile-Website/tree/experience</a>
        </>

    )
    PopupboxManager.open({content})
}

const popupboxConfig4 = {
    titleBar: {
        enable: true,
        text: "Picture 4"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div class="portfolio-image-box" onClick={openPopupbox1}>
                        <img className="portfolio-image" src={download1} alt="Netflix Clone Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div class="portfolio-image-box" onClick = {openPopupbox2}>
                        <img className="portfolio-image" src={download2} alt="City Guide Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div class="portfolio-image-box" onClick = {openPopupbox3}>
                        <img className="portfolio-image" src={download3} alt="Portfolio React and Material UI Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div class="portfolio-image-box" onClick = {openPopupbox4}>
                        <img className="portfolio-image" src={download4} alt="Task Manager React and Redux Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer{...popupboxConfig1}/>
            <PopupboxContainer{...popupboxConfig2}/>
            <PopupboxContainer{...popupboxConfig3}/>
            <PopupboxContainer{...popupboxConfig4}/>
        </div>
    )
}

export default Portfolio

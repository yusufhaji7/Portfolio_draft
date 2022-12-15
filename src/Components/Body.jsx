import React from "react";
import profile from "../assets/profile.jpg"
import UI from "../assets/UI.jpg"
import Development from "../assets/development.jpg"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import Data from "../data/random.json"
import { useState } from "react";

export default function Body(){

    const [index, setIndex] = useState(0)
    const [transition, setTransition] = useState(true)
    
    useEffect(() => {
        Aos.init({duration: 3000})
    }, [])

    return (
        <div>
            <div className="title">
                WEB-DEVELOPER <br />
                <span className="quote">"To code is fun, to build is art!!"</span>
                <hr />
            </div>
            <div className="container">
                <div data-aos="fade-right" className="child1"><img className="profile" src={profile}/></div>
                <div data-aos="fade-left" className="child2">
                     <div className="about" id="about">About Me</div>
                     <div className="about-text">Hard-working, Front-end web developer having a skill set of designing, coding, 
                     and testing Web Applications and creating elegant components in the least amount of time. 
                     I am now learning ALX software engineering program in order to develop my programming skill.
                     I am working on different projects to increase my experience and I hope you get good service if you give me the chance to work with you.</div>
                </div>
            </div>


            <div className="skills" id="skills">
                <div data-aos="fade-flip" className="skillheader" id="skills">Skills</div>
                <div className="languages">
                    <div data-aos="fade-up"><img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" /></div>
                    <div data-aos="fade-down"><img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" /></div>
                    <div data-aos="fade-up"><img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" /></div>
                    <div data-aos="fade-down"><img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" /></div>
                    <div data-aos="fade-up"><img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></div>
                    <div data-aos="fade-down"><img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /></div>
                    <div data-aos="fade-up"><img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" /></div>
                    <div data-aos="fade-down"><img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" /></div>
                    <div data-aos="fade-up"><img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" /></div>
                    <div data-aos="fade-down"><img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" /></div>
                    <div data-aos="fade-up"><img className="icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" /></div>
                </div>
            </div>

            <div>
                <div className="services" id="services">My Services</div>
                <div className="servicecontainer">
                    <div data-aos="fade-right" className="servicebox">
                        <img className="UI" src={UI}/>
                        <div className="servicetext">
                            <div className="servicetitles">&lt;Web Design&gt;</div>
                            <div className="service-explanation">I design your website from scratch and also give you same design from figma file you give me.</div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="servicebox">
                        <img className="development" src={Development}/>
                        <div className="servicetext">
                            <div className="servicetitles">&lt;Web Development&gt;</div>
                            <div className="service-explanation" id="second">I develop your website from scratch professionally with security, performance and reliability.</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="projects" id="projects">
                <div className="project-title">Projects</div>
                <div className="projects-list">Coming soon</div>
            </div>


            <div>
                <div className="random-thoughts">Random Things</div>
                <div className="random-container" data-aos="fade-up">
                    <div className="backward-arrow" onClick={() => setIndex(index > 0 ? index - 1 : index + 1)}>
                        <div>&larr;</div>
                    </div>
                    <div><img className="random-image" src={ Data[index].image }/></div>
                    <div className="random-text">
                        {Data[index].text}
                    </div>
                    <div className="forward-arrow" onClick={() => setIndex(index < 2 ? index + 1 : index - 2)}>
                        <div>&rarr;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
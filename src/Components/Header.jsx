import React from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Header(){

    useEffect(() => {
        Aos.init({duration: 3000})
    }, [])

    return (
        <div className="header" id="home">
            <div data-aos="fade-in" className="menu"><a href="#home">Home</a></div>
            <div data-aos="fade-in" className="menu"><a href="#skills">Skills</a></div>
            <div data-aos="fade-in" className="menu"><a href="#services">Services</a></div>
            <div data-aos="fade-in" className="menu"><a href="#projects">Projects</a></div>
            <div data-aos="fade-in" className="menu"><a href="#contacts">Contact</a></div>
            <div data-aos="fade-in" className="menu"><a href="#about">About</a></div>
        </div>
    )
}
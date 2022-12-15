import React from "react";
import Instagram from "../assets/instagram.png"
import Medium from "../assets/medium.png"
import Twitter from "../assets/twitter.png"
import Linkedin from "../assets/linkedin.png"
import Telegram from "../assets/telegram.png"
import QR from "../assets/QR.jpg"

export default function Footer(){
    return (
        <footer className="footer">
            <div className="contact" id="contacts">Contact</div>
            <div>
                <div><span className="email">Email:   </span><a href="https://yusufhadji873@gmail.com" target="_blank">yusufhadji873@gmail.com</a></div>
                <div>Phone Number:   +251960551073</div>
                <div className="social-container">
                    <div><a href="https://medium.com/@yusufhadji873" target="_blank"><img className="social-icons" src={Medium}/></a></div>
                    <div><a href="https://twitter.com/YusufHadjiMo" target="_blank"><img className="social-icons" src={Twitter}/></a></div>
                    <div><a href={QR} target="_blank"><img className="social-icons" src={Telegram}/></a></div>
                    <div><a href="https://www.linkedin.com/in/yusuf-hadji-41028319a" target="_blank"><img className="social-icons" src={Linkedin}/></a></div>
                </div>

                <div className="footer-color">&#169; Copyright 2022 Yusuf Haji.</div>
                <div className="footer-color">All rights reserved.</div>
            </div>
        </footer>
    )
}
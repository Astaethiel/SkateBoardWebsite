import React from 'react';
import logo from '../../Res/ASS.jpg';
import './Navbar.scss'

export default function Navbar({ isMobile }) {
    return (

        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a className="logo" href="#">
                        <img src={logo} height="140px" alt="" />
                    </a>
                </div>
                <div className="right">
                    <div className="menu row">
                        <ul class="nav col-12 col-lg">
                            <li><a href="#about" class="nav-link px-4 link-dark">About</a></li>
                            <li><a href="#gallery" class="nav-link px-4 link-dark">Gallery</a></li>
                            <li><a href="#contact" class="nav-link px-4 link-dark">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import logo from '../Res/ASS.jpg';

export default function Navbar() {
    return (
        <div className="navbar">
           <header class="wrapper">
    <div class="left">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <img src={logo} height="140px" alt="" />
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#about" class="nav-link px-4 link-dark">About</a></li>
          <li><a href="#gallery" class="nav-link px-4 link-dark">Gallery</a></li>
          <li><a href="#contact" class="nav-link px-4 link-dark">Contact</a></li>
        </ul>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
        </form>
      </div>
    </div>
  </header>
        
{/*
<div className={"navbar " + (menuOpen && "active")}>
<div className="wrapper">
  <div className="left">
    <a className="logo" href="#landing">
      placeholder
    </a>
  </div>
  <div className="right">
    {!isMobile && (
      <div className="menu">
        <a href="#about">about me</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact me</a>
      </div>
    )}

    {isMobile && (
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    )}
  </div>
</div>
    </div>*/}
    </div>
    )
}

import React, { useState } from "react";
import { IoLogoGithub, IoMailOutline, IoLogoLinkedin } from 'react-icons/io5';
import "typeface-roboto";
import './Header.css';

function Header() {

  return (
    <div className="headerWrapper">
      <div className="name">Anselm Liu</div>
      <div className="infoWrapper">
        <div className="info">
          <IoLogoGithub />
          <a href="https://github.com/liuanselm"  target="_blank" rel="noopener noreferrer">&nbsp;github</a>
        </div>
        <div className="info">
          <IoLogoLinkedin />
          <a href="https://linkedin.com/in/anselm-liu"  target="_blank" rel="noopener noreferrer">&nbsp;linkedin</a>
        </div>
      </div>
    </div>
  );
}

export default Header;

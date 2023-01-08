import React, { useState } from "react";
import { IoLogoGithub, IoMailOutline, IoLogoLinkedin } from 'react-icons/io5';
import "typeface-roboto";
import './Header.css';

function Header() {

  const [showcopy, setShowcopy] = useState(false)

  function copy(){
    navigator.clipboard.writeText("anselmliu@outlook.com");
    setTimeout(function(){
      setShowcopy(true)
    }, 2000)
    setShowcopy(false)
  }

  return (
    <div className="headerWrapper">
      <div className="name">Anselm Liu</div>
      <div className="infoWrapper">
        <div className="info">
          <IoMailOutline />
          <div onClick={copy}>&nbsp;anselmliu@outlook.com</div>
        </div>
        <div className="info">
          <IoLogoGithub />
          <a href="https://github.com/liuanselm"  target="_blank" rel="noopener noreferrer">&nbsp;https://github.com/liuanselm</a>
        </div>
        <div className="info">
          <IoLogoLinkedin />
          <a href="https://linkedin.com/in/anselm-liu"  target="_blank" rel="noopener noreferrer">&nbsp;www.linkedin.com/in/anselm-liu</a>
        </div>
      </div>
      {showcopy ? null : null}
    </div>
  );
}

export default Header;

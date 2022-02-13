import React from "react";
///css 
import '../css/navbar.css';
/// image
import logo from '../images/logo.png'
/// icons
import { FiTwitter } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa';

function NavBar() {
return(
  <div className="navbarMain">
  <div>
    <img className="logoSize" src={logo} alt="logo"/>
  </div>
  <div>
    <ul className="listNavbar">
      <li>Lore</li>
      <li>RoadMap</li>
      <li>Artist</li>
      <li>Team</li>
      <li>FAQ</li>
      <li><FiTwitter/></li>
      <li><SiMedium/></li>
      <li><FaInstagram/></li>
    </ul>
  </div>
  <div className="navbarButtons">
    <button className="navbarBtn">buy on magic</button>
    <button className="navbarBtn">join our Discord</button>
  </div>
  </div>
)
}

export default NavBar
import React , {useState} from "react";
///css 
import '../css/navbar.css';
/// image
import logo from '../images/logo.png'
/// icons
import { FiTwitter } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa';

/// import link router
import {HashLink as Link} from 'react-router-hash-link'
import {BrowserRouter} from 'react-router-dom'

function NavBar() {
  const [navbar , setNavbar] = useState(false);

const changeBackgroundNavBar = ()=>{
 if(window.scrollY >= 80){
  setNavbar(true)
 }else{
   setNavbar(false)
 }
}

window.addEventListener('scroll' , changeBackgroundNavBar)

return(
  <div className={navbar ? 'navbarMain active' : 'navbarMain'}> 
  <div>
    <img className="logoSize" src={logo} alt="logo"/>
  </div>
  <div>
    <ul className="listNavbar">
    <BrowserRouter>
      <li><Link smooth to="#section2">lora</Link></li>
      <li><Link smooth to="#Carousel">Gallery</Link></li>
      <li><Link smooth to="#section3">RoadMap</Link></li>
      <li><Link smooth to="#section1">Artist</Link></li>
      <li><Link smooth to="#section1">Team</Link></li>
      <li><Link smooth to="#section1">FAQ</Link></li>
      <li><FiTwitter/></li>
      <li><SiMedium/></li>
      <li><FaInstagram/></li>
      </BrowserRouter>
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
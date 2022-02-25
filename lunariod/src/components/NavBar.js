import React , {useState} from "react";
///css 
import '../css/navbar.css';
/// image
import logo from '../images/logo.png'
/// icons
import { FiTwitter } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

/// import link router
import {HashLink as Link} from 'react-router-hash-link'
import {BrowserRouter} from 'react-router-dom'

function NavBar() {
  const [navbar , setNavbar] = useState(false);
  const [hamburger , setHamburger] = useState(true)
  // const [screen , setScreen] = useState(425)

const changeBackgroundNavBar = ()=>{
 if(window.scrollY >= 80){
  setNavbar(true)
 }else{
   setNavbar(false)
 }
}

window.addEventListener('scroll' , changeBackgroundNavBar)

return(
  <div >
    <div className={navbar ? 'navbarMain active' : 'navbarMain'}>  
   <div>
     <img className="logoSize" src={logo} alt="logo"/>
   </div>
   <div >
   {hamburger ?( <ul className="listNavbar">
     <BrowserRouter className="mainNavBar">
       <li><Link smooth to="#section2">lora</Link></li>
       <li><Link smooth to="#Carousel">Gallery</Link></li>
       <li><Link smooth to="#section3">RoadMap</Link></li>
       <li><Link smooth to="#section4">Artist</Link></li>
       <li><Link smooth to="#section5">Team</Link></li>
       <li><Link smooth to="#section6">FAQ</Link></li>
       <li><FiTwitter/></li>
       <li><SiMedium/></li>
       <li><FaInstagram/></li>
       </BrowserRouter>
     </ul>) : null}
    
   </div>
   <div className="navbarButtons">
     <button className="navbarBtn">buy on magic</button>
     <button className="navbarBtn">join our Discord</button>
   </div>
   <GiHamburgerMenu className="hamburger" onClick={()=>setHamburger(!hamburger)}/>
   </div>
  </div>
 
)
}

export default NavBar
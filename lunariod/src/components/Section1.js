import React from "react";

/// components
import homeImg from '../images/homeNf.png';

/// css 
import '../css/section1.css'

function Section1 (){
  return(
    <div className="mainSection1" >
     <div className="imgAndText">
       <img className="imgSection1" src={homeImg} alt="home img"/>
       <div>
       <h1 className="textH1">we are</h1>
       <h2 className="textH2">lunaroig</h2>
       </div>
    
     </div>
    </div>
  )
}

export default Section1
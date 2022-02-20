import React from "react";

/// import css
import '../css/section3.css'

/// import image

import img7 from '../images/img7.png'

function Section3(){
  return(
    <div >
    <div className="section3Div" >
    <img className="img7" src={img7} alt="img7"/>
    <div>
    <h1>ZENTARO</h1>
    <div>
    <p className="textSection3">His father, Lunaroid, is a legendary shapeshifting samurai. He fought in World War 3 against the enemy force. However, he was captured by the enemy and brought to Japan. According to legend, it is said that Lunaroid's special capacity can turn into a destruction machine which Zentaro, his son, inherited. Zentaro is looking for his father's whereabouts and joins him to fight against the government. Now, 
    the new Shape-Shifting Samurai Zentaro wants to join the battle and walk with his father to form the most legendary duo in the world.</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Section3
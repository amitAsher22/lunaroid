import React from "react";
/// import img artist
import artistImg from '../images/artist.png';

/// import css 
import '../css/artist.css'

function Artist(){
  return(
    <div>
      <div className="artistMain">
        <img src={artistImg} alt="artist" className="artistImage"/>
        <h1 className="titleArtist">Itay Asher</h1>
        <h3 >the artist</h3>
        <p className="textArtist">Yaniv Shahar is a veteran designer with leading expertise in 3D and art design. His passion lies at the intersection of art and design. His works are a masterpiece of unconventional art laced with curiosity and a futuristic-driven idea to express the beauty of art in its purest form. Having collaborated with diverse clients across the world in the past and garnered a rich design experience in the process,
         Yaniv now explores his ever raving flair for art as an NFT art designer.</p>
      </div>
    </div>
  )
}

export default Artist
import React from "react";
import Avatar from 'react-avatar';
//// import images 
import img5 from '../images/img5.jpg'
import Atsushi from '../images/Atsushi.jpg'
import SHIRO from '../images/SHIRO.jpg'
import RAIDYN from '../images/RAIDYN.jpg'

//// import css

import '../css/Team.css'

function Team() {
  return (
    <div className="sectionMainTeam">
      <div >
        <h1 className="titleTeam"> Team</h1>
        <div className="Teamsimg">
          <div className="Teams">
            <Avatar  src={img5} alt="Mitsuaki" round={true} size="260" />
            <h2>Mitsuaki</h2>
            <p>Co Founder & Marketing headmaster</p>
          </div>
          <div className="Teams">
            <Avatar  src={Atsushi} alt="Atsushi"  round={true}  size="260"/>
            <h2>Atsushi</h2>
            <p>Co Founder & NFT master</p>
          </div>
          <div className="Teams">
            <Avatar  src={SHIRO} alt="SHIRO" round={true} size="260" />
            <h2>SHIRO</h2>
            <p>Blockchain Developer</p>
          </div>
          <div className="Teams">
            <Avatar  src={RAIDYN} alt="RAIDYN" round={true} size="260" />
            <h2>RAIDYN</h2>
            <p>Co Founder & Tech Expert</p>
          </div>
        </div>
      </div>
      <div className="text-second">
        <p>Chasing never ends - we will continually think and develop for you guys to build a stronger and smarter community. 
        The new roadmap will be revealed in the near future to keep you updated and involved in our future together as the Lunaroid community.</p>
      </div>
    </div>
  )
}

export default Team
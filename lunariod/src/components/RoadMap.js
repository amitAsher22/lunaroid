import React from "react";

/// import img rose 
import rose from '../images/rose.png'

/// import css
import '../css/roadMap.css'

function RoadMap() {
  return (
    <div>
      <div id="section3">
        
        <div className="roadMapMainSection">
          <img src={rose} alt="rose road map" />
          <div className="textRoadMap">
          <h2 className="titleRoedMap">Road Map</h2>
          <div>
          <h3>Unconventional Art</h3>
            <p>No more copy pasta of an existing art - Our unique art will define you as a holder from other NFT projects.
              We're still learning the Lunaroids legacy, as well as working on the rarity criteria and Lunaroid hierarchy. The minting date is the 20/1/2022</p>
          </div>
          <div>
          <h3>Lunaroid community</h3>
            <p>We are constantly working hard to grow and strengthen the Lunaroid community on Discord and Twitter so that when Lunaroid comes back from the unknown everyone will want it in their wallet. early adopters and the fanbase community will gain access to the presale (Whitelist). Holders giveaways, promoting on several platforms, contacting influencers, and charity initiatives are just a few of our future plans.
              As a start 3 days prior to the minting date, We will airdrop 20 Lunaroids to the most active members in order to thank our early adopters.</p>
          </div>
      
            <h3>Lunaroids NFT - Art with Utility</h3>
            <p>Lunaroid community is determined to improve on a daily basis. We'll be developing a fair and effective governance system for all our Lunaroid holders by implementing a proposal and voting mechanism within our discord server. Moreover,
              we are planning to list our project on all major Solana NFT marketplaces. We will establish quality partnerships - We currently have many partnerships in the works that will benefit Lunaroid holders and drive more awareness and demand to our project.</p>
            <h3>Free NFT drop.</h3>
            <p>Rumor has it that the son of Lunaroid - Zentaro is coming to town and some will say he is a better version of his father. Free set is already on the work behind the scenes. Holders will get a free airdrop that will symbolize their loyalty. More details soon???</p>
            <h3>Team expansion</h3>
            <p>We want to find the most talented people out there while we prioritize our own members As a start we need:
              - Discord manager.
              - Twitter manager.
              - Dedicated UX/UI Designer that will team up with our existing Designer.</p>
            <h3>The Lunaverse:</h3>
            <p>Lunaroid was born as a 3D character, thus connecting the Lunaverse to the Metaverse is half way done. We have great plans for Lunaroid and 'Lunaverse' brands, and the team is constantly working on new ideas. Holding a Lunaroid will be mandatory to access the full potential of the Lunaverse. Exclusive holders only merchandise store, access to the prestigious Lunaroid club, and whitelisting to future Lunaverse projects. Currently we have a future plan to enter the gaming industry. However, it is still very early for us to promise you such a thing. This kind of move requires us to have a strong community first that will have a demand for games. As for now we rather focus on our future NFT drop with magnificent art that will define us from other projects and then move to the next stage on our roadmap.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RoadMap
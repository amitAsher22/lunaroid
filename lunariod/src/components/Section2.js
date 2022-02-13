import React , {useState} from "react";

///// css
import '../css/Section2.css'
// react icon
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BsArrowDownShort } from 'react-icons/bs';

function Section2 (){
  const [show , setShow] = useState(false)
  return(
    <div className="section2Top">
      <div className="section2Main">
        <div className="divTextSection2">
          <h1 className="titleSection2">The Legend</h1>
        </div>
        <div className="allPSection2">
          <p>Created in the year 5070 just before the World War 3 broke out, Lunaroid, a Shape Shifting Samurai Masked Robot comes back to the city of Japan after it was thought to have been destroyed or captured by the enemy force. This time around, wearing another face half angelic and half demonic. After the war had ended due to signed peace treaties, the Japanese government sent spies to other nations in a search of their whereabouts.
           Not out of goodwill though, but to be sure that the Masked Samurai was gone for good</p>
           <p className="readMore" onClick={()=>{setShow(!show)}}>Read More {
             show ? <AiOutlineArrowUp/>: <BsArrowDownShort/>
           }</p>
           {
            show ?  <div >
            <p>First created to be a threat to their enemies, Lunaroid soon evolved to be able to express more human emotions. It sees the government’s corrupt practices and often calls them out on it. At some point, a selected part of government officials spread false stories about Lunaroid, claiming it must have killed some top officials. When the spies confirmed that it was not in all those countries,
             they were relieved to hear that their plan to eliminate it by isolating it in a hot zone during the war had worked out perfectly.</p><br/>
             <p>Years later, when Japan was experiencing the worst form of corruption in the history of humanity, with the government destroying their financial structure and oppressing the downtrodden, the long forgotten shape shifting masked Samurai warrior appears.
              This time around, to actually be the city’s vigilante, serving justice without holding back.</p>
           
          </div> :  null
           }
         
        </div>
      </div>
    </div>
  )
}

export default Section2
import React ,{useState} from "react";
import { FiPlus, FiMinus } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import '../css/FQA.css'


let AccordionSection = styled.div`
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
${'' /* position:relative; */}
${'' /* height:90vh;
width:100% */}


`;
let Container = styled.div`
${'' /* position: absolute; */}
${'' /* top:30%; */}

box-shadow: 2px 10px 35px 1px rgba(153,153,153,0.3);
`;

let Wrap = styled.div`
Background: #272727;
color:#fff;
display:flex;
${'' /* justify-content:space-between; */}
align-items:center;
width: 100%;
text-align:center;
cursor:pointer;

.question{
  display:flex;
  flex-wrap:wrap;
  padding:2rem;
  font-size: 2rem;
  width:100%;
}


`;

const Dropdown = styled.div`
  Background: #1c1c1c;
  color:#00ffb9;
  ${'' /* width:100%; */}
  height:100px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-bottom: 1px solid #00ffb9;
  color:white;
  font-size: 0.9rem;
  text-align:center

`;

function FAQ() {
  const [clicked ,setClicked]=useState(false);
  const toggle = index => {
    if(clicked === index){
      return setClicked(null)
    }
    setClicked(index)
  }
  
  let data = [
    {
      question: "Where can I buy Lunaroid NFT and be a part of the community?",
      answer: "Minting date and website will be published soon. We will post the details ahead of time on our Discord server and Twitter account. The whitelist will be reserved for early adopters and the fan base community. After the mint is over, there will be an option to trade on secondary market platforms."
    },
    {
      question: "How much does a minting of Lunaroid NFT cost?",
      answer: "The cost of Lunaroids NFT will be determined 24 hours before the mint date."
    },
    {
      question: "How was the Lunaroids NFT created?",
      answer: "Each Lunaroid has been constructed algorithmically by a special script that basically mixes a variety of hand-drawn properties with different possibilities in the following categories: Background, Clothing, Side vent, Mask, Element, Hair."
    },
    {
      question: "How to get whitelisted?",
      answer: "You can get whitelisted by inviting new members into our discord server or by staying active and help others inside our community, you can find more about our whitelist requirements in our discord server #whitelist-requirements ."
    },
    
  ]

  return (
    <div className="Accordion" id="section6">
      <h1 className="titleFQA">FAQ</h1>
      <IconContext.Provider value={{ color: '#00FFB9', size: '50px'  }}>
        <AccordionSection >
         <Container>
           {data.map((item , index)=>{
             return(
               <>
                  <Wrap onClick={()=> toggle(index)} key={index}>
                  <h1 className="question">{item.question}</h1>
                  <span>{clicked ===  index ? <FiMinus/> : <FiPlus/> }</span>
                  </Wrap>
                  {clicked === index ? (
                  <Dropdown>
                 <p className="answers">{item.answer}</p>
                 </Dropdown>
                  ): null}
              
               </>
             )
           })}
         </Container>
        </AccordionSection>
      </IconContext.Provider>

    </div>
  )
}
export default FAQ
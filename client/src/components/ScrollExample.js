import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { AnimateOnChange } from 'react-animation'

import '../styles/scroll.css'




 
const ScrollExample = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [steps] = useState([1,2,3,4,5])
  const [data, setData] = useState(["Scroll down to begin", "UNDERSTAND", "IDENTIFY", "ANALYZE", "PRIORITIZE"])
  const [scrollContent, setScrollContent] = useState([
    {
      "stanza": "",
      "content": "Scroll Down To Begin"
    },
    {
      "stanza": "The team should clearly understand the user requirements involved in the work that will be done in the upcoming sprint. By talking through the requirements to ensure a collective understanding, a team will often surface risks involved with the necessary work.",
      "content": "Understand"
    },
    {
  
      "stanza": "Once the team has a clear understanding of the user requirements involved in the initial product backlog, the team members can proceed to identify any potential risks related to their work for the upcoming sprint.",
      "content":"Identify"
      
    },
  
  
    {
      "stanza": "Once risks have been identified, the team can work together to group the risks by logical category or area. The categories would depend on the specific risks identified, but example categories could include: backlog grooming, communication, third parties, etc. Along with the process of group risks, the team also works together in the analyse step to rank the risks in order of concern. Any ranking system can be used, for example, each risk could be given a value 1-10, with 1 be very little concern and 10 being the most concerned. ",
      "content": "Analyse"
  
    },
  
    {
      "stanza": "Now that each risk has a value associated with it, you can order the risks by level of concern. In this phase, the team works together to select the most important risks to take on for this sprint. The team can decide on how many risks to prioritize each sprint, but prioritizing three risks in this step is a good measure..",
      "content": "Prioritize"
    },
  
    {
      "stanza": "In this exercise, you covered the steps a team shouold take in the risk management meeting that happens before each sprint. ",
      "content": "Great Job"
  
    }
    
  ])
  

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const onStepExit = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <React.Fragment>
    <div className="graphicContainer">
    <h3>Steps in a Pre-Sprint Risk Management Meeting</h3>
    <div className="scroller">
    <Scrollama onStepEnter={onStepEnter} onStepExit={onStepExit} offset={0.5}>
        {steps.map((_, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div
            className="leftContent"
              style={{
                opacity: currentStepIndex === stepIndex ? 1 : 0.2,
              }}
            >
              <p>{scrollContent[stepIndex].stanza}</p>
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>

    <div className="graphic">
    <AnimateOnChange
     animationIn="custom-animation-in 500ms ease-out forwards"
     animationOut="custom-animation-out 500ms ease-out forwards"
     durationOut={500}
    >
      {currentStepIndex === 0 ? <p>{scrollContent[currentStepIndex].content}</p> :
      <p>Step {currentStepIndex}: {scrollContent[currentStepIndex].content}</p>
      }
    </AnimateOnChange>
    </div>
    
    </div>
    </React.Fragment>
  );
};
 
export default ScrollExample;
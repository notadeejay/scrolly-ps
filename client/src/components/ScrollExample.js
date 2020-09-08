import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import '../styles/scroll.css'


 
const ScrollExample = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [steps] = useState([1,2,3,4,5])
  const [data, setData] = useState(["Step One", "Step Two", "Step Three", "Step Four", "Step 5"])
 
  

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <React.Fragment>
    <div className="graphicContainer">
    <div className="scroller">
    <Scrollama onStepEnter={onStepEnter}>
        {steps.map((_, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div
              style={{
                margin: '50vh 0',
                border: '1px solid gray',
                opacity: currentStepIndex === stepIndex ? 1 : 0.2,
              }}
            >
              I'm a Scrollama Step of index {stepIndex}
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
    <div className="graphic">
      <p>{currentStepIndex}</p>
    </div>
    </div>
    </React.Fragment>
  );
};
 
export default ScrollExample;
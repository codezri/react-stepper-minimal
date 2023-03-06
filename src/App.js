
import React, { useState } from 'react';
import './App.css';

function Stepper({ steps, activeStep }) {

  function getStepClass(step) {
    let cls = 'step';
    if(activeStep === step) {
      cls += ' step-active';
    }
    else if(activeStep > step) {
      cls += ' step-done';
    }
    else {
      cls += ' step-inactive'
    }
    return cls;
  }

  return(
    <div className="steps-container">
    {
      steps.map((label, index) =>
        <div className={getStepClass(index)} key={index}>
          <div><div className="circle">{index + 1}</div></div>
          <div className="label">{label}</div>
          { index < steps.length - 1 && <div className="line"></div> }
        </div>
      )
    }
    </div>
  );
}

function UserDetails() {
  return <h2>User details</h2>;
}

function Payment() {
  return <h2>Payment information</h2>;
}

function Confirmation() {
  return <h2>Booking is confirmed</h2>;
}

function App() {
  const [ activeStep, setActiveStep ] = useState(0);

  const steps = [
    'User details',
    'Payment',
    'Booking confirmation',
  ];

  function getSectionComponent() {
    switch(activeStep) {
      case 0: return <UserDetails/>;
      case 1: return <Payment/>;
      case 2: return <Confirmation/>;
      default: return null;
    }
  }

  return (
    <div>
      <Stepper
        steps={steps}
        activeStep={activeStep}/>
      <div style={{padding: '20px'}}>
        { getSectionComponent()  }
        { (activeStep !== 0 && activeStep !== steps.length - 1)
            && <button onClick={ () => setActiveStep(activeStep - 1) }>Previous</button>
        }
        { activeStep !== steps.length - 1
          && <button onClick={ () => setActiveStep(activeStep + 1) }>Next</button>
        }
      </div>
    </div>
  );
}

export default App;

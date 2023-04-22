import React, { useState } from 'react';
// import { Stepper, Step, StepLabel, Button } from '@material-ui/core';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import FormUserDetails from './FormUserDetails';
import NumberWheels from './NumberWheels';
function StepForm() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>step 1</StepLabel>
          {/* <StepLabel><FormUserDetails/></StepLabel> */}
        </Step>
        <Step>
          <StepLabel>step 1</StepLabel>
          {/* <StepLabel><NumberWheels/></StepLabel> */}
        </Step>
        <Step>
          <StepLabel>Step 3</StepLabel>
        </Step>
      </Stepper>

      {activeStep === 0 && (
        <div>
          {/* Step 1 content */}
          FormUserDetails
          <Button onClick={handleNext}>Next</Button>
        </div>
      )}

      {activeStep === 1 && (
        <div>
          {/* Step 2 content */}
          NumberWheels
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
      )}

      {activeStep === 2 && (
        <div>
          Step 3 content
          <Button onClick={handleBack}>Back</Button>
        </div>
      )}
    </>
  );
}

export default StepForm;

import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import FinalData from './FinalData';
import { useForm, FormProvider } from 'react-hook-form'; 

const steps = ['Basic Info', 'Personal Info', 'Final Info'];


export const MyContext = React.createContext();

export default function StepperForm() {
  
  const methods = useForm();
  const { register, handleSubmit, formState } = methods;

  const [tableData, setTableData] = React.useState([]);
  const [activeStep, setActiveStep] = React.useState(0);
 

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleNext = () => {

    const updatedUserData = { ...methods.getValues()};
    setTableData([ updatedUserData]);    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const contextValue = {  tableData,  handleNext,  register,  handleSubmit,  formState,};

  return (
    <MyContext.Provider value={contextValue}>
      <FormProvider {...methods}>
        <Box sx={{ width: '100%' }} className=" bg-blue-50 min-h-screen">
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = <Typography variant="caption">Optional</Typography>;
              }
              
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                {activeStep + 1 === 1 ? <FirstStep /> : activeStep + 1 === 2 ? <SecondStep /> : activeStep + 1 === 3 ? <FinalData /> : ''}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={methods.handleSubmit(handleNext)}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </FormProvider>
    </MyContext.Provider>
  );
}
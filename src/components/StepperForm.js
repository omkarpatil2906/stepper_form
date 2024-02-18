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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const steps = ['Basic Info', 'Personal Info', 'Final Info'];

export const MyContext = React.createContext();

export default function StepperForm() {
  const schema = yup.object({
    firstName: yup.string().required(),
    middleName: yup.string(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    mobile: yup.number().positive().integer().required(),
    age: yup.number().required(),
    city: yup.string().required(),
    state: yup.string().required(),
  });


  const methods = useForm({ resolver: yupResolver(schema) });
  const { register, handleSubmit, formState: { errors } } = methods;

  const [tableData, setTableData] = React.useState([]);
  const [activeStep, setActiveStep] = React.useState(0);


  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleNext = () => {
    const updatedUserData = { ...methods.getValues() };
    setTableData([updatedUserData]);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const contextValue = { tableData, handleNext, register, handleSubmit, errors };

  return (
    <MyContext.Provider value={contextValue} >
      <FormProvider {...methods}>
        <Box sx={{ width: '100%' }} className="h-screen  border  ">


          <Stepper activeStep={activeStep} sx={{ width: "70%" }} className='w-full bg-[#3F2860] rounded-xl px-12 py-5 mt-12 mx-auto'>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = <Typography variant="caption">Optional2</Typography>;
              }

              return (
                <Step sx={{ color: 'white' }} key={label} {...stepProps}>
                  <StepLabel {...labelProps} sx={{ color: 'white' }}>{label}</StepLabel>
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
                {activeStep === 0 && <FirstStep />}
                {activeStep === 1 && <SecondStep />}
                {activeStep === 2 && <FinalData />}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, width: "50%" }} className='w-full mx-auto'>
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
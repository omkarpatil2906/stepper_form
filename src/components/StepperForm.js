import React, { useContext } from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { MyContextApi } from '../App';
import FirstStep from './FirstStep';
import  SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import FinalData from './FinalData'

function StepperForm() {

    const { currentStep } = useContext(MyContextApi)

    function showStep(step) {
        switch (step) {
            case 1:
                return <FirstStep />
            case 2:
                return <SecondStep />
            case 3:
                return <ThirdStep />
            case 4:
                return <FinalData/>

                default : return ""
        }
    }
    return (
        <div className=''>
            <div className=''>
                <div className='my-24 ml-64'>
                    <Stepper  activeStep={currentStep - 1} orientation='horizontal' className='grid gap-12  w-[80%]'  >
                        <Step>
                            <StepLabel>Step 1</StepLabel>
                        </Step>

                        <Step>
                            <StepLabel> Step 2</StepLabel>
                        </Step>

                        <Step>
                            <StepLabel> Step 3</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel> Step 4</StepLabel>
                        </Step>

                    </Stepper>
                </div>
                {showStep(currentStep)}
               

               

            </div>
        </div>
    )
}

export default StepperForm



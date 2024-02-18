import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { MyContext } from './StepperForm';

function FirstStep() {
  const { register,  errors } = useContext(MyContext);

  return (
    <form className='flex flex-col justify-center items-center'>
      <div className='space-y-4 rounded-lg shadow-md w-[25%] flex flex-col items-center py-16   bg-white'>
        <TextField
          label="First Name"
          size='small'
          className='w-[300px]'
          {...register('firstName')}
          error={errors.firstName?.message}
        />
       
        <TextField
          label="Middle Name"
          className='w-[300px]'
          size='small'
          {...register('middleName')}
          error={errors.middleName?.message}
        />
    
        <TextField
          label="Last Name"
          className='w-[300px]'
          size='small'
          {...register('lastName')}
          error={errors.lastName?.message}
        />
      

        <TextField
          label="Mobile"
          type='number'
          error={errors.mobile?.message}
          size='small'
          className='w-[300px]'
          {...register('mobile')}
        />
      </div>
    </form>
  );
}

export default FirstStep;

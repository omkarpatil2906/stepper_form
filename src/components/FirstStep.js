import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { MyContext } from './StepperForm';

function FirstStep() {
  const { register, formState } = useContext(MyContext);

  return (
    <form className=' flex flex-col justify-center items-center'>
      <div className='space-y-4 shadow-xl rounded-tl-3xl rounded-br-3xl w-[20%] flex flex-col items-center py-12 my-12 bg-white'>
        <div className='flex flex-col'>
          <TextField label="First Name" name="firstName"  {...register('firstName', { required: 'First name is required' })} />
          {formState.errors.firstName && <span className='text-red-600 text-xs text-center'>This field is required</span>}
        </div>
        <div className='flex flex-col'>
          <TextField label="Middle Name" name="middleName"  {...register('middleName', { required: 'Middle name is required' })} />
          {formState.errors.middleName && <span className='text-red-600 text-xs text-center'>This field is required</span>}
        </div>
        <div className='flex flex-col'>
          <TextField label="Last Name" name="lastName" {...register('lastName', { required: 'Last name is required' })} />
          {formState.errors.lastName && <span className='text-red-600 text-xs text-center'>This field is required</span>}
        </div>
      </div>
    </form>
  );
}

export default FirstStep;

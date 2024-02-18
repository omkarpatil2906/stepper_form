import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { MyContext } from './StepperForm';

function SecondStep() {
  const { register, errors } = useContext(MyContext);

  return (
    <form className='flex justify-center items-center'>
      <div className='space-y-4 shadow-xl rounded-tl-3xl rounded-br-3xl w-[20%] flex flex-col items-center py-12 my-12 bg-white'>
        <TextField
          label="Email"
          name="email"
          {...register('email')}
          error={errors.email?.message}
        />
       
        <TextField
          label="Age"
          name="age"
          type='number'
          {...register('age')}
          error={errors.age?.message}
        />
       
        <TextField
          label="City"
          name="city"
          {...register('city')}
          error={errors.city?.message}
        />
       
        <TextField
          label="State"
          name="state"
          {...register('state')}
          error={errors.state?.message}
        />
      </div>
    </form>
  );
}

export default SecondStep;

import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { MyContext } from './StepperForm';

function SecondStep() {
  const { register, formState } = useContext(MyContext);

  return (
    <form className='flex justify-center items-center'>
      <div className='space-y-4 shadow-xl rounded-tl-3xl rounded-br-3xl w-[20%] flex flex-col items-center py-12 my-12 bg-white'>

      <div className='flex flex-col'>
        <TextField label="Age" name="age"  {...register('age', { required: 'Age is required' })} />
        {formState.errors.age && <span className='text-red-600 text-xs text-center'>This field is required</span>}
      </div>
      <div className='flex flex-col'>
        <TextField label="Mobile" name="mobile"  {...register('mobile', { required: 'Mobile is required' })} />
        {formState.errors.mobile && <span className='text-red-600 text-xs text-center'>This field is required</span>}
      </div>
      <div className='flex flex-col'>
        <TextField    label="Email"    name="email"    {...register('email', { required: 'Email is required' })}  />
        {formState.errors.email && <span className='text-red-600 text-xs text-center'>This field is required</span>}
      </div>
      <div className='flex flex-col'>
        <TextField  label="City"  name="city"  {...register('city', { required: 'City is required' })}/>
        {formState.errors.city && <span className='text-red-600 text-xs text-center'>This field is required</span>}
      </div>
      <div className='flex flex-col'>
        <TextField  label="State"  name="state"  {...register('state', { required: 'State is required' })}/>
        {formState.errors.state && <span className='text-red-600 text-xs text-center'>This field is required</span>}
      </div>
      <div className='flex flex-col'>
        <TextField  label="Zipcode"  name="zipcode"  {...register('zipcode', { required: 'Zipcode is required' })}/>
        {formState.errors.zipcode && <span className='text-red-600 text-xs text-center'>This field is required</span>}
      </div>
      </div>
    </form>
  );
}

export default SecondStep;

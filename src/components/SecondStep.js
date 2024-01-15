import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { MyContext } from './StepperForm';

function SecondStep() {
  const { userData, handleOnChange, register, formState } = useContext(MyContext);

  return (
    <form>
      <div>
        <TextField
          label="Age"
          name="age"
          defaultValue={userData.age}
          onChange={handleOnChange}
          {...register('age', { required: 'Age is required' })}
        />
        {formState.errors.age && <span>This field is required</span>}
      </div>
       <div>
        <TextField
          label="Mobile"
          name="mobile"
          defaultValue={userData.mobile}
          onChange={handleOnChange}
          {...register('mobile', { required: 'Mobile is required' })}
        />
        {formState.errors.mobile && <span>This field is required</span>}
      </div>
      <div>
        <TextField
          label="Email"
          name="email"
          defaultValue={userData.email}
          onChange={handleOnChange}
          {...register('email', { required: 'Email is required' })}
        />
        {formState.errors.email && <span>This field is required</span>}
      </div>
      <div>
        <TextField
          label="City"
          name="city"
          defaultValue={userData.city}
          onChange={handleOnChange}
          {...register('city', { required: 'City is required' })}
        />
        {formState.errors.city && <span>This field is required</span>}
      </div>
      <div>
        <TextField
          label="State"
          name="state"
          defaultValue={userData.state}
          onChange={handleOnChange}
          {...register('state', { required: 'State is required' })}
        />
        {formState.errors.state && <span>This field is required</span>}
      </div>
      <div>
        <TextField
          label="Zipcode"
          name="zipcode"
          defaultValue={userData.zipcode}
          onChange={handleOnChange}
          {...register('zipcode', { required: 'Zipcode is required' })}
        />
        {formState.errors.zipcode && <span>This field is required</span>}
      </div> 
    </form>
  );
}

export default SecondStep;

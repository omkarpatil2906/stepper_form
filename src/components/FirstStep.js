import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { MyContext } from './StepperForm';

function FirstStep() {
  const { userData, handleOnChange, register, formState } = useContext(MyContext);

  return (
    <form>
      <div>
        <TextField
          label="First Name"
          name="firstName"
          defaultValue={userData.firstName}
          onChange={handleOnChange}
          {...register('firstName', { required: 'First name is required' })}
        />
        {formState.errors.firstName && <span>This field is required</span>}
      </div>
      <div>
        <TextField
          label="Middle Name"
          name="middleName"
          defaultValue={userData.middleName}
          onChange={handleOnChange}
          {...register('middleName', { required: 'Middle name is required' })}
        />
        {formState.errors.middleName && <span>This field is required</span>}
      </div>
      <div>
        <TextField
          label="Last Name"
          name="lastName"
          defaultValue={userData.lastName}
          onChange={handleOnChange}
          {...register('lastName', { required: 'Last name is required' })}
        />
        {formState.errors.lastName && <span>This field is required</span>}
      </div>
    </form>
  );
}

export default FirstStep;

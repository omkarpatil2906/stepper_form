import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import TextField from '@mui/material/TextField';
import { MyContextApi } from '../App';
import Button from '@mui/material/Button'




function FirstStep() {
    const { register, handleSubmit  , formState: { errors }, } = useForm()
    const {handleOnChange , setUserData, userData, setStep , currentStep} = useContext(MyContextApi)

     
    const onSubmit = (data) => {
        console.log(data);
        setUserData({ ...userData, ...data });
        setStep(currentStep + 1)
      };
    return (
        <div>
            <div>
                <TextField label="First Name" name='firstName' value={userData?.firstName}  onChange={handleOnChange} {...register("firstName", { required: "First Name is required" })}/>
                {errors.firstName && <span>This field is required</span>}
            </div>
            <div>
                <TextField label="Last Name" name='lastName' value={userData?.lastName}  onChange={handleOnChange} {...register("lastName", { required: "last Name is required" })}/>
                {errors.lastName && <span>This field is required</span>}
            </div> 
            <div>
                <TextField label="Email"  name='email' value={userData?.email}  onChange={handleOnChange} {...register("email", { required: "email is required" })}/>
                {errors.email && <span>This field is required</span>}
            </div>
            <div>
                <Button variant='contained' color='primary' onClick={handleSubmit(onSubmit)}>Next</Button>
            </div>
        </div>
    )
}

export default FirstStep



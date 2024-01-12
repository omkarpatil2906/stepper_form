import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import { MyContext } from './StepperForm';
import { useForm } from "react-hook-form"

function FirstStep() {
    const { register,  handleSubmit,   formState: { errors }, } = useForm()
    const {userData , handleOnChange , handleNext} = useContext(MyContext)

    const onSubmit = (data) => {
        console.log(data);
        handleNext()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextField label="First Name" name='firstName' defaultValue={userData.firstName} onChange={handleOnChange} {...register("firstName", { required: "First name is requirde" })} />
                {errors.firstName && <span>This field is required</span>}
            </div>
            <div>
                <TextField label="Middle Name" name='middleName' defaultValue={userData.middleName} onChange={handleOnChange} {...register("middleName", { required: "middle name is requirde" })} />
                {errors.middleName && <span>This field is required</span>}
            </div> 
            <div>
                <TextField label="Last Name" name='lastName' defaultValue={userData.lastName} onChange={handleOnChange}  {...register("lastName", { required: "last name is required" })} />
                {errors.lastName && <span>This field is required</span>} 
            </div>
           

        </form>
    )
}

export default FirstStep



import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import { MyContext } from './StepperForm';
import { useForm } from "react-hook-form"

function SecondStep() {

    const { register,  handleSubmit,   formState: { errors }, } = useForm()
    const {userData , handleOnChange , handleNext} = useContext(MyContext)

    const onSubmit = (data) => {
        console.log(data);
        handleNext()
    }
   
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextField label="age" name='age' defaultValue={userData.age}  onChange={handleOnChange} {...register("age", { required: "age name is requirde" })} />
                {errors.age && <span>This field is required</span>}
            </div>
            <div>
                <TextField label="mobile"  name='mobile' defaultValue={userData.mobile} onChange={handleOnChange} {...register("mobile", { required: "mobile name is requirde" })} />
                {errors.mobile && <span>This field is required</span>}
            </div>
            <div>
                <TextField label="email" name='email' defaultValue={userData.email} onChange={handleOnChange} {...register("email", { required: "email name is requirde" })} />
                {errors.email && <span>This field is required</span>}
            </div>
            <div>
                <TextField label="city" name='city' defaultValue={userData.city} onChange={handleOnChange} {...register("city", { required: "city name is requirde" })} />
                {errors.city && <span>This field is required</span>}
            </div>
            <div>
                <TextField label="state" name='state' defaultValue={userData.state} onChange={handleOnChange} {...register("state", { required: "state name is requirde" })} />
                {errors.state && <span>This field is required</span>}
            </div>
            <div>
                <TextField label="zipcode" name='zipcode' defaultValue={userData.zipcode} onChange={handleOnChange} {...register("zipcode", { required: "zipcode name is requirde" })} />
                {errors.zipcode && <span>This field is required</span>}
            </div>
        
        </form>
    )
}

export default SecondStep





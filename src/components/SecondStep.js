import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import TextField from '@mui/material/TextField';
import { MyContextApi } from '../App';
import Button from '@mui/material/Button'

function SecondStep() {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { handleOnChange, setUserData, userData, setStep } = useContext(MyContextApi)

    const onSubmit = (data) => {
     
        console.log(data);
        setUserData({ ...userData, ...data });
        setStep(3)
        
      };

    return (
        <div>
            <div>
                <TextField label="number" name='number' value={userData?.number} onChange={handleOnChange} {...register("number", { required: "number is required" })} />
                {errors.number && <span>This field is required</span>}
            </div>
            <div>
                <TextField label="city" name='city' value={userData?.city} {...register("city", { required: "city Name is required" })} />
                {errors.city && <span>This field is required</span>}
            </div>
            <div>
                <TextField label="landmark" name='landmark' value={userData?.landmark} {...register("landmark", { required: "landmark is required" })} />
                {errors.landmark && <span>This field is required</span>}
            </div>
            <div>
                <Button variant='contained' color='primary' onClick={handleSubmit(onSubmit)}>Next</Button>
            </div>
        </div>
    )
}

export default SecondStep

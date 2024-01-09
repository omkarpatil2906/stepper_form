import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import TextField from '@mui/material/TextField';
import { MyContextApi } from '../App';
import Button from '@mui/material/Button'

function ThirdStep() {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const {handleOnChange,setUserData,submitData , userData , setStep} = useContext(MyContextApi)
    // console.log(watch("example"))

    const onSubmit = (data) => {
     
        console.log(data);
        setUserData({ ...userData, ...data });
        setStep(4)
        
      };
    return (
        <div>
            <div>
                <TextField label="Pincode" name='pincode' value={userData?.pincode} onChange={handleOnChange} {...register("pincode", { required: "pincode is required" })}/>
                {errors.pincode && <span>This field is required</span>}
            </div>
            <div>
                <Button variant='contained' color='primary' onClick={handleSubmit(onSubmit)}>Next</Button>
            </div>
           
        </div>
    )
}

export default ThirdStep

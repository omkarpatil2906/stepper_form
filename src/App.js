import React, { createContext, useState } from 'react'
import StepperForm from './components/StepperForm'
 
export const MyContextApi = createContext()
function App() {

  const initialData = {
    firstName:'',
    lastName:'',
    email:'',
    number:'',
    city:'',
    landmark:'',
    pincode:'',

  }

  const [userData , setUserData]= useState(initialData)
  const [currentStep, setStep]= useState(1);
  const [tableData, setTableData] = useState([])


  const handleOnChange = (e) => {
    setUserData({...userData , [e.target.name]:e.target.value})
  }

  const submitData = () =>{
    setTableData([...tableData, userData])
    setUserData(initialData)
    // setStep(4)
  }

  return (
    <div>
      <MyContextApi.Provider value={{tableData , setTableData, handleOnChange, submitData, currentStep, setStep}}>
          <StepperForm/>
      </MyContextApi.Provider>
      
    </div>
  )
}

export default App


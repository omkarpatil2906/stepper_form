import React, { useContext } from 'react'
import { MyContext } from './StepperForm'


function FinalData() {
  const {tableData} = useContext(MyContext)
 
  return (
    <div>
    
      <table>
        <tr>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>City</th>
          <th>State</th>
          <th>zipcode</th>
        </tr>

        {
          tableData.map((data ,i)=>(
            <tr key={i}>
              <th>{data.firstName}</th>
              <th>{data.middleName}</th>
              <th>{data.lastName}</th>
              <th>{data.age}</th>
              <th>{data.mobile}</th>
              <th>{data.email}</th>
              <th>{data.city}</th>
              <th>{data.state}</th>
              <th>{data.zipcode}</th>
            </tr>
          ))
        }
      </table>
     
    </div>
  )
}

export default FinalData

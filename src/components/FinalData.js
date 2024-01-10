import React, { useContext } from 'react'
import { MyContextApi } from '../App'

function FinalData() {
  const {tableData , userData} = useContext(MyContextApi)
  return (
    <div>
    
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name </th>
          <th>Email</th>
          <th>Number</th>
          <th>City</th>
          <th>LandMark</th>
          <th>Pincode</th>
        </tr>

        {
          tableData.map((data ,i)=>(
            <tr key={i}>
              <th>{data.firstName}</th>
              <th>{data.lastName}</th>
              <th>{data.email}</th>
              <th>{data.number}</th>
              <th>{data.city}</th>
              <th>{data.landmark}</th>
              <th>{data.pincode}</th>
              
            </tr>
          ))
        }
      </table>
     
    </div>
  )
}

export default FinalData

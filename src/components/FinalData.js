import React, { useContext } from 'react';
import { MyContext } from './StepperForm';

function FinalData() {
  const { tableData } = useContext(MyContext);

  return (
    <div className='flex justify-center my-12'>
      <table>
        <thead>
          <tr>
            <th className='border1'>First Name</th>
            <th className='border1'> Middle Name</th>
            <th className='border1'>Last Name</th>
            <th className='border1'>Age</th>
            <th className='border1'>Mobile</th>
            <th className='border1'>Email</th>
            <th className='border1'>City</th>
            <th className='border1'>State</th>
            <th className='border1'>Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, i) => (
            <tr key={i}>
              <td className='border1'>{data.firstName}</td>
              <td className='border1'>{data.middleName}</td>
              <td className='border1'>{data.lastName}</td>
              <td className='border1'>{data.age}</td>
              <td className='border1'>{data.mobile}</td>
              <td className='border1'>{data.email}</td>
              <td className='border1'>{data.city}</td>
              <td className='border1'>{data.state}</td>
              <td className='border1'>{data.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FinalData;

import React, { useContext } from 'react';
import { MyContext } from './StepperForm';

function FinalData() {
  const { tableData } = useContext(MyContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, i) => (
            <tr key={i}>
              <td>{data.firstName}</td>
              <td>{data.middleName}</td>
              <td>{data.lastName}</td>
              <td>{data.age}</td>
              <td>{data.mobile}</td>
              <td>{data.email}</td>
              <td>{data.city}</td>
              <td>{data.state}</td>
              <td>{data.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FinalData;

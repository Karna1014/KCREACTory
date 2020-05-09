import React from 'react';

export default function EmpTable(props) {
    return (
        <table>
            <thead>
            <tr>
              <th>
                <button onClick={props.sortBy('id')}>ID</button>
              </th>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
              {
                props.data.map(row =>(
                <tr>
                    <td>{row.id}</td>
                    <td>{row.avatar}</td>
                    <td>{row.first_name}</td>
                    <td>{row.last_name}</td>
                    <td>{row.email}</td>
                    <td>{row.title}</td>
                 </tr>
                 ))
                }
          </tbody>
        </table>
    )
}
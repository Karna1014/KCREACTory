import React from "react";

export default function EmpTable(props) {
    return (
      <div className="container">
      <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Employee List</a>
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => props.onSearchInputChange(event, event.target.value)}/>
            </form>
          </nav>
        <table>
            <thead>
            <tr>
              <th>
                <button onClick={(event) => props.sortBy(event, "id")}>ID</button>
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
                props.data.map(row => (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td><img alt="avatar" src={row.avatar}/></td>
                    <td>{row.first_name}</td>
                    <td>{row.last_name}</td>
                    <td>{row.email}</td>
                    <td>{row.title}</td>
                 </tr>
                 ))
                }
          </tbody>
        </table>
      </div>
    )
}
import React from "react";

export default function EmpTable(props) {
  return (
    <div className="container">
      <nav className="navbar navbar-light">
        <span className="navbar-brand text-white">Employee List</span>
        <form className="form-inline">
          {
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search by First Name"
              aria-label="Search"
              onChange={(event) =>
                props.onSearchInputChange(event, event.target.value)
              }
            />
          }
        </form>
      </nav>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>
              <button onClick={(event) => props.sortBy(event, "id")}>ID</button>
            </th>
            <th>Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>
              <button onClick={(event) => props.sortBy(event, "email")}>
                Email Address
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((results) => (
            <tr key={results.id}>
              <td>{results.id}</td>
              <td>
                <img alt="no pic" src={results.avatar} />
              </td>
              <td>{results.first_name}</td>
              <td>{results.last_name}</td>
              <td>{results.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

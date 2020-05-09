 import React from "react";
 import EmpTable from "./components/emp-table";
 import data from "./data/Employee.json"
 
 import './App.css';
 


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
    this.sortBy = this.sortBy.bind(this)
  }

  

  sortBy(key) {
    this.setState({
      data: data.sort( (a, b) => (
        this.state.direction[key] === "asc"
        ? a[key] - b[key] 
        : b[key] - a[key] 
      )),
      direction: {
        [key]: this.state.direction[key] === "asc"
        ? "desc"
        : "asc"
      }
    })
  }


  render() {
  return (
    <div 
      className="page-container">
      <EmpTable 
      data={this.state.data} 
      sortBy={this.sortBy}
      />
    </div>
  )
}
}

export default App;
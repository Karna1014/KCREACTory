 import React from "react";
 import EmpTable from "./components/emp-table";
 import data from "./data/Employee.json"
 
 import './App.css';
 


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      direction: {
        "id": "desc"
      }
    }

    this.searchInput = "te"

    this.sortBy = this.sortBy.bind(this)
    this.onSearchInputChange = this.onSearchInputChange.bind(this)
    this.elementContainsSearchString = this.elementContainsSearchString.bind(this)
  }

  

  sortBy(event, key) {
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

  onSearchInputChange = (event, text) => {
    event.preventDefault();
    this.filterItems(text);
  }

  onAlphabetClick = (e) => {
    this.setState({alphabet: e.target.value})
  }
  prepareAlphabets = () => {
    let result = [];
    for(let i=65; i<91; i++) {
      result.push(
        <button type="button" key={i} onClick={this.onAlphabetClick} value={String.fromCharCode(i)} >{String.fromCharCode(i)}</button>
      )
    }
    return result;
  }
  elementContainsSearchString = (searchInput, element) => (searchInput ? element.first_name.toLowerCase().includes(searchInput.toLowerCase()) : false);
  filterItems = (text) => {
    let result = [];
    let data = this.state.data;
    let searchInput = text;
    console.log(searchInput);
    if (searchInput == "") {
      result = data;
    } else {
      for (var i = 0; i < data.length; i++) {
        if (text.toLowerCase() != "" || text.length != 0) {
          if (data[i].first_name.toLowerCase().includes(text.toLowerCase())) {
            result.push(data[i]);
          }
        } else {
          result.push(data[i]);
        }
      }
    }
    //   result = result.map((item)=> (<li key={item.id}>{item.first_name}</li>))
    //   return result;
    this.setState({
      data: result
    })
  }

  render() {
    // const filteredList = this.filterItems(this.state.data);
  return (
    <div 
      className="page-container">
      <EmpTable 
      data={this.state.data} 
      sortBy={this.sortBy}
      onSearchInputChange={this.onSearchInputChange}
      />
    </div>
  )
}
}

export default App;
 import React from "react";
 import EmpTable from "./components/emp-table";
 import data from "./data/Employee.json"
 
 import './App.css';
 


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      direction: {
        id: "desc",
      },
      filtered: [],
    };

    this.sortBy = this.sortBy.bind(this);
    this.onSearchInputChange = this.onSearchInputChange.bind(this)
    // this.handleChange = this.handleChange.bind(this);
    this.elementContainsSearchString = this.elementContainsSearchString.bind(this)
  }

  sortBy(event, key) {
    this.setState({
      data: data.sort((a, b) =>
        this.state.direction[key] === "asc" ? a[key] - b[key] : b[key] - a[key]
      ),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc",
      },
    });
  }


  // componentDidMount() {
  //   this.setState({
  //     filtered: this.props.data,
  //   });
  // }

  // componentDidUpdate(nextProps) {
  //   this.setState({
  //     filtered: nextProps.data,
  //   });
  // }

  // handleChange(e) {
  //   // Variable to hold the original version of the list
  //   let currentList = [];
  //   // Variable to hold the filtered list before putting into state
  //   let newList = [];

  //   // If the search bar isn't empty
  //   if (e.target.value !== "") {
  //     // Assign the original list to currentList
  //     currentList = this.props.data;

  //     // Use .filter() to determine which items should be displayed
  //     // based on the search terms
  //     newList = currentList.filter((data) => {
  //       // change current item to lowercase
  //       const lc = data.toLowerCase();
  //       // change search term to lowercase
  //       const filter = e.target.value.toLowerCase();
  //       // check to see if the current list item includes the search term
  //       // If it does, it will be added to newList. Using lowercase eliminates
  //       // issues with capitalization in search terms and search content
  //       return lc.includes(filter);
  //     });
  //   } else {
  //     // If the search bar is empty, set newList to original employee list
  //     newList = this.props.data;
  //   }
  //   // Set the filtered state based on what our rules added to newList
  //   this.setState({
  //     filtered: newList,
  //   });
  // }
  onSearchInputChange = (event, text) => {
      event.preventDefault();
      this.filterItems(text);
   }

  
elementContainsSearchString = (searchInput, element) => (searchInput ? element.first_name.toLowerCase().includes(searchInput.toLowerCase()) : false);
  filterItems = (text) => {
    let currentList = [];
    let newList = [];
    let data = this.props.data;
    let searchInput = text;
    console.log(searchInput);
    if (searchInput !== "") {
      currentList = data;
    
    newList = currentList.filter((data) =>{
    
    const lc = this.data.first_name.toLowerCase();

    const filter = searchInput.toLowerCase();

    return lc.includes(filter);
    });
    } else {
      newList = this.state.data;
        }
        this.setState({
          filtered: newList,
        })
      }
 

  render() {
    // const filteredList = this.filterItems(this.state.data);
    return (
      <div className="page-container">
        <EmpTable
          data={this.state.data}
          sortBy={this.sortBy}
          onSearchInputChange={this.onSearchInputChange}
          // onSearchInputChange
        />
      </div>
    );
  }
}

export default App;
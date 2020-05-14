import React from "react";
import EmpTable from "./components/emp-table";
import data from "./data/Employee.json";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      direction: {
        id: "desc",
        email: "desc",
      },
      filtered: [],
    };

    this.sortBy = this.sortBy.bind(this);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.elementContainsSearchString = this.elementContainsSearchString.bind(
      this
    );
  }

  sortBy(event, key) {
    console.log(key);
    console.log(this.state.direction[key]);
    if (key === "id") {
      this.setState({
        data: data.sort((a, b) =>
          this.state.direction[key] === "asc"
            ? a[key] - b[key]
            : b[key] - a[key]
        ),
        direction: {
          [key]: this.state.direction[key] === "asc" ? "desc" : "asc",
        },
      });
    } else {
      let direction = this.state.direction[key];
      this.setState({
        data: data.sort(function (a, b) {
          if (direction === "asc") {
            if (a[key].toLowerCase() < b[key].toLowerCase()) {
              return -1;
            } else if (a[key].toLowerCase() > b[key].toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          } else {
            if (a[key].toLowerCase() < b[key].toLowerCase()) {
              return 1;
            } else if (a[key].toLowerCase() > b[key].toLowerCase()) {
              return -1;
            } else {
              return 0;
            }
          }
        }),
        direction: {
          [key]: this.state.direction[key] === "asc" ? "desc" : "asc",
        },
      });
    }
  }

  onSearchInputChange = (event, text) => {
    event.preventDefault();
    this.filterItems(text);
  };

  elementContainsSearchString = (searchInput, element) =>
    searchInput
      ? element.first_name.toLowerCase().includes(searchInput.toLowerCase())
      : false;

  filterItems = (text) => {
    let newList = [];
    let searchInput = text.trim();
    if (searchInput !== "") {
      for (var i = 0; i < data.length; i++) {
        if (
          data[i]["first_name"]
            .toLowerCase()
            .includes(searchInput.toLowerCase())
        ) {
          newList.push(data[i]);
        }
      }
    } else {
      newList = data;
    }

    this.setState({ data: newList });
  };

  render() {
    return (
      <div className="page-container">
        <EmpTable
          data={this.state.data}
          sortBy={this.sortBy}
          onSearchInputChange={this.onSearchInputChange}
        />
      </div>
    );
  }
}

export default App;

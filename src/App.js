import React, { Component } from "react";
import "./App.css";
import Pairs from "./components/pairs";
import Nav from "./components/nav";
import Header from "./components/header";
import { SERVICE_URL } from "./utils/constants";
import { getRandomPairs } from "./utils/arrayUtils";
class App extends Component {
  state = {
    users: [],
    selection: "location",
    actions: [
      { id: "location", label: "Location", isActive: true },
      { id: "department", label: "Department", isActive: false }
    ],
    pairs: []
  };
  /**
   * will update pairs based on the selection
   * @param selection - selected id passed from button
   */
  handleSelection = selection => {
    const pairs = this.formatData(this.state.users, selection);
    this.setState({
      selection,
      pairs
    });
  };
  /**
   * this will make users to random pairs
   * @param users - array of user objects
   * @param selection - selected type
   * @returns an array contains pairs of users
   */
  formatData = (users, selection) => {
    let pairs = [];
    const groupOfUsers = {};
    if (users.length) {
      users.forEach(user => {
        const key = user[selection];
        if (groupOfUsers[key]) {
          groupOfUsers[key].push(user);
        } else {
          groupOfUsers[key] = [];
          groupOfUsers[key].push(user);
        }
      });

      for (let key in groupOfUsers) {
        let item = groupOfUsers[key];
        pairs = pairs.concat(getRandomPairs(item, "< NO PAIR >"));
      }
    }
    return pairs;
  };
  componentDidMount() {
    fetch(SERVICE_URL)
      .then(res => res.json())
      .then(data => {
        if (data && data.users) {
          const pairs = this.formatData(data.users, this.state.selection);
          this.setState({
            users: data.users,
            pairs
          });
        }
      });
  }

  render() {
    const { users, selection, actions, pairs } = this.state;
    return (
      <div className="container-fluid">
        <Header count={users.length} pairsCount={pairs.length} />
        <Nav
          handleClick={this.handleSelection}
          actions={actions}
          selection={selection}
          count={users.length}
          pairsCount={pairs.length}
        />
        <Pairs pairs={pairs} selection={selection} />
      </div>
    );
  }
}

export default App;

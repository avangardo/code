import React, { Component } from "react";
import styles from "./Tab.component.css";

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = { userData: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(userData => this.setState({ userData: userData.results }));
  }

  handleClick() {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(userData =>
        this.setState({
          userData: this.state.userData.concat(userData.results)
        })
      );
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>More</button>
        {this.state.userData.map((user, index) => (
          <div key={index - 1} className={styles.user}>
            <img key={index} src={user.picture.large} alt="" />
            <p key={index + 1}>
              {user.name.first} {user.name.last}
            </p>
            <p key={index + 2}>{user.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Tab;
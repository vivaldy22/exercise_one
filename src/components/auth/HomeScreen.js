import React, { Component } from "react";

class HomeScreen extends Component {
  onBtnLogoutClicked = () => {
    this.props.onLogout();
  };

  render() {
    return (
      <div>
        Home Screen
        <button onClick={this.onBtnLogoutClicked}>Logout</button>
      </div>
    );
  }
}

export default HomeScreen;

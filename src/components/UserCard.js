import React from "react";
import { Component } from "react";

class UserCard extends Component {
  componentWillMount() {
    console.log("Component will mount card");
  }

  componentDidMount() {
    console.log("Component did mount card");
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log("Component card will receive props");
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log("Component will update card");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component did update card");
  }

  render() {
    let { number } = this.props;
    let { name, address } = this.props.dataFromApp;
    const {
      printFromApp,
      alertHello,
      addName,
      resetName,
    } = this.props.funcFromApp;

    return (
      <div className="card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">User Card</h5>
          <p>{name}</p>
          <p>{address}</p>
          <p>{printFromApp()}</p>
          <div>
            <button
              onClick={() => {
                // alertHello(name);
                addName();
              }}
            >
              {"Add 'A' to Name"}
            </button>
            <button
              onClick={() => {
                // alertHello(name);
                resetName();
              }}
            >
              {"Reset Name"}
            </button>
          </div>
          <div>{"Number punya UserCard: " + number}</div>
          {/*{props.children}*/}
          <a href="#" className="card-link">
            {"Lihat lebih..."}
          </a>
        </div>
      </div>
    );
  }
}

export default UserCard;

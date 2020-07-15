import React, { Component } from "react";

class MyCard extends Component {
  render() {
    let { id, name, desc, friends } = this.props.contentData;
    let { onRmvBtn } = this.props;
    return (
      <div className="ui card">
        <div className="content">
          <a className="header">{name}</a>
          <div className="description">
            {name} {desc}
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon" />
            Programmer
          </a>
        </div>
        <div className="extra content" style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              onRmvBtn(id);
            }}
            className="ui red button"
            style={{ margin: "5px" }}
          >
            Remove This Card
          </button>
        </div>
      </div>
    );
  }
}

export default MyCard;

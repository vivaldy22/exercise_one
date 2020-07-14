import React, { Component } from "react";

class MyCard extends Component {
  render() {
    let { name, desc, friends } = this.props.contentData;
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
            {friends} Friends
          </a>
        </div>
      </div>
    );
  }
}

export default MyCard;

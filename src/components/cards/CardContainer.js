import React, { Component } from "react";
import MyCard from "./MyCard";

class CardContainer extends Component {
  render() {
    const { cards, onRmvThisBtnClick } = this.props;
    const showCards = cards.map((data, i) => (
      <MyCard key={i} contentData={data} onRmvBtn={onRmvThisBtnClick} />
    ));

    return (
      <div className="ui four cards" style={{ margin: "0" }}>
        {showCards}
      </div>
    );
  }
}

export default CardContainer;

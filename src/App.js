import React, { Component } from "react";
import "./App.css";
import MyCard from "./components/cards/MyCard";
import Button from "./components/button/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      ids: 0,
    };
  }

  onAddBtnClick = () => {
    const data = {
      id: this.state.ids,
      name: "name",
      desc: "is a trainer at Enigma Camp",
    };

    this.setState(() => ({
      // cards: [...this.state.cards, data],
      cards: this.state.cards.concat(data),
      ids: this.state.ids + 1,
    }));
  };

  onRmvFirstBtnClick = () => {
    const cardsFiltered = this.state.cards.filter((card) => {
      return card !== this.state.cards[0];
    });
    this.setState({
      cards: cardsFiltered,
    });
  };

  onRmvLastBtnClick = () => {
    const cardsFiltered = this.state.cards.filter((card) => {
      return card !== this.state.cards[this.state.cards.length - 1];
    });
    this.setState({
      cards: cardsFiltered,
    });
  };

  onRmvAllBtnClick = () => {
    this.setState({
      cards: [],
    });
  };

  onRmvThisBtnClick = (id) => {
    this.state.cards.forEach((card, i) => {
      if (this.state.cards[i].id === id) {
        this.state.cards.splice(i, 1);
      }
    });
    this.setState({
      cards: this.state.cards,
    });
  };

  render() {
    const showCards = this.state.cards.map((data, i) => (
      <MyCard key={i} contentData={data} onRmvBtn={this.onRmvThisBtnClick} />
    ));
    return (
      <div>
        <Button onClick={this.onAddBtnClick} color="green" text="Add Card" />
        <div className="ui four cards" style={{ margin: "0" }}>
          {showCards}
        </div>
      </div>
    );
  }
}

export default App;

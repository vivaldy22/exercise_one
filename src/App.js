import React, { Component } from "react";
import "./App.css";
import CardContainer from "./components/cards/CardContainer";
import Header from "./components/header/Header";
import FormContainer from "./components/form/FormContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      ids: 0,
      isCardExist: false,
      inputName: "",
    };
  }

  handleAddBtnClick = () => {
    const data = {
      id: this.state.ids,
      name: this.state.inputName,
      desc: "is a trainer at Enigma Camp",
    };

    if (!this.state.isCardExist) {
      this.setState({
        cards: this.state.cards.concat(data),
        // ids: this.state.ids + 1,
        isCardExist: true,
      });
    } else {
      this.state.cards.splice(0, 1, data);
      this.setState({
        ...this.state,
        cards: this.state.cards,
      });
    }

    console.log(this.state);
  };

  handleRmvThisBtnClick = (id) => {
    this.state.cards.forEach((card, i) => {
      if (this.state.cards[i].id === id) {
        this.state.cards.splice(i, 1);
      }
    });

    this.setState({
      cards: this.state.cards,
    });
  };

  handleTxtChange = (event) => {
    const name = event.target.name;

    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <FormContainer
          inputText={{
            onChange: this.handleTxtChange,
            name: this.state.inputName,
          }}
          onAddBtnClick={this.handleAddBtnClick}
        />
        <CardContainer
          cards={this.state.cards}
          onRmvThisBtnClick={this.handleRmvThisBtnClick}
        />
      </div>
    );
  }
}

export default App;

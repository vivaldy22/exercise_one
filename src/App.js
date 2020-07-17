import React, { Component } from "react";
import "./App.css";
import "./css/style.css";
import Header from "./components/header/Header";
import InputContainer from "./components/InputContainer/InputContainer";
import MainInputContainer from "./components/input/MainInputContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      ids: 0,
      inputTodo: "",
    };
  }

  handleTxtChange = (event) => {
    this.setState({
      inputTodo: event.target.value,
    });
  };

  handleAddBtnClick = (event) => {
    const data = {
      id: this.state.ids,
      todo: this.state.inputTodo,
    };

    this.setState(() => ({
      todos: this.state.todos.concat(data),
      ids: this.state.ids + 1,
    }));
    event.preventDefault();
  };

  handleSaveBtnClick = (id, data) => {
    this.state.todos.forEach((each, i) => {
      if (each.id === id) {
        this.state.todos.splice(i, 1, data);
      }
    });

    this.setState({
      todos: this.state.todos,
    });
    console.log(this.state.todos);
  };

  handleRmvBtnClick = (id) => {
    this.state.todos.forEach((each, i) => {
      if (this.state.todos[i].id === id) {
        this.state.todos.splice(i, 1);
      }
    });

    this.setState({
      todos: this.state.todos,
    });
  };

  handleRmvAllBtnClick = () => {
    this.setState({
      todos: [],
    });
  };

  render() {
    const showTodos = this.state.todos.map((data, i) => (
      <InputContainer
        key={i}
        id={data.id}
        value={data.todo}
        onRmvBtn={this.handleRmvBtnClick}
        onSaveBtn={this.handleSaveBtnClick}
      />
    ));
    return (
      <div className="App">
        <Header />
        <MainInputContainer
          onAddBtnClick={this.handleAddBtnClick}
          onRemoveBtnClick={this.handleRmvAllBtnClick}
          onTxtChange={this.handleTxtChange}
          valueMainTxt={this.state.inputTodo}
        />
        {showTodos}
      </div>
    );
  }
}

export default App;

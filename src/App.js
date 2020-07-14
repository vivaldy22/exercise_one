import React, { Component } from "react";
import "./App.css";
// import UserCard from "./components/UserCard";
// import IncrementNumber from "./components/IncrementNumber";
// import DecrementNumber from "./components/DecrementNumber";
// import HomeScreen from "./components/auth/HomeScreen";
// import LoginScreen from "./components/auth/LoginScreen";
import MyCard from "./components/cards/MyCard";
// import HelloWorld from "./components/HelloWorld";

// =======================================================================================
// -------- Day 1 --------
/*
let hello = "Hello in app component";
let number = 1;

function App() {
  return (
    <div className="App">
      <span className="blue">{getNameSpan()}</span>
      <br />
      <span className="red">{hello}</span>
      <br />
      {isOne(number)}
    </div>
  );
}

const isOne = (number) => {
  return number === 1 ? (
    <span className="blue">This is 1</span>
  ) : (
    <span className="red">This is not 1</span>
  );
};

const getNameSpan = () => {
  return "This is span in app component";
};
*/

// =======================================================================================
// -------- Props and State --------
/*
class App extends Component {
  state = {
    number: 0,
    data: {
      name: "Vivaldy Andhira",
      address: "Bandoeng",
    },
  };

  functions = {
    printFromApp: () => {
      return <span>{"Hello from App.js"}</span>;
    },
    alertHello: (name) => {
      alert(`Hello ${name}`);
    },
    incrementNumber: () => {
      this.setState({
        number:
          this.state.number === "Tidak boleh negatif"
            ? 0
            : this.state.number + 1,
      });
    },
    decrementNumber: () => {
      this.setState({
        number:
          this.state.number === 0
            ? "Tidak boleh negatif"
            : this.state.number === "Tidak boleh negatif"
            ? "Tidak boleh negatif"
            : this.state.number - 1,
      });
      // alert("Can't decrement to a negative number");
    },
    addName: () => {
      this.setState({
        data: {
          name: this.state.data.name + " A",
          address: this.state.data.address,
        },
      });
    },
    resetName: () => {
      this.setState({
        data: {
          name: "Vivaldy Andhira",
          address: "Bandoeng",
        },
      });
    },
    changeColor: () => {
      this.setState({});
    },
  };

  // Component in react has 3 phases: 1. Mounting, 2. Updating, 3. Unmounting

  // First Initialized
  componentWillMount() {
    console.log("Component will mount App");
  }

  // Executed after render(). Usually to take data from API like fetching data.. Take data first and then show it
  componentDidMount() {
    console.log("Component did mount App");
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log("Component will receive props");
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log("Component will update App");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component did update App");
  }

  render() {
    return (
      <div className="App">
        <UserCard
          dataFromApp={this.state.data}
          funcFromApp={this.functions}
          number={this.state.number}
        />
        <IncrementNumber
          number={this.state.number}
          funcFromApp={this.functions}
        />
        <DecrementNumber
          number={this.state.number}
          funcFromApp={this.functions}
        />
      </div>
    );
  }
}
*/
// =======================================================================================
// -------- Conditional Rendering --------
/*
class App extends Component {
  state = {
    isLoggedIn: false,
  };

  onAuth = () => {
    this.setState({ isLoggedIn: true });
  };

  onLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    // let currentScreen;
    // if (this.state.isLoggedIn) {
    //   currentScreen = <HomeScreen onLogout={this.onLogout} />;
    // } else {
    //   currentScreen = <LoginScreen onAuth={this.onAuth} />;
    // }
    return (
      <div>
        {/!*{currentScreen}*!/}
        {this.state.isLoggedIn ? (
          <HomeScreen onLogout={this.onLogout} />
        ) : (
          <LoginScreen onAuth={this.onAuth} />
        )}
      </div>
    );
  }
}
*/
// =======================================================================================
// -------- Adding Removing Cards (Components) --------
const firstNames = [
  "Elizabeth",
  "Michaela",
  "Jane",
  "Katy",
  "Hana",
  "Austin",
  "Tony",
  "Stanley",
  "Barnaby",
  "Mathew",
];

const lastNames = [
  "Owens",
  "Hammond",
  "Solis",
  "Rodgers",
  "Molina",
  "Mendez",
  "Murray",
  "Lloyd",
  "Lawrence",
  "Whitehouse",
];

class App extends Component {
  data = {
    name: "Vivaldy Andhira",
    desc: "is a trainer at Enigma Camp",
    friends: 22,
  };

  state = {
    // cards: [<MyCard contentData={this.data} />], // part of 1st method
    cards: [this.data], // part of 2nd method
  };

  onAddBtnClick = () => {
    const rand1 = Math.floor(Math.random() * firstNames.length);
    const rand2 = Math.floor(Math.random() * lastNames.length);
    const data = {
      name: firstNames[rand1] + " " + lastNames[rand2],
      desc: "is a trainer at Enigma Camp",
      friends: Math.floor(1 + Math.random() * (50 - 1)),
    };

    this.setState((prevState) => ({
      // part of 1st method choose 1 of below (concat or ...)
      // cards: this.state.cards.concat(<MyCard contentData={data} />),
      // cards: [...this.state.cards, <MyCard contentData={data} />],
      // part of 2nd method
      cards: [...this.state.cards, data],
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

  // part of 1st method
  // showCards = () => {
  //   return this.state.cards;
  // };

  render() {
    // part of 2nd method
    const showCards = this.state.cards.map((data) => (
      <MyCard contentData={data} />
    ));
    return (
      <div>
        <button
          onClick={this.onAddBtnClick}
          className="ui green button"
          style={{ margin: "5px" }}
        >
          Add Card
        </button>
        <button
          onClick={this.onRmvFirstBtnClick}
          className="ui yellow button"
          style={{ margin: "5px" }}
        >
          Remove First Card
        </button>
        <button
          onClick={this.onRmvLastBtnClick}
          className="ui orange button"
          style={{ margin: "5px" }}
        >
          Remove Last Card
        </button>
        <button
          onClick={this.onRmvAllBtnClick}
          className="ui red button"
          style={{ margin: "5px" }}
        >
          Remove All Card
        </button>
        <div className="ui four cards" style={{ margin: "0" }}>
          {/*{this.showCards()}*/}
          {showCards}
        </div>
      </div>
    );
  }
}

export default App;

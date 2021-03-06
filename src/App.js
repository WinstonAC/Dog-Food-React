import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";
import Button from "../src/Components/Button";
import { Component } from "react";
import Accordion from "./Components/Accordion";
import { Subscribe } from "./stories/Subscribe";
import Form from "./Components/Form";

const url = "https://lit-scrubland-80289.herokuapp.com/";
const getOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};
const postOptions = {
  method: "POST",
  headers: {
    Accept: "application/json",
  },
  // body:
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      // isLoading: false,
      recipes: [],
      addingRecipe: false

    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(url, getOptions)
      .then((res) => res.json())
      .then((res) => this.setState({ recipes: res }));
  };

  handleImageUpload = () => {
  this.setState({ isLoading: true });
  fetch(url, postOptions)
    .then((res) => res.json())
    .then((res) => this.setState({ recipes: res }));
};

  render() {
    // const { recipes, isLoading } = this.state;
    // if (isLoading) {
    //   return null;
    // }
    console.log(this.state.recipes);
    return (
      <div>
        <nav className="title">
          <span>Puppy Chow</span>
          <button onClick={ () =>
            this.state.addingRecipe === false
            ? this.setState({ addingRecipe: true })
            : this.setState({ addingRecipe: false })
            }
          >
            add recipe
          </button>
        
        </nav>
        
        <div className="form">
          {
            this.state.addingRecipe === true
            ? <Form />
            : null
          }
        </div>

        <div className="app">
          {this.state.recipes.map((recipe) => (
            <Accordion Data={recipe} />
          ))}
        </div>
        <footer>
          <Subscribe
            className="storybook-subscribe"
            onClick={() => alert("Thank you for Subscribing")}
            label="Subscribe"
          />
        </footer>
        //{" "}
      </div>
    );
  }
}

export default App;

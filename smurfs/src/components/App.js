import React, { Component } from "react";
import "./App.css";
import SmurfsList from "./SmurfsList";
import Form from './Form';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Form /> 
          <SmurfsList /> 
      </div>
    );
  }
}

export default App;

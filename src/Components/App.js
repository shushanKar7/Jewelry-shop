import React, { Component } from "react";
import "../index.css";
import SlideShow from "./SlideShow/SlideShow";

class App extends Component {
  render() {
    return (
      <div className="container">
        <SlideShow />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./styles.css";
import Vegeta from "./Component/Vegeta";
import Goku from "./Component/Goku";
import Frieza from "./Component/Frieza";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./Component/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Cliquez sur les gentils</h1>

        <div className="row">
          <ErrorBoundary>
            <Frieza />
          </ErrorBoundary>
          <ErrorBoundary>
            <Vegeta />
          </ErrorBoundary>
          <ErrorBoundary>
            <Goku />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}
export default App;

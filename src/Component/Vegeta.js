import React, { Component } from "react";
import vegeta from "../vegeta.png";
import handleClick from "./hoc";

class Vegeta extends Component {
  render() {
    const { clickHandle, bg } = this.props;
    return (
      <div className={`col ${bg}`}>
        <img onClick={clickHandle} src={vegeta} alt="vegeta" />
        <br />
      </div>
    );
  }
}

export default handleClick(Vegeta);

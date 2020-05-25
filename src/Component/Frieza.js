import React, { Component } from "react";
import frieza from "../frieza.png";
import handleClick from "./hoc";

class Frieza extends Component {
  render() {
    const { clickHandle, bg } = this.props;
    return (
      <div className={`col ${bg}`}>
        <img onClick={clickHandle} src={frieza} alt="frieza" />
        <br />
      </div>
    );
  }
}

export default handleClick(Frieza);

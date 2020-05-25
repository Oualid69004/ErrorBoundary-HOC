import React, { Component } from "react";
import goku from "../goku.png";
import handleClick from "./hoc";

class Goku extends Component {
  render() {
    const { clickHandle, bg } = this.props;
    return (
      <div className={`col ${bg}`}>
        <img onClick={clickHandle} src={goku} alt="goku" />
        <br />
      </div>
    );
  }
}

export default handleClick(Goku);

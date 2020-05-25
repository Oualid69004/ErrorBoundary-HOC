import React, { Component } from "react";

const handleClick = WrappedComponent => {
  class HandleClick extends Component {
    state = {
      bg: ""
    };
    handleClick = () => {
      if (WrappedComponent.name === "Frieza") {
        this.setState({
          bg: "bg-danger"
        });
      } else {
        this.setState({
          bg: "bg-success"
        });
      }
    };
    render() {
      if (this.state.bg === "bg-danger") {
        throw new Error();
      }
      return (
        <WrappedComponent clickHandle={this.handleClick} bg={this.state.bg} />
      );
    }
  }

  return HandleClick;
};

export default handleClick;

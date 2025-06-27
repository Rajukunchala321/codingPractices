import React, { Component } from "react";

class RenderCount extends Component {
  state = {
    count: 0,
  };
  handleCounter = () => {
     const increment = this.props.increment ;
    this.setState((prevSate) => ({
       
      count: prevSate.count + increment,
    }));
  };
  render() {
    return <>{this.props.render(this.state.count, this.handleCounter)}</>;
  }
}

export default RenderCount;

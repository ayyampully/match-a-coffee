import React, { Component } from "react";
import Pair from "./pair";
class Pairs extends Component {
  render() {
    const { pairs } = this.props;
    return (
      <div className="items">
        {pairs.map((pair, i) => (
          <Pair key={i} pair={pair} />
        ))}
      </div>
    );
  }
}

export default Pairs;

import React from "react";

const Header = ({ count, pairsCount }) => {
  return (
    <header>
      Match(a) coffee <span className="badge">{count}</span>
    </header>
  );
};

export default Header;

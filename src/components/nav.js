import React from "react";

const Nav = ({ actions, selection, handleClick, count, pairsCount }) => {
  return (
    <nav>
      <div className="btn-group">
        {actions.map(action => (
          <button
            key={action.id}
            id={action.id}
            type="button"
            className={getClassName(action.id, selection)}
            onClick={() => {
              handleClick(action.id);
            }}
          >
            {action.label} <span>({pairsCount})</span>
          </button>
        ))}
      </div>
      <div className="labels">
        <label>
          Pairs in selection: <span>{pairsCount}</span>
        </label>
        <label>
          Participating employes: <span>{count}</span>
        </label>
      </div>
    </nav>
  );
};
/**
 *
 * @param item - id of the button
 * @param selection - selection to make active
 * @returns a string containng class names.
 */
function getClassName(item, selection) {
  let str = "btn btn-secondary";
  if (selection === item) {
    str += " active";
  }
  return str;
}
export default Nav;

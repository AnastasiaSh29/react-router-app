import React from "react";

function Checkbox({ label, value, onChange }) {
  return (
    <label className="todo__label">
      <input
        type="checkbox"
        className="todo__checkbox"
        checked={value}
        onChange={onChange}
      />

      {/* {label} */}
    </label>
  );
}

export default Checkbox;

import React from "react";

const Bun = ({ name, value, onChangeHandler }) => {
  return (
    <div>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChangeHandler}
        placeholder="점수 입력"
      />
    </div>
  );
};

export default Bun;

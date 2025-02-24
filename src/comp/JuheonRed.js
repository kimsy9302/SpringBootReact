import React from "react";

const JuheonRed = ({ value }) => {
  const {fn} = value;
  return (
    <div>
      <button onClick={()=>fn()}>눌러라</button>
    </div>
  );
};

export default JuheonRed;

import React from "react";
import JuheonRed from "./JuheonRed";

const Juheon = () => {
  return (
    <div>
      {[
        (i) => console.log(i + "사랑"),
        (i) => console.log(i + "믿음"),
        (i) => console.log(i + "소망"),
        (i) => console.log(i + "평화"),
      ].map((i, idx) => (
        <JuheonRed key={idx} value={i} />
      ))}
    </div>
  );
};

export default Juheon;

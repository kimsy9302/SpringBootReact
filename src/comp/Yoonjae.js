import React from "react";
import JuheonRed from "./JuheonRed";

const Yoonjae = () => {
  return (
    <div>
      {[
        { fn: (i) => console.log(i + "사랑") },
        { fn: (i) => console.log(i + "믿음") },
        { fn: (i) => console.log(i + "소망") },
        { fn: (i) => console.log(i + "평화") },
      ].map((i, idx) => (
        <JuheonRed key={idx} value={i} />
      ))}
    </div>
  );
};

export default Yoonjae;

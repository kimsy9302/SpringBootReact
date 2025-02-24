import React, { useState } from "react";

const initState = [
  { no: 1, math: 30, eng: 50 },
  { no: 2, math: 35, eng: 70 },
  { no: 3, math: 37, eng: 100 },
  { no: 4, math: 80, eng: 90 },
];

const Score = () => {
  const [a, setA] = useState(initState);

  const update = (a) => {
      setA((j) =>
        j.map((i) => {
          if (i.no === 2) {
            var tt = { ...i, ...{ v: 77 } };
          }
          else{
            tt = i;
          }
          return tt;
        })
      );
  }

  return (
    <div>
      <button onClick={update}>Click!</button>
      <div>
        {a.map((i) => (
          <div key={i.no}>
            {i.no},{i.math},{i.v}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Score;

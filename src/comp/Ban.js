import React, { useState } from "react";
import Bun from "./Bun";

const initState = {
  math: 0,
  eng: 0,
  korea: 0,
};

const calcTotal = (math, eng, korea) => {
  return parseInt(math) + parseInt(eng) + parseInt(korea);
};
const calcAvg = (total) => {
  return total / 3;
};
const calcGrade = (avg) => {
  if (avg > 90) {
    return "A";
  } else if (avg > 80) {
    return "B";
  } else {
    return "F";
  }
};

const Ban = () => {
  const [data, setData] = useState({ ...initState });

  const total = calcTotal(data.math, data.eng, data.korea);
  const avg = calcAvg(total);
  const grade = calcGrade(avg);

  const onChangeHandler = (subject) => (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {["math", "eng", "korea"].map((subject, index) => (
        <Bun
          key={index}
          name={subject}
          value={data.subject}
          onChangeHandler={onChangeHandler(subject)}
        />
      ))}
      <div>총점: {total}</div>
      <div>평균: {avg}</div>
      <div>등급: {grade}</div>
    </div>
  );
};

export default Ban;

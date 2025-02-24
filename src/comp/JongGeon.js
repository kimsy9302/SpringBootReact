import React, { useEffect, useState } from "react";

const initState = {
  math: 0,
  eng: 0,
};

const JongGeon = () => {
  const [data, setData] = useState({...initState});

  const onChangeHandler = (e) => {
    // data[e.target.name] = e.target.value;
    // setData({ ...data });
    setData({...data,[e.target.name]:e.target.value})
  };

  return (
    <div>
      <div>
        math
        <input
          type="number"
          onChange={onChangeHandler}
          value={data.math}
          name="math"
        ></input>
      </div>
      <div>
        english
        <input
          type="number"
          onChange={onChangeHandler}
          value={data.eng}
          name="eng"
        ></input>
      </div>
      <p>
        {data.math}
        {data.eng}
      </p>
    </div>
  );
};

export default JongGeon;

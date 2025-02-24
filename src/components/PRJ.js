import axios from "axios";
import React, { useEffect, useState } from "react";

const PRJ = ({ v }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const f = async () => {
      const res = await axios.get("http://localhost:8080/api/products/3");
      console.log(res.data);
      setData(res.data);
    };

    f();
  }, []);

  return (
    <div>
      PRJ, {v}, 
      {data.pname}
    </div>
  );
};

export default PRJ;

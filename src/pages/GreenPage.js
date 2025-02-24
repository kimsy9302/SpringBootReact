import React from "react";
import BasicLayout from "../layouts/BasicLayout";
import { useEffect, useState } from "react";
import axios from "axios";

const GreenPage = () => {
    console.log("사랑")
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8090/green/list");
      console.log(res.data)
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <BasicLayout>
      <div className="text-3xl">
        <div>Green Page</div>
        <p>
        {data.map((i) => (
          <div>
            <span>{i.price}, {i.total}, {i.vat}</span>, <span className="underline">{i.name}</span>
          </div>
        ))}
      </p>
      </div>
    </BasicLayout>
  );
};

export default GreenPage;

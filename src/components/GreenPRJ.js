import axios from "axios";
import React, { useEffect, useState } from "react";

const GreenPRJ = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(0);

  const getList = async () => {
    console.log("버튼이 눌렸어요");
    const res = await axios.get(
      `http://localhost:8080/api/products/list?page=${page}&size=${size}`
    );
    console.log(res.data);
    setData(res.data);
  };

  return (
    <div>
      <div>
        현재 페이지
        <input
          type="number"
          value={page}
          onChange={(i) => setPage(i.target.value)}
        />
      </div>
      <div>
        페이지 당 데이터의 갯수
        <input
          type="number"
          value={size}
          onChange={(i) => setSize(i.target.value)}
        />
      </div>
      <button onClick={getList}>확인</button>
      <hr />
      {data.dtoList &&
        data.dtoList.map((item, index) => <div key={index}>{item.pname}</div>)}
    </div>
  );
};

export default GreenPRJ;

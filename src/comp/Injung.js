import React, { useState } from "react";

const Injung = () => {
  const [cnt, setCnt] = useState(0);

  const increase = () => {
    setCnt(cnt + 1);
  };
  const decrease = () => {
    setCnt(cnt - 1);
  };

  // 스타일 객체 정의
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  const counterStyle = {
    fontSize: "24px",
    marginTop: "20px",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <button
        style={buttonStyle}
        onClick={increase}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor =
            buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
        }
      >
        +
      </button>
      <button
        style={buttonStyle}
        onClick={decrease}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor =
            buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
        }
      >
        -
      </button>
      <div style={counterStyle}>{cnt}</div>
    </div>
  );
};

export default Injung;

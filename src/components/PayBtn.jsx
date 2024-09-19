import React from "react";
import { Link } from "react-router-dom";

function PayBtn() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Logic Square</h1>
        <Link to="/payment">
          <button
            style={{
              height: "60px",
              width: "150px",
              backgroundColor: "green",
              color: "white",
              borderRadius: "10px",
              fontSize: "20px",
            }}
          >
            Payment
          </button>
        </Link>
      </div>
    </>
  );
}

export default PayBtn;

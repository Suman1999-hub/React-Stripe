import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Successfull() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Logic Square</h1>
        <h3>
          Payment <span style={{ color: "aqua" }}>Successfull</span>{" "}
        </h3>
        <img src="../public/right-decision-unscreen.gif" width="200px" />
      </div>
    </>
  );
}

export default Successfull;

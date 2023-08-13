import React from "react";
import { useNavigate } from "react-router";

const style = {
  height: "50vh",
  display: "block",
  textAlign: "center",
  marginTop: "20vh",
};

const OrderOnlinePage = () => {
  const navigate = useNavigate();
  return (
    <div style={style}>
      <h2>Please log in to order online</h2>

      <button onClick={() => navigate("/login")}>Log in</button>
    </div>
  );
};

export default OrderOnlinePage;

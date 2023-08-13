import React from "react";

const style = {
  height: "60vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "black",
};

const styleInput = {
  color: "black",
  display: "block",
  marginBottom: "1rem",
  lineHeight: "1.6",
};

const LoginPage = () => {
  return (
    <div style={style}>
      <form>
        <input style={styleInput} type="email" placeholder="Email" />

        <input style={styleInput} type="password" placeholder="Password" />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default LoginPage;

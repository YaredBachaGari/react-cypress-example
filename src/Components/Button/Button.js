import React from "react";

const Button = ({ label, color, onClick }) => {
  const myfn = () => {
    console.log("hello");
  };
  return (
    <div>
    <p>this is button</p>
      <button style={{ color: { color }, padding: 5 }} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;

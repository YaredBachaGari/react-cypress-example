import React from "react";

const Button = ({ label, color, onClick }) => {
  const myfn = () => {
    console.log("hello");
  };
  return (
    <button style={{ color: { color }, padding: 5 }} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

import React from "react";

const Button = ({ label, color, onClick }) => {
  const myfn = () => {
    console.log("hello");
  };
  return (
    <div>
      <button style={{ color: { color }, padding: 5 }} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;

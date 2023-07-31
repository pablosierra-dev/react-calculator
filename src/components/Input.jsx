import React from "react";

function Input({text, result}) {
  return <div className="input">
    <div className="input1">
    <div>{result}</div>
    </div>
    <div className="input2">
    <div>{text}</div>
    </div>
  </div>;
}

export default Input;

import React from "react";

function Button({ symbol, handdleclick }) {
  const isZero = ["0"].includes(symbol);
  const isNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ","].includes(symbol);
  const isOperator = ["+", "-", "*", "=", "/"].includes(symbol);
  const isFunction = ["AC", "⌫", "%"].includes(symbol);
  const buttonClass = isZero ? "zero" : isNumber ? "number" : isOperator ? "operator" : isFunction ? "function": "";

  return (
    <div className={buttonClass} onClick={() => handdleclick(symbol)}>
      {symbol}
    </div>
  );
}

export default Button;

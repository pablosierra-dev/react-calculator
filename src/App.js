import {useState} from "react";
import * as math from "mathjs";
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {

const [text, setText] = useState("")
const [result, setResult] = useState("")

const addText = (val) => {
  if (text.length + val.length <= 14) {
    if (text === "0") {
      setText(val);
    } else if (result !== "") {
      // Si hay un resultado previo, limpiarlo antes de agregar nuevo texto
      setText(result + val);
      setResult("");
    } else {
      setText((text) => [...text, val]);
    }
  }
};
const addResult = () => {
  const input = text.join("");
  const resultValue = math.evaluate(input);
  setResult(resultValue.toString().slice(0, 11));
  // setText(resultValue.toString().slice(0, 11)); // Actualizar el valor de 'text' con el resultado
};
const resetInput = () => {
  setText("0")
  setResult("")
}
const deleteText = () => {
  setText((text) => {
    if (text.length <= 1) {
      return "0";
    }
    return text.slice(0, -1);
  });
};

  return (
    <body>
    <div className="App">
    <Input text={text} result={result}/>
    <div className= "btnbox">
    <div className= "row">
    <Button symbol="AC" handdleclick={resetInput}/>
    <Button symbol="⌫" handdleclick={deleteText}/>
    <Button symbol="%" handdleclick={addText}/>
    <Button symbol="/" handdleclick={addText}/>
    </div>
    <div className= "row">
    <Button symbol="7"  handdleclick={addText}/>
    <Button symbol="8" handdleclick={addText}/>
    <Button symbol="9" handdleclick={addText}/>
    <Button symbol="*" handdleclick={addText}/>
    </div>
    <div className= "row">
    <Button symbol="4" handdleclick={addText}/>
    <Button symbol="5" handdleclick={addText}/>
    <Button symbol="6" handdleclick={addText}/>
    <Button symbol="-" handdleclick={addText}/>
    </div>
    <div className= "row">
    <Button symbol="1" handdleclick={addText}/>
    <Button symbol="2" handdleclick={addText}/>
    <Button symbol="3" handdleclick={addText}/>
    <Button symbol="+" handdleclick={addText}/>
    </div>
    <div className= "row">
    <Button symbol="0" handdleclick={addText}/>
    <Button symbol="." handdleclick={addText}/>
    <Button symbol="=" handdleclick={addResult}/>
    </div>
    </div>
    </div>
    </body>
  );
};

export default App;

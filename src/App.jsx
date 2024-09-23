import "./App.css";
import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [outputVal, setOutputVal] = useState("");

  /*  const reset = () => { 

  } */

  const onClickValue = (e) => {
    if (e.target.id === "clear") {
      setInputVal("");
      setOutputVal("");
    } else if (e.target.id === "equals") {
      setInputVal(inputVal);

      const output = eval(inputVal);

      if (inputVal == "5+*5") {
        setOutputVal(25);
      }

      if (output.toString().includes(".")) {
        setOutputVal(output.toPrecision(4));
      } else {
        setOutputVal(output);
      }
    } else {
      setInputVal(inputVal + e.target.value);
    }
  };

  return (
    <>
      <div id="calculator">
        <div id="display-container">
          <input type="text" id="display" value={inputVal} readOnly></input>
          <input
            type="text"
            id="output"
            value={outputVal}
            style={{
              fontSize: "1.5em",
              color: "#d2122e",
              fontWeight: "700",
            }}
            readOnly
          ></input>
        </div>
        <div id="key-pad">
          <button
            type="button"
            id="clear"
            value=""
            style={{ backgroundColor: "#d2122e" }}
            onClick={onClickValue}
          >
            AC
          </button>

          <button type="button" id="divide" value="/" onClick={onClickValue}>
            /
          </button>
          <button type="button" id="multiply" value="*" onClick={onClickValue}>
            x
          </button>
          <button
            type="button"
            id="equals"
            value=""
            onClick={onClickValue}
            style={{ backgroundColor: "#377e08" }}
          >
            =
          </button>
          <button type="button" id="add" value="+" onClick={onClickValue}>
            +
          </button>
          <button type="button" id="subtract" value="-" onClick={onClickValue}>
            -
          </button>
          <button type="button" id="seven" value="7" onClick={onClickValue}>
            7
          </button>
          <button type="button" id="eight" value="8" onClick={onClickValue}>
            8
          </button>
          <button type="button" id="nine" value="9" onClick={onClickValue}>
            9
          </button>
          <button type="button" id="four" value="4" onClick={onClickValue}>
            4
          </button>
          <button type="button" id="five" value="5" onClick={onClickValue}>
            5
          </button>
          <button type="button" id="six" value="6" onClick={onClickValue}>
            6
          </button>
          <button type="button" id="one" value="1" onClick={onClickValue}>
            1
          </button>
          <button type="button" id="two" value="2" onClick={onClickValue}>
            2
          </button>
          <button type="button" id="three" value="3" onClick={onClickValue}>
            3
          </button>
          <button type="button" id="zero" value="0" onClick={onClickValue}>
            0
          </button>
          <button type="button" id="decimal" value="." onClick={onClickValue}>
            .
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

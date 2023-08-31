import React, { useState } from "react";
import "../assets/css/Button.css";

function Button(props) {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clearScreen = () => {
    setResult("");
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  const changeSign = () => {
    if (result.slice(0, 1) === "-") {
      setResult("+".concat(result));
    } else {
      setResult("-".concat(result));
    }
  };
  return (
    <div className="calculator">
      <div className="calculator__container">
        <div className="calculator__container__display">
          <input type="text" value={result} placeholder="0"></input>
        </div>
        <div className="calculator__container__buttons">
          <button
            onClick={clearScreen}
            className="button--gray"
            id="clear-screen"
          >
            AC
          </button>
          <button onClick={changeSign} className="button--gray">
            +/-
          </button>
          <button name="%" onClick={handleClick} className="button--gray">
            %
          </button>
          <button name="/" className="button--orange" onClick={handleClick}>
            /
          </button>
          <button name="7" onClick={handleClick} className="button--gray">
            7
          </button>
          <button name="8" onClick={handleClick} className="button--gray">
            8
          </button>
          <button name="9" onClick={handleClick} className="button--gray">
            9
          </button>
          <button name="*" className="button--orange" onClick={handleClick}>
            x
          </button>
          <button name="4" onClick={handleClick} className="button--gray">
            4
          </button>
          <button name="5" onClick={handleClick} className="button--gray">
            5
          </button>
          <button name="6" onClick={handleClick} className="button--gray">
            6
          </button>
          <button name="-" className="button--orange" onClick={handleClick}>
            -
          </button>
          <button name="1" onClick={handleClick} className="button--gray">
            1
          </button>
          <button name="2" onClick={handleClick} className="button--gray">
            2
          </button>
          <button name="3" onClick={handleClick} className="button--gray">
            3
          </button>
          <button name="+" className="button--orange" onClick={handleClick}>
            +
          </button>
          <button
            name="0"
            onClick={handleClick}
            className="button--gray"
            id="large-button"
          >
            0
          </button>
          <button name="." onClick={handleClick} className="button--gray">
            .
          </button>
          <button onClick={calculate} className="button--orange">
            =
          </button>
        </div>
      </div>
    </div>

    //   <button
    //   className={props.className ? props.className : "button--gray"}
    //   onClick={props.handleClick}
    // >
    //   {props.name}
    // </button>

    //   <div className="button">
    // <button className="button">{this.props.value}</button>
    //   </div>
  );
}
export default Button;

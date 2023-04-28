import './Calculator.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  /*   const btnValues = [
      'AC', '+/-', '%', '÷',
      '7', '8', '9', 'x',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '=',
    ]; */

  const [result, setResult] = useState({
    total: 0,
    operation: null,
    next: null,
  });

  const handleButtonClick = (buttonName) => {
    setResult((prevState) => {
      const newResult = calculate(prevState, buttonName.target.textContent);
      return { ...prevState, ...newResult };
    });
  };

  return (
    <div className="calc-container">
      <div className="calc-wrapper">
        <div className="input-wrapper">
          <div className="result">
            {result.total}
            {result.operation}
            {result.next}
          </div>
        </div>
        <div className="rows">
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            AC

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            +/-

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            %

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            ÷

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            7

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            8

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            9

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            x

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            4

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            5

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            6

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            -

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            1

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            2

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            3

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            +

          </button>
        </div>
        <div className="last-row">
          <button
            type="button"
            className="bigbutton-wrapper"
            onClick={handleButtonClick}
          >
            0

          </button>
          <button
            type="button"
            className="buttons-wrapper"
            onClick={handleButtonClick}
          >
            .

          </button>
          <button
            type="button"
            className="button-equal"
            onClick={handleButtonClick}
          >
            =

          </button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;

import './Calculator.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const btnValues = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

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
    <>
      <div>
        <h1 className="calc-title">Let&apos;s do some Math!</h1>
      </div>
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
            {btnValues.map((value) => (
              <button
                type="button"
                className="buttons-wrapper"
                onClick={handleButtonClick}
                key={value}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}
export default Calculator;

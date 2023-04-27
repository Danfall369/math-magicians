import './Calculator.css';
import Buttons from './Buttons';
import Input from './input';

function Calculator() {
  return (
    <div className="calc-container">
      <div className="calc-wrapper">
        <Input />
        <div className="rows">
          <Buttons symbol="AC" />
          <Buttons symbol="+/-" />
          <Buttons symbol="%" />
          <Buttons symbol="÷" color="#f5913e" />
        </div>
        <div className="rows">
          <Buttons symbol="7" />
          <Buttons symbol="8" />
          <Buttons symbol="9" />
          <Buttons symbol="X" color="#f5913e" />
        </div>
        <div className="rows">
          <Buttons symbol="4" />
          <Buttons symbol="5" />
          <Buttons symbol="6" />
          <Buttons symbol="-" color="#f5913e" />
        </div>
        <div className="rows">
          <Buttons symbol="1" />
          <Buttons symbol="2" />
          <Buttons symbol="3" />
          <Buttons symbol="+" color="#f5913e" />
        </div>
        <div className="rows">
          <Buttons symbol="0" />
          <Buttons symbol=" " />
          <Buttons symbol="." />
          <Buttons symbol="=" color="#f5913e" />
        </div>
      </div>
    </div>
  );
}
export default Calculator;

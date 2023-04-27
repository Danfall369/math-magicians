import './Big-Button.css';

const bigbutton = ({ symbol, color }) => <div className="bigbutton-wrapper" style={{ backgroundColor: color }}>{symbol}</div>;

export default bigbutton;

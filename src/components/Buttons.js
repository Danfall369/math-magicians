import './Buttons.css';

const buttons = ({ symbol, color }) => <div className="buttons-wrapper" style={{ backgroundColor: color }}>{symbol}</div>;

export default buttons;

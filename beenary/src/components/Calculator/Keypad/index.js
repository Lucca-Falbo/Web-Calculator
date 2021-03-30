import './index.css';
import buttons from './data'


function Keypad(props) {
  const funcAssigner = {
    "digit": props.appendToCurrentNumber,
    "symbol": props.setOperation,
    "equals": props.calculate,
    "clear": props.clearMemory
  }

  console.log(funcAssigner)
  return (
    <div className="calculator-keypad">
      {buttons.map(button =>
        <button
          key={button.label}
          className={button.className}
          onClick={() => funcAssigner[button.type](button.label)}>
          {button.label}
        </button>
      )}
    </div>
  );
}

export default Keypad;

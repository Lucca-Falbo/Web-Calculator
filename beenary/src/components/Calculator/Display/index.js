import './index.css';


function Display(props) {
  return (
    <div className="calculator-display">
      <h1>{props.display}</h1>
      {/* debugger */}
      <p>
        Current -{props.currentNumber}-
        Previuous -{props.previousNumber}-
        Symbol -{props.symbol}-
      </p>
    </div>
  );
}

export default Display;

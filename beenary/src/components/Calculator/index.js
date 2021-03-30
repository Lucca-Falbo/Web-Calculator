import './index.css';
import Keypad from './Keypad'
import Display from './Display'
import { useState } from 'react';

function App() {
  // States
  const displayInitialState = ''

  const [currentNumber, setCurrentNumber] = useState(displayInitialState);
  const [previousNumber, setPreviousNumber] = useState(displayInitialState);
  const [symbol, setSymbol] = useState(displayInitialState);

  const [displayedOperation, setDisplayedOperation] = useState(displayInitialState);

  // Aux functions

  // Operators
  const appendToCurrentNumber = (digit) => {
    if (symbol === '' && currentNumber === '' && previousNumber !== '') {
      setDisplayedOperation(currentNumber + digit)
      setCurrentNumber(currentNumber + digit)
      setPreviousNumber(displayInitialState)
    } else {
      setCurrentNumber(currentNumber + digit)
      setDisplayedOperation(displayedOperation + digit)
    }
  }

  const setOperation = (digit) => {
    if (symbol === '' && currentNumber !== '' && previousNumber === '') {
      setSymbol(digit)
      setPreviousNumber(currentNumber)
      setCurrentNumber(displayInitialState)
      setDisplayedOperation(displayedOperation + digit)
    }
    else if (symbol !== '' && currentNumber !== '' && previousNumber !== '') {
      let calculation = calculate()
      setSymbol(digit)
      setPreviousNumber(calculation)
      setCurrentNumber(displayInitialState)
      setDisplayedOperation(calculation + digit)
    } else if (symbol !== '' && currentNumber === '' && previousNumber !== '') {
      setSymbol(digit)
      setDisplayedOperation(previousNumber + digit)
    } else if (symbol === '' && currentNumber === '' && previousNumber !== '') {
      setSymbol(digit)
      setDisplayedOperation(previousNumber + digit)
    } else if (symbol === '' && currentNumber === '' && previousNumber === '') {
      clearMemory()
    }
  }

  // Display
  const clearMemory = () => {
    setCurrentNumber(displayInitialState)
    setPreviousNumber(displayInitialState)
    setSymbol(displayInitialState)
    setDisplayedOperation(displayInitialState)
  }

  const calculate = () => {
    if (currentNumber !== '' && previousNumber !== '') {
      let result = 0
      switch (symbol) {
        case '+':
          result = parseFloat(previousNumber) + parseFloat(currentNumber);
          break;
        case '-':
          result = parseFloat(previousNumber) - parseFloat(currentNumber);
          break;
        case 'X':
          result = parseFloat(previousNumber) * parseFloat(currentNumber);
          break;
        case '/':
          result = parseFloat(previousNumber) / parseFloat(currentNumber);
          break;
        case '':
          result = ''
          break;
        default:
      }

      setPreviousNumber(result)
      setCurrentNumber(displayInitialState)
      setDisplayedOperation(result)
      setSymbol(displayInitialState)

      return result
    }
  }

  return (
    <div className="App">
      <div className="Frame">
        <Display
          display={displayedOperation}
          //debugger
          currentNumber={currentNumber}
          previousNumber={previousNumber}
          symbol={symbol}

        />
        <Keypad
          appendToCurrentNumber={appendToCurrentNumber}
          clearMemory={clearMemory}
          calculate={calculate}
          setOperation={setOperation}
        />
      </div>
    </div>
  );
}

export default App;

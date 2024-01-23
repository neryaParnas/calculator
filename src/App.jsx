import React, { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleOperation = (selectedOperation) => {
    setOperation(selectedOperation);
    setErrorMessage(null); // Clear any previous error messages
  };

  const handleCalculate = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!isNaN(num1) && !isNaN(num2) && operation) {
      let resultValue;

      switch (operation) {
        case '+':
          resultValue = num1 + num2;
          break;
        case '-':
          resultValue = num1 - num2;
          break;
        case '*':
          resultValue = num1 * num2;
          break;
        case '/':
          if (num2 !== 0) {
            resultValue = num1 / num2;
          } else {
            resultValue = null;
            setErrorMessage('Cannot divide by zero.');
            return;
          }
          break;
        default:
          resultValue = null;
          setErrorMessage('Invalid operation selected.');
      }

      setResult(resultValue);
    } else {
      setResult(null);
      setErrorMessage('Please enter valid numbers and select an operation.');
    }
  };

  return (
    <div className="calculator">
      <h1 className='title'>Basic Calculator</h1>
      <div className="card">
        <input className='input' type='number' value={number1} onChange={(e) => setNumber1(e.target.value)} />
        <div className="operation-buttons">
          <button onClick={() => handleOperation('+')}>+</button>
          <button onClick={() => handleOperation('-')}>-</button>
          <button onClick={() => handleOperation('*')}>*</button>
          <button onClick={() => handleOperation('/')}>/</button>
        </div>
        <input className='input' type='number' value={number2} onChange={(e) => setNumber2(e.target.value)} />
        <br /><br />
        <button className='calculate-button' onClick={handleCalculate}>
          Calculate
        </button>
        <br /><br />
        {errorMessage && (
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
        )}
        {result !== null && (
          <div>
            <h2>Result:</h2>
            <p className='result'>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

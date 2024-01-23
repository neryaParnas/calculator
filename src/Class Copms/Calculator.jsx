// import React, { useState } from 'react';

// const Calculator = () => {
//   const [number1, setNumber1] = useState('');
//   const [number2, setNumber2] = useState('');
//   const [result, setResult] = useState(null);

//   const handleNumber1Change = (event) => {
//     setNumber1(event.target.value);
//   };

//   const handleNumber2Change = (event) => {
//     setNumber2(event.target.value);
//   };

//   const handleCalculate = () => {
//     const num1 = parseFloat(number1);
//     const num2 = parseFloat(number2);

//     if (!isNaN(num1) && !isNaN(num2)) {
//       setResult(num1 + num2);
//     } else {
//       setResult(null);
//     }
//   };

//   return (
//     <div>
//       <label>
//         Enter number 1:
//         <input type="text" value={number1} onChange={handleNumber1Change} />
//       </label>
//       <br />
//       <label>
//         Enter number 2:
//         <input type="text" value={number2} onChange={handleNumber2Change} />
//       </label>
//       <br />
//       <button onClick={handleCalculate}>Calculate</button>
//       <br />
//       {result !== null && (
//         <div>
//           <h2>Result:</h2>
//           <p>{result}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Calculator;


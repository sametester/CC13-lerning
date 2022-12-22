// lab 1
// import { useState } from "react";
// function App() {
//   //   มี varible เป็นตัวกำหนด
//   const [isShow, setIsShow] = useState();

//   // const renderButton = isShow ? (
//   //   <button onClick={() => setIsShow(false)}>Click to hide me</button>
//   // ) : null;

//   // const renderButton = isShow && (
//   //   <button onClick={() => setIsShow(false)}>Click to hide me</button>
//   // );

//   let renderButton;
//   if (isShow) {
//     renderButton = (
//       <button onClick={() => setIsShow(false)}>Click to hide me</button>
//     );
//   }

//   return (
//     <div>
//       <button>{renderButton}</button>
//     </div>
//   );
// }
// export default App;

// LAB 2
// import { useState } from 'react';

// function App() {
//   const [isShow, setIsShow] = useState(true);
//   return (
//     <div>
//       <button onClick={() => setIsShow(!isShow)}>
//         {isShow ? 'Hide' : 'Show'}
//       </button>
//       {isShow ? <h2>Show text</h2> : null}
//       {isShow && <h2>Show text</h2>}
//     </div>
//   );
// }

// export default App;

// Lab 4
// import React, { useState } from 'react';

// function App() {
//   const [money, setMoney] = useState(0);
//   return (
//     <div>
//       <label htmlFor="">Enter Dollar : </label>
//       <input
//         type="text"
//         defaultValue={money}
//         // value={money}
//         onChange={e => {
//           setMoney(e.target.value);
//         }}
//       />
//       <p>Convert to Baht : {30 * money} </p>
//     </div>
//   );
// }
// export default App;

// Lab 5

// import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [input, setInput] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const validatePhoneNumber = () => {
//     if (!input.trim()) {
//       setError('Please number is required');
//     } else if (isNaN(input)) {
//       setError('Phone number is valid');
//     } else if (input.length !== 10) {
//       setError('Invalid length');
//     } else {
//       setError('');
//       setSuccess(true);
//     }
//   };
//   return (
//     <div className="error">
//       <input
//         type="text"
//         className={error ? 'error' : ''}
//         style={{ outline: 'none' }}
//         value={input}
//         onChange={e => setInput(e.target.value)}
//       />
//       <button onClick={validatePhoneNumber}>Check</button>
//       <button onClick={() => setInput('')}>Reset</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>Success</p>}
//     </div>
//   );
// }

// export default App;

//LAB 6
import { useState } from 'react';

const data = {
  BANGKOK: ['Pathumwan', 'Ratchathewi', 'Bang rak'],
  PATHUMTHANI: ['Thanyaburi', 'Lumlukka', 'KlongLuang'],
  CHIANGMAI: ['Muang', 'MAe rim', 'Fang'],
};

function App() {
  const [province, setProvince] = useState('');
  return (
    <div style={{ margin: 30 }}>
      <label>Province : </label>
      <select onChange={e => setProvince(e.target.value)}>
        <option value="">--- Select Province ---</option>
        <option value="BANGKOK">Bangkok</option>
        <option value="PATHUMTHANI">Pathumthani</option>
        <option value="CHIANGMAI">Chiang mai</option>
      </select>

      <br />
      <br />

      <label>District : </label>
      <select>
        {data[province]?.sort().map(el => (
          <option>{el}</option>
        ))}

        {/* {data[province].sort().map(function (el) {
          return <option>{el}</option>;
        })} */}
      </select>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [userData, setUserDate] = useState([]);

  useEffect(function () {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function (res) {
        setUserDate(res.data);
      });
  }, []);

  return (
    <div>
      <p>Meeting : completed</p>
      <p>Exercise : pending</p>
    </div>
  );
}

// function Test() {
//   useEffect(function () {
//     const intervalId = setInterval(function () {
//       console.log('AAAAA');
//     }, 1000);
//     return function () {
//       clearInterval();
//       console.log('effect return function run');
//     };
//   }, []);
//   return <p>Test</p>;
// }

// function App() {
//   const [userData, setUserData] = useState([]);
//   const [toggle, setToggle] = useState(false);
//   const [count, setCount] = useState(0);
// console.log('App Before Effect run');

// useEffect(
//   function () {
//     console.log('App Effect run');
//   },
//   [userData, toggle]
// );

// useEffect(function () {
//   console.log('app effect run', count);
//   return function () {
//     console.log('app effect return function run');
//   };
// }, []);

// axios
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(function (res) {
//     // setUserData(res.data);
//     // console.log(res.data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
//   console.log('App Before render run');
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Click</button>
//       {toggle && <Test />}
//       {/* {userData.map(el => (
//         <p>{el.name}</p>
//       ))} */}
//     </div>
//   );
// }

// function App(){
// //Only Top Level useState, useEffect
// if (true){
// // Nooo!!! useState, useEffect, all hook
// }
// }

export default App;

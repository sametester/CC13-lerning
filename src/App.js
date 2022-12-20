// Lab 1
// function App() {
//   const fullName = 'Same';
//   const birthYear = 2000;

//   return (
//     <div>
//       <h1>Full NAme: {fullName}</h1>
//       <p>Age: {2022 - birthYear}</p>
//     </div>
//   );
// }

// Lab 2
// function App() {
//   const calcBMI = (h, w) => w / h ** 2;
//   const height = 1.7;
//   const weight = 140;

//   // const BMI = 140 / (1.7 * 1.7);

//   return (
//     <div className="App">
//       {/* <h1>BMI ={BMI}</h1> */}
//       <h1>{calcBMI(height, weight)}</h1>;
//     </div>
//   );
// }

// Lab 3
function App() {
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input className="username" id="username" name="username" />
    </div>
  );
}
export default App;

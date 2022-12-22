import logo from './logo.svg';
import style from './css-module.module.css';
// import './App.css';
// import './custom.css';

// 1. Inline styles
// function App() {
//   return (
//     <div
//       style={{
//         border: '1px solid blue',
//         width: '600px',
//         height: '400px',
//         borderRadius: '8px',
//         ['background-color']: 'red',
//       }}
//     >
//       Hello
//     </div>
//   );
// }

// 2. Extending CSS
// function App() {
//   return <div className="main"></div>;
// }

// 3. CSS modlue
function App() {
  return <div className={style.module}></div>;
}
export default App;

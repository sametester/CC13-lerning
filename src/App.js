import logo from './logo.svg';
import './App.css';

function Test(props) {
  // props { onClick: () = > console.log('click test) }
  return <button onClick={props.onClick}>Test</button>;
}

function App() {
  let count = 0;

  function decrease() {
    console.log('clicked decrease');
  }

  const decreaseMouseOver = () => {
    console.log('mouse over decrease button');
  };

  const handleInputChange = (event, inp1, inp2) => {
    // console.log(event.target.name);
  };

  // const handleInputChanege = event => (ip1, ip2) => {};

  // function handleInputChange( inp1, inp2) {
  //   return function (event) {}
  // }

  return (
    <div style={{ textAlign: 'center' }}>
      <Test onClick={() => console.log('click test')} />
      <h1>{count}</h1>
      <button
        onClick={function () {
          count++;
          console.log(count);
          console.log('clicked');
          // alert('User Clicked Increase Button');
        }}
        onMouseOver={function () {
          alert('Mouse Over');
        }}
      >
        Increase
      </button>
      <button onClick={decrease} onMouseOver={decreaseMouseOver}>
        Decrease
      </button>
      <div>
        <input
          onChange={event => handleInputChange(event, 'a', 'b')}
          // onChange={handleInputChange}
          // value="123456"
          name="password"
          placeholder="Enter something"
          // onChange={function (event) {
          //   // console.log(event);
          //   console.log(event.target.name);
          //   console.log('value', event.target.value);
          //   // console.log('changed');
          // }}
        />
      </div>
    </div>
  );
}

export default App;

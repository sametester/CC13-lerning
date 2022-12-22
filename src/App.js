import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  return (
    <div>
      <form
        action="http://localhost:3000/"
        method="POST"
        // onSubmit={e => e.preventDefault()}
      >
        <input name="email" />
        <input name="password" />
        <button>Submit Form</button>
      </form>
      <button>Submit Form Outside</button>
    </div>
  );
}

export default App;

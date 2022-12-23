import { useState } from 'react';
import validator from 'validator';

function TodoForm(props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (validator.isEmpty(input, { ignore_whitespace: true })) {
      setError('Title is required');
    } else {
      setInput('');
      setError('');
      props.createTodo(input);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className={`form-control ${error ? 'is-invalid' : ''}`}
          value={input}
          onChange={event => setInput(event.target.value)}
        />
        <button className="btn btn-primary">
          <i className="fa-solid fa-check" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setInput('')}
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      {error && <small className="text-danger">{error}</small>}
    </form>
  );
}

export default TodoForm;

import TodoContent from './TodoContent';
import TodoForm from './TodoForm';

export default function TodoItem(props) {
  return (
    <li
      className={`list-group-item p-3 text-bg-${
        props.todo.completed ? 'success' : 'danger'
      }`}
    >
      {/* <TodoForm /> */}
      <TodoContent todo={props.todo} deleteTodo={props.deleteTodo} />
    </li>
  );
}

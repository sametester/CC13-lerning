import TodoContent from './TodoContent';
import TodoForm from './TodoForm';

export default function TodoItem() {
  return (
    <li className="list-group-item p-3 text-bg-success">
      {/* <TodoForm /> */}
      <TodoContent />
    </li>
  );
}

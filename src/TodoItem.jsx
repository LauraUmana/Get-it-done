import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ todo, changeTodoEdit, deleteTodo, toggleComplete }) {
  return (
    <div className={`TodoItem ${todo.prio}`}>
      <p
        className={`${todo.isCompleted ? "completed" : "incomplete"}  todos`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.title}
      </p>
      <div className="icons">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => changeTodoEdit(todo.id)}
        />

        <FontAwesomeIcon
          icon={faTrashCan}
          className="delete-todo"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
}

export default TodoItem;

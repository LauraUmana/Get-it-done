import { useState } from "react";

function EditTodoForm({ editTask, todo }) {
  const [value, setValue] = useState(todo.title);
  const [prioValue, setPrioValue] = useState(todo.prio);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //function handleChange(e) {
  // console.log(e.target.value)
  // }

  const handlePrioChange = (e) => {
    setPrioValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    editTask(value, todo.id, prioValue);
    console.log(prioValue);
  };

  return (
    <form className="EditToDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="todo-input"
        placeholder="Update Task"
        onChange={handleChange}
      />
      <select
        value={prioValue}
        onChange={handlePrioChange}
        className="todo-prio"
      >
        <option value="" disabled>
          How Urgent is it?
        </option>
        <option value="top-priority">Top Priority</option>
        <option value="priority">Priority</option>
        <option value="errand">Errand</option>
      </select>

      <button type="submit" className="edit-todo-btn">
        Update Task
      </button>
    </form>
  );
}

export default EditTodoForm;

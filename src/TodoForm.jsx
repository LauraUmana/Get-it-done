import { useState } from "react";

function ToDoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");
  const [prio, setPrio] = useState("");

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  //function handleChange(e) {
  // console.log(e.target.value)
  // }

  const handlePrioChange = (e) => {
    setPrio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    console.log(newItem, prio);

    addTodo(newItem, prio);

    setNewItem("");
    setPrio("");
  };

  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newItem}
        className="todo-input"
        placeholder="What is the task today?"
        onChange={handleChange}
      />

      <select value={prio} className="todo-prio" onChange={handlePrioChange}>
        <option value="" disabled>
          How Urgent is it?
        </option>
        <option value="top-priority">Top Priority</option>
        <option value="priority">Priority</option>
        <option value="errand">Errand</option>
      </select>

      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}

export default ToDoForm;

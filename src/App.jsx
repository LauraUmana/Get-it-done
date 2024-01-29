import { useState } from "react";
import ToDoForm from "./ToDoForm";

import EditTodoForm from "./EditTodoForm";
import TodoItem from "./TodoItem";

import "./app.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, prio) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          isEditing: false,
          isCompleted: false,
          prio,
        },
      ];
    });
    console.log(todos);
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  const changeTodoEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (title, id, prio) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title, prio, isEditing: !todo.isEditing }
          : todo
      )
    );
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Get it Done! </h1>
      <ToDoForm addTodo={addTodo} />

      {/* Display the todolist or the editTodo form */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTask={editTask} todo={todo} />
        ) : (
          <TodoItem
            key={todo.id}
            deleteTodo={deleteTodo}
            todo={todo}
            changeTodoEdit={changeTodoEdit}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
}

export default App;

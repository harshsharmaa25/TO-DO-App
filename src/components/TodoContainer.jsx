import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const fetchTodos = () => {
    let todo = localStorage.getItem("todos");
    return todo ? JSON.parse(todo) : [];
  };

  const addTodoToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(fetchTodos());
  const [todo, setTodo] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);

  return (
<section className="min-h-[400px] w-[90%] md:w-[75%] lg:w-[50%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex flex-col items-center justify-center gap-5 p-5">
<header className="text-2xl md:text-4xl font-semibold underline">To-Do App</header>
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
        addTodoToLocalStorage={addTodoToLocalStorage}
        edit={edit}
        setEdit={setEdit}
        id={id}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setTodo={setTodo}
        edit={edit}
        setEdit={setEdit}
        setId={setId}
      />

<footer className="mt-5 text-center text-lg">
      Designed & Maintained By <span className="text-yellow-300 font-bold">Harsh Sharmaa</span>
    </footer>
    </section>
  );
};

export default TodoContainer;

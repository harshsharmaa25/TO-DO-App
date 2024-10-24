import React, { useEffect } from "react";

const TodoForm = ({
  todo,
  setTodo,
  todos,
  setTodos,
  addTodoToLocalStorage,
  edit,
  setEdit,
  id,
}) => {
  useEffect(() => {
    addTodoToLocalStorage();
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let update = todos.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, task: todo };
      }
      return todoItem;
    });
    edit
      ? setTodos(update)
      : setTodos([...todos, { id: Date.now(), task: todo, completed: false }]);
    setTodo("");
    setEdit(false);
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="h-10 w-full rounded-lg border text-2xl ps-5 focus:outline-gray-300"
        name="input"
        autoComplete="off"
        placeholder="create a new todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
<button className="h-10 w-full rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 mt-5 font-bold text-white 
  hover:bg-gradient-to-l hover:from-blue-600 hover:to-blue-400 
  focus:bg-gradient-to-l focus:from-blue-600 focus:to-blue-400 
  transition-all duration-300 ease-in-out outline-none">
  {edit ? "Update Todo" : "Add Todo"}
</button>

    </form>
  );
};

export default TodoForm;

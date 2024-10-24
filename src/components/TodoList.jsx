import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Fill } from "react-icons/ri";

const TodoList = ({ todos, setTodos, setTodo, setId, setEdit }) => {
  const handleCheck = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const handleEdit = (id) => {
    setEdit(true);
    setId(id);
    let update = todos.find((todo) => todo.id === id);
    setTodo(update.task);
  };

  const handleDelete = (id) => {
    let update = todos.filter((todo) => todo.id !== id);
    setTodos(update);
  };
  return (
    <>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div
            className={`flex items-center justify-between w-full flex-wrap border min-h-10 px-3 rounded-lg ${
              todo.completed ? "bg-green-300" : ""
            }`}
            key={todo.id}
          >
            <span className={todo.completed ? "line-through" : ""}>
              {todo.task}
            </span>
            <div className="flex gap-5 cursor-pointer">
  <IoCheckmarkDoneOutline
    className="text-2xl transition-transform transform hover:scale-110 hover:text-blue-500"
    onClick={() => handleCheck(todo.id)}
  />
  <FiEdit
    className="text-2xl transition-transform transform hover:scale-110 hover:text-yellow-500"
    onClick={() => handleEdit(todo.id)}
  />
  <RiDeleteBin2Fill
    className="text-2xl transition-transform transform hover:scale-110 hover:text-red-500"
    onClick={() => handleDelete(todo.id)}
  />
</div>
          </div>
        ))
      ) : (
        <p className="text-red-500">No todos found...</p>
      )}
    </>
  );
};

export default TodoList;

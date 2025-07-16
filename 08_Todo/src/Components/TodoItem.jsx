import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div
      className={`flex items-center border border-black/10 rounded-xl px-4 py-2 gap-x-4 transition-all duration-300 shadow-md ${
        todo.completed ? "bg-green-100" : "bg-violet-100"
      }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="w-5 h-5 cursor-pointer accent-green-500"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      {/* Todo Text Input */}
      <input
        type="text"
        className={`flex-1 text-base bg-transparent outline-none rounded-md transition-colors duration-200 ${
          isTodoEditable
            ? "border border-gray-300 px-2 py-1 focus:ring-2 focus:ring-violet-400"
            : "border border-transparent"
        } ${todo.completed ? "line-through text-gray-500" : "text-gray-900"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit/Save Button */}
      <button
        className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-violet-100 transition disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
        title={isTodoEditable ? "Save" : "Edit"}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>

      {/* Delete Button */}
      <button
        className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-red-100 text-red-600 transition"
        onClick={() => deleteTodo(todo.id)}
        title="Delete"
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;

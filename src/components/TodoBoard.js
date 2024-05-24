import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, toggleComplete, deleteItem }) => {
  console.log("12313212", todoList);
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length > 0 ? (
        todoList.map((i, idx) => (
          <TodoItem
            key={idx}
            item={i}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
          />
        ))
      ) : (
        <h2>There is no Item to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;

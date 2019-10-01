import React from "react";

// const todoList = [
//   { id: "1", name: "Practise Coding", completed: false },
//   { id: "2", name: "Cook Food", completed: false },
//   { id: "3", name: "Organise Closet", completed: false },
//   { id: "4", name: "Get Groceries", completed: false }
// ];

// <Todo isCompleted={true} id={23} title="..." onToggleComplete={...}/>
class Todo extends React.Component {
  render() {
    const { isCompleted, todo, onToggleComplete, title } = this.props;
    return (
      <li
        className="todo"
        style={{
          textDecoration: isCompleted ? "line-through" : undefined,
          cursor: "pointer",
          userSelect: "none"
        }}
        onClick={() => onToggleComplete(todo)}
      >
        {title}
      </li>
    );
  }
}

export default Todo;

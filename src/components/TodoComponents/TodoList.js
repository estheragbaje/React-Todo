import React from "react";
import Todo from "./Todo";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
  render() {
    const { todos, onToggleComplete } = this.props;
    return (
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo
            isCompleted={todo.isCompleted}
            todo={todo}
            onToggleComplete={onToggleComplete}
            title={todo.title}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;

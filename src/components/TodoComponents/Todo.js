import React from "react";

const todoList = [
  { id: "1", name: "Practise Coding", completed: false },
  { id: "2", name: "Cook Food", completed: false },
  { id: "3", name: "Organise Closet", completed: false },
  { id: "4", name: "Get Groceries", completed: false }
];

export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  addTodo(id, )

  render() {
    const { todos } = this.state;
    return (
      <div className="todo">
       {todos.map(todo => (
          <div key={todo.id}>
            {todo.name} is {!todo.complete && "NOT "}completed
            <button onClick={this.markTodo(todo.id, true)}>
              Mark complete
            </button>
            <button onClick={this.markTodo(todo.id, false)}>
              Mark incomplete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import uuid from "uuid";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = { todos: [], text: "" };
  }

  addTodo = () => {
    // create the new todo
    const newTodo = {
      id: uuid.v4(),
      title: this.state.text,
      isCompleted: false
    };

    // update the todo state
    const newTodos = this.state.todos.concat(newTodo);
    this.setState({ todos: newTodos, text: "" });
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  toggleComplete = todo => {
    const newTodo = { ...todo, isCompleted: !todo.isCompleted };
    const newTodos = this.state.todos.map(_todo => {
      if (_todo.id === todo.id) {
        return newTodo;
      } else {
        return _todo;
      }
    });

    this.setState({ todos: newTodos });
  };

  clearCompleted = () => {
    const newTodos = this.state.todos.filter(todo => !todo.isCompleted);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm
          text={this.state.text}
          onChange={this.handleChange}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
        <TodoList
          todos={this.state.todos}
          onToggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;

import React from "react";

class TodoForm extends React.Component {
  render() {
    const { text, onChange, addTodo, clearCompleted } = this.props;
    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;

import React, { Component } from "react";
import TodoItem from "./TodoItem";
import propTypes from "prop-types";

class Todos extends Component {
  render() {
    console.log(this.props);

    return this.props.todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
        />
      );
    });
  }
}

//PropTypes

Todos.porpTypes = {
  todos: propTypes.array.isRequired
};

export default Todos;

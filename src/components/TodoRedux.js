import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import AddTodo from './AddTodo';
import * as actionTypes from '../storeredux/actions/action';

class Todos extends Component {
  render() {
    return (
      <div>
        <AddTodo todoAdded={this.props.onAddTodo} />
        {this.props.tos.map((tq) => (
          <Todo
            key={tq.id}
            title={tq.title}
            description={tq.description}
            clicked={() => this.props.onRemoveTodo(tq.id)}
          />
        ))}
      </div>
    );
  }
}
//connect state to props
const mapStateToProps = (state) => {
  //please give me counter from state as props to this component
  return {
    tos: state.tds.todos,
  };
};
//connect dispatch function to props
const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (title, description) =>
      dispatch({
        type: actionTypes.ADD_TODO,
        payload: { title: title, description: description },
      }),
    onRemoveTodo: (id) =>
      dispatch({
        type: actionTypes.REMOVE_TODO,
        todoId: id,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);

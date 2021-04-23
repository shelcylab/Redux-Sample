import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actions';
import { loadTodos } from '../store/actions/actions';

import Todo from './Todo';
import AddTodo from './AddTodo';

const Todos = ({ mytodos, onAddTodo, onRemoveTodo, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
    console.log(mytodos);
  }, []);
  return (
    <div>
      <AddTodo todoAdded={onAddTodo} />
      {mytodos.loading ? (
        <h2>loading</h2>
      ) : mytodos.error ? (
        <h2>{mytodos.error} </h2>
      ) : (
        <di>
          <h2>Todo List</h2>
          <div>
            {mytodos.todos &&
              mytodos.todos.map((tq) => (
                <Todo
                  key={tq._id}
                  id={tq._id}
                  title={tq.title}
                  description={tq.description}
                  clicked={() => onRemoveTodo(tq._id)}
                />
              ))}
          </div>
        </di>
      )}
    </div>
  );
};

//connect state to props
const mapStateToProps = (state) => {
  return {
    mytodos: state.tds,
  };
};

//dispatch functions
const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (title, description) =>
      dispatch({
        type: actionTypes.ADD_TODO,
        payload: { title: title, description: description },
      }),
    onRemoveTodo: (id) =>
      dispatch({ type: actionTypes.REMOVE_TODO, payload: { todoId: id } }),
    startLoadingTodos: () => dispatch(loadTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

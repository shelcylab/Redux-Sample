import * as actionTypes from '../actions/actions';

const initialState = {
  loading: false,
  todos: [],
  error: '',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newTodo = {
        id: Math.random(), // not really unique !
        title: action.payload.title,
        description: action.payload.description,
      };
      return {
        ...state,
        todos: state.todos.concat(newTodo),
      };
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload.todoId),
      };
    case actionTypes.LOAD_TODOS_IN_PROGRESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.LOAD_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: action.payload,
        error: '',
      };
    }
    case actionTypes.LOAD_TODOS_FAILURE: {
      return {
        ...state,
        loading: false,
        todos: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;

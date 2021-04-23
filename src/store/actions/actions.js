import axios from 'axios';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';

//action creators
export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';

//action creators
export const loadTodosSuccess = (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: todos,
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';

//action creators
export const loadTodosFailure = (error) => ({
  type: LOAD_TODOS_FAILURE,
  payload: error,
});

export const loadTodos = () => async (dispatch) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await axios(
      'https://express-todoapp.herokuapp.com/api/tasks'
    );
    const todos = response.data;

    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure(e.message));
  }
};

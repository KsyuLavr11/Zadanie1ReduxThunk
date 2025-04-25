import {
	FETCH_READ_TODOS,
	FETCH_CREATE_TODO,
	FETCH_UPDATE_TODO,
	FETCH_DELETE_TODO,
} from '../constants/constants.js';
import { todosAPI } from '../api/todosAPI.js';
import { setLoading, setError } from './action-app.js';

export const fetchTodos = () => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const response = await todosAPI.readALL();
		dispatch({ type: FETCH_READ_TODOS, payload: response });
	} catch (error) {
		console.error('Ошибка при выполнении запроса', error);
		dispatch(setError(error));
	} finally {
		dispatch(setLoading(false));
	}
};

export const createTodo = (title) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const response = await todosAPI.createTodo(title);
		dispatch({ type: FETCH_CREATE_TODO, payload: response.data });
	} catch (error) {
		console.error('Ошибка при добавлении задачи', error);
		dispatch(setError(error));
	} finally {
		dispatch(setLoading(false));
	}
};

export const updateTodo = (id, updatedTodo) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const response = await todosAPI.updateTodo(id, updatedTodo);
		dispatch({ type: FETCH_UPDATE_TODO, payload: response.data });
	} catch (error) {
		console.error('Ошибка при изменении задачи', error);
		dispatch(setError(error));
	} finally {
		dispatch(setLoading(false));
	}
};

export const deleteTodo = (id) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		await todosAPI.deleteTodo(id);
		dispatch({ type: FETCH_DELETE_TODO, payload: id });
	} catch (error) {
		console.error('Ошибка при удалении задачи', error);
		dispatch(setError(error));
	} finally {
		dispatch(setLoading(false));
	}
};

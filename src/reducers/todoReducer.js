import {
	FETCH_READ_TODOS,
	FETCH_CREATE_TODO,
	FETCH_UPDATE_TODO,
	FETCH_DELETE_TODO,
} from '../constants/constants.js';

export const initialState = {
	todos: [],
};

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_READ_TODOS:
			return { ...state, todos: action.payload };
		case FETCH_CREATE_TODO:
			return { ...state, todos: [...state.todos, action.payload] };
		case FETCH_UPDATE_TODO:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id ? action.payload : todo,
				),
			};
		case FETCH_DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		default:
			return state;
	}
};

import {
	SET_LOADING,
	SET_ERROR,
	SET_SEARCH_TERM,
	SET_IS_SORT,
	SET_TITLE,
	SET_IS_EDITING,
} from '../constants/constants';

const initialState = {
	isLoading: false,
	error: null,
	searchTerm: '',
	isSort: true,
	title: '',
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, isLoading: action.payload };
		case SET_ERROR:
			return { ...state, error: action.payload };
		case SET_SEARCH_TERM:
			return { ...state, searchTerm: action.payload };
		case SET_IS_SORT:
			return { ...state, isSort: action.payload };
		case SET_TITLE:
			return { ...state, title: action.payload };
		case SET_IS_EDITING:
			return { ...state, isEditing: action.payload };
		default:
			return state;
	}
};

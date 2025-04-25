import {
	SET_LOADING,
	SET_ERROR,
	SET_SEARCH_TERM,
	SET_IS_SORT,
	SET_TITLE,
	SET_IS_EDITING,
} from '../constants/constants';

export const setLoading = (isLoading) => ({
	type: SET_LOADING,
	payload: isLoading,
});

export const setError = (error) => ({
	type: SET_ERROR,
	payload: error,
});

export const setSearchTerm = (searchTerm) => ({
	type: SET_SEARCH_TERM,
	payload: searchTerm,
});

export const setIsSort = (isSort) => ({
	type: SET_IS_SORT,
	payload: isSort,
});
export const setTitle = (title) => ({
	type: SET_TITLE,
	payload: title,
});

export const setIsEditing = (isEditing) => ({
	type: SET_IS_EDITING,
	payload: isEditing,
});

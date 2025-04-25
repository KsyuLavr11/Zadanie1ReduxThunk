import './App.css';
import { ControlPanel } from './components/controlPanel/ControlPanel';
import { SearchDebounce } from './components/Search/Search.jsx';
import { TodoList } from './components/TodoList/TodoList';
import styles from './App.module.css';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './action/action-todo.js';
import { setSearchTerm, setIsSort } from './action/action-app.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTodos, useIsLoading, useError, useIsSort } from './selectors/index.js';

export const App = () => {
	const dispatch = useDispatch();
	const todos = useSelector(useTodos);
	const isLoading = useSelector(useIsLoading);
	const error = useSelector(useError);
	const isSort = useSelector(useIsSort);

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	const handleCreateTodo = (title) => {
		dispatch(createTodo(title));
	};

	const handleUpdateTodo = (id, updatedTodo) => {
		dispatch(updateTodo(id, updatedTodo));
	};

	const handleDeleteTodo = (id) => {
		dispatch(deleteTodo(id));
	};
	const handleSearch = (searchTerm) => {
		setSearchTerm(searchTerm);
	};

	const handleSetIsSort = (isSortValue) => {
		dispatch(setIsSort(isSortValue));
	};

	if (isLoading) return <div className={styles.loader}>Загрузка...</div>;
	if (error) return <div className={styles.error}>Ошибка{error.message}</div>;

	return (
		<div className="app">
			<h4>Список дел</h4>
			<SearchDebounce onChange={handleSearch} />
			<ControlPanel
				createTodo={handleCreateTodo}
				isLoading={isLoading}
				isSort={isSort}
				setIsSort={handleSetIsSort}
				setSearchTerm={setSearchTerm}
			/>
			<TodoList
				todos={todos}
				updateTodo={handleUpdateTodo}
				deleteTodo={handleDeleteTodo}
				isLoading={isLoading}
			/>
		</div>
	);
};

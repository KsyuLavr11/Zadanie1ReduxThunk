import styles from '../../App.module.css';
import { useTitle, useIsSort } from '../../selectors/index';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setIsSort } from '../../action/action-app';

export const ControlPanel = ({ createTodo, isLoading }) => {
	const dispatch = useDispatch();
	const title = useSelector(useTitle);
	const isSort = useSelector(useIsSort);

	const handleAddTodo = () => {
		if (title.trim()) {
			createTodo(title);
			dispatch(setTitle(''));
		}
	};

	const handleSumbit = (event) => {
		event.preventDefault();
		if (title.trim()) {
			createTodo({ title });
			dispatch(setTitle(''));
		}
	};

	const handleTitleChange = (event) => {
		dispatch(setTitle(event.target.value));
	};

	const handleSortClick = () => {
		dispatch(setIsSort(!isSort));
	};

	return (
		<>
			{isLoading && <div className={styles.loader}>Загрузка...</div>}
			<form onSubmit={handleSumbit}>
				<div className={styles['add-todo-container']}>
					<input
						className={styles.input}
						type="text"
						name="text"
						value={title}
						placeholder="Ведите название дела"
						onChange={handleTitleChange}
					/>
					<button
						disabled={isLoading}
						onClick={handleAddTodo}
						className={styles.button}
					>
						Добавить дело
					</button>
				</div>
			</form>
			<div>
				<button className={styles['sort-button']} onClick={handleSortClick}>
					{!isSort ? 'Отмена сортировки' : 'Сортировать по алфавиту'}
				</button>
			</div>
		</>
	);
};

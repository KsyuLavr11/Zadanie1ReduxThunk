import styles from '../../App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useTitle, useIsEditing } from '../../selectors/index';
import { setIsEditing } from '../../action/action-app';

export const TodoItemEdition = ({ updateTodo, todo, deleteTodo }) => {
	const dispatch = useDispatch();
	const title = useSelector(useTitle);
	const isEditing = useSelector(useIsEditing);

	const handleSaveEdit = () => {
		updateTodo(todo.id, title);
		dispatch(setIsEditing(false));
	};
	const handleCancelEdit = () => {
		dispatch(setIsEditing(false));
	};

	const handleChangeTheCase = () => {
		dispatch(setIsEditing(true));
	};

	const handleChangeInput = ({ target }) => {
		dispatch(title(target.value));
	};

	return (
		<>
			{isEditing ? (
				<>
					<input
						className={styles.input}
						type="text"
						value={title}
						onChange={handleChangeInput}
					/>
					<button
						className={styles['button-todos-cancel']}
						onClick={handleCancelEdit}
					>
						Отменить
					</button>

					<button
						className={styles['button-todos-save']}
						onClick={handleSaveEdit}
					>
						Сохранить
					</button>
				</>
			) : (
				<>
					{todo.title}
					<button
						onClick={() => deleteTodo(todo.id)}
						className={styles['button-todos-delete']}
					>
						Удалить дело
					</button>

					<button
						onClick={handleChangeTheCase}
						className={styles['button-todos']}
					>
						Изменить дело
					</button>
				</>
			)}
		</>
	);
};

import styles from '../../App.module.css';
import { TodoItemEdition } from '../TododItem/TodoItemEdition';
import { useTodos } from '../../selectors/index';
import { useSelector } from 'react-redux';
import { filterTodos, sortTodos } from '../helpers/index';
import { useSearchTerm, useIsSort } from '../../selectors/index';

export const TodoList = ({ deleteTodo, updateTodo }) => {
	const todos = useSelector(useTodos);
	const searchTerm = useSelector(useSearchTerm);
	const isSort = useSelector(useIsSort);

	const filtredTodos = searchTerm ? filterTodos(todos, searchTerm) : todos;
	const sortedTodos = isSort ? sortTodos(filtredTodos) : filtredTodos;

	return (
		<ul className={styles['todo-list-container']}>
			{sortedTodos.map((todo) => (
				<li key={todo.id} className={styles['todo-item']}>
					<TodoItemEdition
						todo={todo}
						updateTodo={updateTodo}
						deleteTodo={deleteTodo}
					/>
				</li>
			))}
		</ul>
	);
};

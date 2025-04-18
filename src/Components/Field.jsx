import styles from './Components.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

const FieldLayout = ({ field, onClick }) => {
	return (
		<div className={styles.field}>
			{field.map((currentPlayer, index) => (
				<button
					key={index}
					className={styles.button}
					onClick={() => onClick(index)}
				>
					{currentPlayer}
				</button>
			))}
		</div>
	);
};
FieldLayout.propTypes = {
	field: PropTypes.array,
	onClick: PropTypes.func,
};

export const FieldContainer = () => {
	const dispatch = useDispatch();
	const field = useSelector((state) => state.field);

	const handleCellClick = (index) => {
		dispatch({ type: 'SET_FIELD', payload: index });
	};

	return <FieldLayout field={field} onClick={handleCellClick} />;
};

FieldContainer.propTypes = {
	field: PropTypes.array,
	onClick: PropTypes.func,
};

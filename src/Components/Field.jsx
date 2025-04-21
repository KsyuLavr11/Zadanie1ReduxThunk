import styles from './Components.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { CalculateWinner } from './CalculateWinner';
import { selectCurrentPlayer, selectField } from '../Selectors';
import { setField, setCurrentPlayer } from '../Actions';

const FieldLayout = ({ field, onClick }) => {
	return (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<button
					key={index}
					className={styles.button}
					onClick={() => onClick(index)}
				>
					{cell}
				</button>
			))}
		</div>
	);
};
FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	onClick: PropTypes.func,
};

export const FieldContainer = () => {
	const dispatch = useDispatch();
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);

	const handleCellClick = (index) => {
		if (field[index] || CalculateWinner(field)) {
			return;
		}

		const newField = [...field];
		newField[index] = currentPlayer;

		const winner = CalculateWinner(newField);
		let nextPlayer = currentPlayer === 'X' ? 'O' : 'X';

		dispatch(setField(newField));
		dispatch(setCurrentPlayer(nextPlayer));

		if (winner) {
			dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
			dispatch({ type: 'SET_WINNER', payload: winner });
		} else if (newField.every((cell) => cell !== null)) {
			dispatch({ type: 'SET_IS_DRAW', payload: true });
			dispatch({ type: 'SET_GAME_ENDED', payload: true });
		}
	};
	return <FieldLayout field={field} onClick={handleCellClick} />;
};

FieldContainer.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	onClick: PropTypes.func,
};

import './Game.css';
import { FieldContainer } from './Components/Field';
import { InformationContainer } from './Components/Information';
import { CalculateWinner } from './Components/CalculateWinner';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

const GameLayout = ({ onFieldClick, onResetGame }) => {
	return (
		<div>
			<InformationContainer />
			<FieldContainer onClick={onFieldClick} />
			<button onClick={onResetGame}>Начать заново</button>
		</div>
	);
};
GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	field: PropTypes.array,
	onFieldClick: PropTypes.func,
	winner: PropTypes.func,
	onResetGame: PropTypes.func,
};

export const Game = () => {
	const dispatch = useDispatch();

	const field = useSelector((state) => state.field);
	const currentPlayer = useSelector((state) => state.currentPlayer);

	const handleFieldClick = (index) => {
		if (field[index] || CalculateWinner(field)) {
			return;
		}

		const newField = [...field];
		newField[index] = currentPlayer;

		const winner = CalculateWinner(newField);
		let nextPlayer = currentPlayer === 'X' ? 'O' : 'X';

		dispatch({ type: 'SET_FIELD', payload: newField });
		dispatch({ type: 'SET_CURRENT_PLAYER', payload: nextPlayer });

		if (winner) {
			dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
			dispatch({ type: 'SET_WINNER', payload: winner });
		} else if (newField.every((cell) => cell !== null)) {
			dispatch({ type: 'SET_IS_DRAW', payload: true });
			dispatch({ type: 'SET_GAME_ENDED', payload: true });
		}
	};

	const handleResetGame = () => {
		dispatch({ type: 'RESTART_GAME' });
	};

	return <GameLayout onFieldClick={handleFieldClick} onResetGame={handleResetGame} />;
};

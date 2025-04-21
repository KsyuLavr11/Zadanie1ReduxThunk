import './Game.css';
import { FieldContainer } from './Components/Field';
import { InformationContainer } from './Components/Information';
import { restartGame } from './Actions';
import { useDispatch } from 'react-redux';

export const Game = () => {
	const dispatch = useDispatch();

	const handleResetGame = () => {
		dispatch(restartGame());
	};

	return (
		<div>
			<InformationContainer />
			<FieldContainer />
			<button onClick={handleResetGame}>Начать заново</button>
		</div>
	);
};

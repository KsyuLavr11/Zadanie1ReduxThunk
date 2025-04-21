import styles from './Components.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsDraw, selectCurrentPlayer, selectWinner } from '../Selectors';

const InformationLayout = () => {
	const winner = useSelector(selectWinner);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isDraw = useSelector(selectIsDraw);

	let status;
	if (isDraw === true) {
		status = 'Ничья';
	} else if (winner) {
		status = `Победа: ${winner}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}
	return <div className={styles.informationContainer}>{status}</div>;
};
InformationLayout.propTypes = {
	winner: PropTypes.string,
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
};

export const InformationContainer = () => {
	return <InformationLayout />;
};

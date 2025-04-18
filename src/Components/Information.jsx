import styles from './Components.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const InformationLayout = () => {
	const winner = useSelector((state) => state.winner);
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isDraw = useSelector((state) => state.isDraw);

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

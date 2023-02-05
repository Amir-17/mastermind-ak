import React from "react";
import Row from "./Row";
import "../index.css";

const Board = ({
	solutionColor,
	check,
	setColor,
	checkRow,
	activeColor,
	setActiveColor,
	activeRow,
	setActiveRow,
	previousRow,
	currentRow,
	hints,
	previousHints,
}) => {
	const rows = [];

	for (let i = 0; i < 10; i++) {
		rows.push(
			<Row
				key={"row_" + i}
				id={"row_" + i}
				solutionColor={solutionColor}
				check={check}
				setColor={setColor}
				checkRow={checkRow}
				activeColor={activeColor}
				setActiveColor={setActiveColor}
				activeRow={activeRow}
				setActiveRow={setActiveRow}
				previousRow={previousRow}
				currentRow={currentRow}
				hints={hints}
				previousHints={previousHints}
			/>
		);
	}

	return <div className="board">{rows}</div>;
};

export default Board;

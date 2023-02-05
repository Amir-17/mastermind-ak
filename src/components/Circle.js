import React from "react";
import Peg from "./Peg";
import "../index.css";

const Circle = ({
	setColor,
	rowId,
	previousRow,
	currentRow,
	activeColor,
	activeRow,
}) => {
	const rowsId = rowId.substr(4);

	const Pegs = [];
	for (let i = 0; i < 4; i++) {
		Pegs.push(
			<Peg
				key={"p" + rowsId + "_" + i}
				pegId={"p" + rowsId + "_" + i}
				setColor={setColor}
				previousRow={previousRow}
				currentRow={currentRow}
				activeColor={activeColor}
				activeRow={activeRow}></Peg>
		);
	}
	return <div className="circles">{Pegs}</div>;
};

export default Circle;

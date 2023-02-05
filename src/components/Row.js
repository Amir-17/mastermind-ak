import React from "react";
import Circle from "./Circle";
import CheckSolutions from "./CheckSolutions";
import "../index.css";

const Row = ({
	check,
	id,
	setColor,
	checkRow,
	activeColor,
	activeRow,
	previousRow,
	currentRow,
	hints,
	previousHints,
}) => {
	let active = "";
	if (+id.substr(4) === activeRow) {
		active = "active";
	}

	const row = +id.substr(4);
	let disabled = "disabled";
	const emptyFunction = () => false;

	if (activeRow === row) {
		disabled = check ? "" : "disabled";
	}

	const checking = disabled === "disabled" ? emptyFunction : checkRow;
	let allHints = [];
	let checkHint = "";
	const rowsId = +id.substr(4);

	for (let i = 0; i < hints.length; i++) {
		if (rowsId === activeRow) {
			checkHint = hints[i] === 2 ? "correct" : hints[i] === 1 ? "almost" : "";
		} else {
			for (let j = 0; j < previousHints.length; j++) {
				if (rowsId === j) {
					checkHint =
						previousHints[j][i] === 2
							? "correct"
							: previousHints[j][i] === 1
							? "almost"
							: "";
				}
			}
		}
		allHints.push(
			<CheckSolutions
				checkHint={checkHint}
				key={"h_" + rowsId + i}
				id={"h_" + rowsId + i}
			/>
		);
	}
	return (
		<div className={"row " + active} id={id}>
			<Circle
				setColor={setColor}
				rowId={id}
				previousRow={previousRow}
				currentRow={currentRow}
				activeColor={activeColor}
				activeRow={activeRow}
			/>
			<button className={"check-button" + disabled} onClick={checking}>
				Check
			</button>
			<div className="hints">{allHints}</div>
		</div>
	);
};

export default Row;

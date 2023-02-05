import React, { useState } from "react";
import Rules from "./Rules";
import Board from "./Board";
import Colors from "./Colors";
import "../index.css";

const colors = ["red", "green", "blue", "yellow", "orange", "purple"];
const solutionColor = [];
for (let j = 0; j < 4; j++) {
	solutionColor.push(colors[Math.floor(Math.random() * colors.length)]);
}

const Game = () => {
	const [activeRow, setActiveRow] = useState(0);
	const [activeColor, setActiveColor] = useState("");
	const [check, setCheck] = useState(false);
	const [hints, setHints] = useState([0, 0, 0, 0]);
	const [previousHints, setPreviousHints] = useState([]);
	const [currentRow, setCurrentRow] = useState(["", "", "", ""]);
	const [previousRow, setPreviousRow] = useState([]);
	const [victory, setVictory] = useState(false);
	const [defeat, setDefeat] = useState(false);

	const setColor = (color, id) => {
		if (victory) {
			return false;
		}

		const rowId = +id.substr(1, id.indexOf("_") - 1);
		const pegId = +id.substr(id.indexOf("_") + 1);
		let arr = 0;

		if (activeRow === rowId && color) {
			currentRow[pegId] = color;
			setCurrentRow([...currentRow]);
		}

		for (let i in currentRow) {
			if (currentRow[i].length > 0) {
				arr++;
			}
		}

		if (arr === currentRow.length) {
			setCheck(true);
		} else {
			setCheck(false);
		}
	};

	const checkRow = () => {
		const thisRow = JSON.parse(JSON.stringify(currentRow));
		const correctRow = JSON.parse(JSON.stringify(solutionColor));
		for (let i = 0; i < 4; i++) {
			if (thisRow[i] === correctRow[i]) {
				hints[i] = 2;
				delete thisRow[i];
				delete correctRow[i];
			}
		}

		for (let i in thisRow) {
			for (let j in correctRow) {
				if (thisRow[i] === correctRow[j]) {
					hints[i] = 1;
					delete thisRow[i];
					delete correctRow[j];
				}
			}
		}
		hints.sort((a, b) => b - a);
		if (hints[0] === 2 && hints[1] === 2 && hints[2] === 2 && hints[3] === 2) {
			return setVictory(true);
		}
		if (activeRow >= 10 - 1 && !victory) {
			return setDefeat(true);
		}

		previousHints.push(hints);
		previousRow.push(currentRow);
		setHints([0, 0, 0, 0]);
		setActiveRow(activeRow + 1);
		setPreviousHints(previousHints);
		setCurrentRow(["", "", "", ""]);
		setPreviousRow(previousRow);
		setCheck(false);
		setVictory(victory);
		setDefeat(defeat);
	};

	const activateColor = (prop) => {
		setActiveColor(prop);
	};

	let message = victory ? "You win!" : defeat ? "You Lost!" : "";

	let solutionPegs = [];
	let solutionClass = "";
	const isHidden = defeat && !victory ? "" : "hidden";
	const playAgain = !defeat && victory ? "" : "hidden";
	for (let i = 0; i < solutionColor.length; i++) {
		solutionClass = solutionColor[i];
		solutionPegs.push(
			<div className={"color-holder " + solutionClass} key={"s_" + i}></div>
		);
	}

	const newGame = () => {
		window.location.reload();
	};

	return (
		<div className="container">
			<div className="mastermind-container">
				<div className="header">
					<h1>Mastermind</h1>
					<Rules />
					<Colors
						list={colors}
						activatedColor={activateColor}
						activeColor={activeColor}
					/>
				</div>
				<div className="mastermind_board">
					<Board
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
				</div>
				<div className="endgame_messages">
					<p className="game_message">{message}</p>
					<div className="solution colors">
						<div className={isHidden}>
							<h2>Solution:</h2>
							{solutionPegs}
							<br />
							<button className="play-again" onClick={newGame}>
								Play Again?
							</button>
						</div>
						<div className={playAgain}>
							<button className="play-again" onClick={newGame}>
								Play Again?
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Game;

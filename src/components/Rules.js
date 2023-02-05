import React, { useState } from "react";
import "../index.css";

function Rules() {
	const [rules, setRules] = useState(false);
	const [showRules, setShowRules] = useState(false);
	const showText = false;

	const handleShowRules = (e) => {
		e.preventDefault();
		setRules(true);
		setShowRules(true);
	};

	const handleHideRules = (e) => {
		e.preventDefault();
		setRules(false);
		setShowRules(false);
	};

	return (
		<div className="show_rules_container">
			{!showRules && (
				<button className="show-button" onClick={handleShowRules}>
					Show Rules
				</button>
			)}
			{!showText && showRules && (
				<button className="hide-button" onClick={handleHideRules}>
					Hide Rules
				</button>
			)}
			{rules ? (
				<p>
					Try to guess the pattern, in both order and color, within ten turns.
					After submitting a row, a small green squared is show for each circle
					in a correct position and color. A yellow square indicates the
					existence of a correct color in an incorrect position. More info on{" "}
					<a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">
						Wikipedia
					</a>
					.
				</p>
			) : null}
		</div>
	);
}

export default Rules;

import React from "react";
import "../index.css";

const Colors = ({
	list,
	activatedColor,

	activeColor,
}) => {
	const listOfAllColors = list.map((color) => {
		const active = color === activeColor ? "active" : "";

		return (
			<div
				className={"color-holder " + color + " " + active}
				key={color}
				onClick={() => {
					activatedColor(color);
				}}></div>
		);
	});

	return <div className="colors">{listOfAllColors}</div>;
};

export default Colors;

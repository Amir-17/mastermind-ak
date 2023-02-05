import React from "react";
import "../index.css";

const CheckSolutions = ({ checkHint, id }) => {
	return <span className={checkHint} id={id}></span>;
};

export default CheckSolutions;

import React from "react";

function ColorContainer({ color }) {
	return (
		<div className="color-container" style={{ background: color }}>
			{color}
		</div>
	);
}

export default ColorContainer;

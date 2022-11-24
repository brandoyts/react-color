import React, { useRef } from "react";

function ColorInput({ generate }) {
	const inputRef = useRef(null);

	const handleClick = () => {
		if (inputRef.current.value == "") return;

		generate(inputRef.current.value);

		inputRef.current.value = "";
	};

	return (
		<div className="color-form">
			<input ref={inputRef} type="text" className="color-input" />
			<button onClick={handleClick}>Generate</button>
		</div>
	);
}

export default ColorInput;

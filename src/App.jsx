import React, { useState } from "react";
import ColorContainer from "./components/ColorContainer";
import ColorInput from "./components/ColorInput";

function App() {
	const [color, setColor] = useState("orange");

	const generate = (newColor) => {
		setColor(newColor);
	};

	return (
		<div className="App">
			<ColorContainer color={color} />
			<ColorInput generate={(payload) => generate(payload)} />
		</div>
	);
}

export default App;

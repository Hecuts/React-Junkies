import React, { useState } from "react";

const Callback = ({ getColor }) => {
	const [activeColor, setActiveColor] = useState();

	const handleChange = (e) => {
		const { value } = e.target;
		setActiveColor(value);
		getColor(value);
	};
	return (
		<input
			type="text"
			id="input"
			aria-label="input"
			onChange={handleChange}
			value={activeColor}
			className="px-2 w-64 h-11 rounded border-2"
			placeholder="Insert color value"
		/>
	);
};

export default Callback;

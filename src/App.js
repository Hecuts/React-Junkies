import { useState } from "react";
import Callback from "./Callback";

//Parent component
function App() {
	const [UIcolor, setUIColor] = useState(null);

	const getColor = (color) => {
		setUIColor(color);
	};

	return (
		<div className="flex items-center justify-center h-screen">
			<h1 className="absolute top-3 m-auto  text-green-500 bg-white p-2 rounded font-bold">
				Passing state from child to parent
			</h1>
			<div className="flex flex-col items-center justify-center gap-y-3 py-5 bg-white w-[75%] h-[75%] rounded">
				<div
					className="w-64 h-52 border-black border-2"
					style={{ background: `${UIcolor}` }}
				></div>
				<Callback getColor={getColor} />
			</div>
		</div>
	);
}

export default App;

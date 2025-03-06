import { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState(null);
	return (
		<div className="Semaforo container">
			<div className="RedLight glow"
			onClick={() => {
				setColor("Red")
			
			}}
			>
			</div>
			<div className="YellowLight glow"
			onClick={() => {
				setColor("Yellow")
			}}
			>
				
			</div>
			<div className="GreenLight glow"
			onClick={() => {
				setColor("Green")
			}}
			>
				
			</div>

		</div>
	);
};

export default Home;
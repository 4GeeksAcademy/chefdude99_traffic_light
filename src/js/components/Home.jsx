import { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState(null);
	return (
		<>
			<div className="Palito container">
			</div>
			<div className="Semaforo container">
				<div className={`RedLight ${color == "Red" ? "glow" : null}`}
					onClick={() => {
						setColor("Red")

					}}
				>
				</div>
				<div className={`YellowLight ${color == "Yellow" ? "glow" : null}`}
					onClick={() => {
						setColor("Yellow")
					}}
				>

				</div>
				<div className={`GreenLight ${color == "Green" ? "glow" : null}`}
					onClick={() => {
						setColor("Green")
					}}
				>

				</div>

			</div>
		</>
	);
};

export default Home;
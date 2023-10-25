import Unfold from "./Pages/Unfold";
import Home from "./Pages/Home";
import SimpleAnimation from "./components/SimpleAnimation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ngetes from "./components/Ngetes";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/unfold" element={<Unfold />} />
				<Route path="/simpleanimation" element={<SimpleAnimation />} />
				<Route path="/ngetes" element={<Ngetes />} />
			</Routes>
		</Router>
	);
}

export default App;

import Unfold from "./Pages/Unfold";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Unfold />} />
            </Routes>
        </Router>
    );
}

export default App;

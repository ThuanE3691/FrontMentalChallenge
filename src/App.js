import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import { AnimatePresence } from "framer-motion";

function App() {
	return (
		<div className="h-screen App">
			<Router>
				<AnimatePresence>
					<AppRouter></AppRouter>
				</AnimatePresence>
			</Router>
		</div>
	);
}

export default App;

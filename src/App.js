import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";

function App() {
	return (
		<div className="h-screen App">
			<Router>
				<AppRouter></AppRouter>
			</Router>
		</div>
	);
}

export default App;

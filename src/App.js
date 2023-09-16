import "./App.css";
import QRComponent from "./Challenge/QR_Code_Component/Components/QRComponent";
import ResultsSummary from "./Challenge/Results_Summary/Components/ResultsSummary";

function App() {
	return (
		<div className="App h-screen">
			{/* <QRComponent></QRComponent> */}
			<ResultsSummary></ResultsSummary>
		</div>
	);
}

export default App;

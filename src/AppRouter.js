import { Routes, Route, useLocation } from "react-router-dom";
import QRComponent from "./Challenge/QR_Code_Component/Components/QRComponent";
import ResultsSummary from "./Challenge/Results_Summary/Components/ResultsSummary";
import NewsHomePage from "./Challenge/News_Homepage/Components/NewsHomePage";

const AppRouter = () => {
	const location = useLocation();
	return (
		<Routes location={location} key={location.path}>
			<Route path="/QR_Component" element={<QRComponent />}></Route>
			<Route path="/Results_Summary" element={<ResultsSummary />}></Route>
			<Route path="/News_Homepage" element={<NewsHomePage />}></Route>
		</Routes>
	);
};

export default AppRouter;
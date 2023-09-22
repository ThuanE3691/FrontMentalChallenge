import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Components/Homepage";
import QRComponent from "./Challenge/QR_Code_Component/Components/QRComponent";
import ResultsSummary from "./Challenge/Results_Summary/Components/ResultsSummary";
import NewsHomePage from "./Challenge/News_Homepage/Components/NewsHomePage";
import NotificationsPage from "./Challenge/Notifications_Page/Components/NotificationsPage";
import TimeDashBoard from "./Challenge/Time_Tracking_Dashboard/Components/TimeDashBoard";
import CommentsPage from "./Challenge/Interactive_Comments_Section/Components/Comments_Page";

const AppRouter = () => {
	const location = useLocation();
	const challenges = [
		{
			path: "/",
			element: (
				// <AnimationPage>
				<HomePage />
				// </AnimationPage>
			),
		},
		{
			path: "/QR_Component",
			element: (
				//<AnimationPage>
				<QRComponent />
				//</AnimationPage>
			),
		},
		{
			path: "/Results_Summary",
			element: (
				//<AnimationPage>
				<ResultsSummary />
				//</AnimationPage>
			),
		},
		{
			path: "/News_Homepage",
			element: (
				//<AnimationPage>
				<NewsHomePage />
				//</AnimationPage>
			),
		},
		{
			path: "/Notifications_Page",
			element: (
				//<AnimationPage>
				<NotificationsPage />
				//</AnimationPage>
			),
		},
		{
			path: "/Time_Tracking_Dashboard",
			element: (
				//<AnimationPage>
				<TimeDashBoard />
				//</AnimationPage>
			),
		},
		{
			path: "/Interactive_Comments_Section",
			element: <CommentsPage />,
		},
	];
	return (
		<Routes location={location} key={location.path}>
			{challenges.map(({ path, element }) => {
				return <Route path={path} element={element}></Route>;
			})}
		</Routes>
	);
};

export default AppRouter;

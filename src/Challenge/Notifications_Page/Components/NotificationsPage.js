import list_notifications from "../notifications_list";
import NotificationBox from "./NotificationBox";
import { useState, useEffect } from "react";

const NotificationsPage = () => {
	const [notifications, setNotifications] = useState([...list_notifications]);
	const [unReadNotifications, setUnReadNotifications] = useState(0);
	const handleMakeAllRead = () => {
		setNotifications((prev) => {
			return prev.map((notification) => {
				return {
					...notification,
					read_state: "read",
				};
			});
		});
	};

	useEffect(() => {
		const getAmountUnRead = () => {
			return notifications.reduce((acc, notification) => {
				return acc + (notification.read_state === "unread");
			}, 0);
		};

		setUnReadNotifications(() => {
			return getAmountUnRead();
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleMakeAllRead]);

	return (
		<div className="flex justify-center w-full h-full overflow-auto bg-notification-bg">
			<main className="px-6 py-8 my-16 bg-white rounded-lg shadow-2xl font-PlusJakarta h-fit">
				<header className="flex items-center mb-6 ">
					<p className="mr-3 text-xl font-bold">Notifications</p>
					<div className=" bg-notification-blue text-white font-bold w-fit px-3 py-[1px] rounded mr-auto">
						{unReadNotifications}
					</div>
					<p
						className="transition-colors duration-200 cursor-pointer text-notification-grayish-blue hover:text-notification-blue"
						onClick={handleMakeAllRead}
					>
						Mark all as read
					</p>
				</header>
				{notifications.map(
					({
						from_user,
						user_avatar,
						user_action,
						target_action,
						read_state,
						time_past,
						private_message,
					}) => {
						return (
							<NotificationBox
								from_user={from_user}
								user_avatar={user_avatar}
								user_action={user_action}
								target_action={target_action}
								read_state={read_state}
								time_past={time_past}
								private_message={private_message}
								key={from_user + user_action + target_action}
							></NotificationBox>
						);
					}
				)}
			</main>
		</div>
	);
};

export default NotificationsPage;

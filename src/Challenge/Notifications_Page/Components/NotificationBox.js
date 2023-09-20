const NotificationBox = ({
	from_user,
	user_avatar,
	user_action,
	target_action,
	read_state,
	time_past,
	private_message,
}) => {
	return (
		<article
			className={` ${
				read_state === "unread"
					? "bg-notification-light-gray-blue-0"
					: "bg-white"
			} px-4 py-3 rounded-xl grid grid-cols-[1fr_minmax(auto,560px)] grid-rows-[auto_auto_auto] gap-x-4 mb-2 transition-colors duration-300`}
		>
			<img
				src={user_avatar}
				alt=""
				loading="lazy"
				className="w-10 place-self-center"
			/>
			<div>
				<div className="flex items-center">
					<div className={read_state === "unread" ? "mr-2" : ""}>
						<strong className="transition-colors duration-200 cursor-pointer hover:text-notification-blue">
							{from_user}
						</strong>
						&nbsp; {user_action}
						<strong
							className={`transition-colors duration-200 cursor-pointer ${
								target_action.type === "Events"
									? "text-notification-dark-grayish-blue"
									: "text-notification-blue"
							}  hover:text-notification-blue`}
						>
							{" " + target_action.content}
						</strong>
					</div>
					{read_state === "unread" && (
						<div className="w-2 h-2 transition-all duration-500 rounded bg-notification-red"></div>
					)}
				</div>

				<p className="col-start-2 row-start-2 text-base text-notification-grayish-blue">
					{time_past} ago
				</p>
			</div>

			{private_message && (
				<div className="col-start-2 row-start-3 px-5 py-4 mt-3 border-gray transition-colors duration-200 rounded-md cursor-pointer border-[1px] hover:bg-notification-light-gray-blue-1 text-notification-dark-grayish-blue">
					{private_message}
				</div>
			)}
		</article>
	);
};

export default NotificationBox;

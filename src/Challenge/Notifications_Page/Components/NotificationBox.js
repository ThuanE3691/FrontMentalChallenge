const NotificationBox = ({
	from_user,
	user_avatar,
	user_action,
	target_action,
	read_state,
	time_past,
	private_message,
	object_action,
}) => {
	return (
		<article
			className={` ${
				read_state === "unread"
					? "bg-notification-light-gray-blue-0"
					: "bg-white"
			} px-4 py-3 rounded-xl grid md:grid-cols-[1fr_minmax(auto,560px)] grid-cols-[36px_auto] md:grid-rows-[repeat(3,auto)] gap-x-4 mb-2 transition-colors duration-300 text-base`}
		>
			<img
				src={user_avatar}
				alt=""
				loading="lazy"
				className="md:w-10 md:place-self-center place-self-start"
			/>
			<div className="grid grid-rows-[auto_auto] text-sm md:text-base">
				<div className="">
					<div className={read_state === "unread" ? "mr-2" : ""}>
						<strong className="transition-colors duration-200 cursor-pointer hover:text-notification-blue">
							{from_user}
						</strong>
						&nbsp;{" "}
						<span className=" text-notification-grayish-blue">
							{user_action}
						</span>
						<strong
							className={`transition-colors duration-200 cursor-pointer ${
								target_action.type === "Events"
									? "text-notification-dark-grayish-blue"
									: "text-notification-blue"
							}  hover:text-notification-blue`}
						>
							{" " + target_action.content}
						</strong>
						{read_state === "unread" && (
							<div className="inline-block w-2 h-2 ml-2 transition-all duration-500 rounded bg-notification-red"></div>
						)}
					</div>
				</div>

				<p className="col-start-1 row-start-2 text-sm md:text-base text-notification-grayish-blue">
					{time_past} ago
				</p>

				{object_action !== undefined && (
					<img
						src={object_action}
						alt=""
						className="self-start object-cover w-8 h-8 col-start-2 row-span-2 md:self-center md:w-12 md:h-12 md:place-self-end"
					/>
				)}
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

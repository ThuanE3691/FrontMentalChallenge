import mark_avatar from "./Assets/avatar-mark-webber.webp";
import angela_avavar from "./Assets/avatar-angela-gray.webp";
import jacob_avatar from "./Assets/avatar-jacob-thompson.webp";
import rizky_avatar from "./Assets/avatar-rizky-hasanuddin.webp";
import kimberly_avatar from "./Assets/avatar-kimberly-smith.webp";
import nathan_avatar from "./Assets/avatar-nathan-peterson.webp";
import anna_avatar from "./Assets/avatar-anna-kim.webp";
import chess_img from "./Assets/image-chess.webp";

const list_notifications = [
	{
		from_user: "Mark Webber",
		user_avatar: mark_avatar,
		user_action: "reacted to you recent post",
		target_action: {
			content: "My first tournament today!",
			type: "Events",
		},
		read_state: "unread",
		time_past: "1m",
	},
	{
		from_user: "Angela Gray",
		user_avatar: angela_avavar,
		user_action: "followed you",
		target_action: {
			content: "",
			type: null,
		},
		read_state: "unread",
		time_past: "5m",
	},
	{
		from_user: "Jacob Thompson",
		user_avatar: jacob_avatar,
		user_action: "has joined your group",
		target_action: {
			content: "Chess Club",
			type: "Group",
		},
		read_state: "unread",
		time_past: "1 day",
	},
	{
		from_user: "Rizky Hasanuddin",
		user_avatar: rizky_avatar,
		user_action: "sent you a private message",
		target_action: {
			content: "",
			type: null,
		},
		private_message:
			"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
		read_state: "read",
		time_past: "5 days",
	},
	{
		from_user: "Kimberly Smith",
		user_avatar: kimberly_avatar,
		user_action: "commented on your picture",
		object_action: chess_img,
		target_action: {
			content: "",
			type: null,
		},
		read_state: "read",
		time_past: "1 week",
	},
	{
		from_user: "Nathan Peterson",
		user_avatar: nathan_avatar,
		user_action: "reacted to your recent post",
		target_action: {
			content: "5 end-game strategies to increase your win rate",
			type: "Events",
		},
		read_state: "read",
		time_past: "2 weeks",
	},
	{
		from_user: "Anna Kim",
		user_avatar: anna_avatar,
		user_action: "left the group",
		target_action: {
			content: "Chess Club",
			type: "Group",
		},
		read_state: "read",
		time_past: "2 weeks",
	},
];

export default list_notifications;

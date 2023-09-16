import qr_img from "../Assets/image-qr-code.png";

const QRComponent = () => {
	return (
		<div className=" flex__center w-full h-full bg-[#d6e2f0]">
			<div className="bg-white p-4 rounded-2xl flex__center flex-col gap-y-4 shadow-2xl">
				<img src={qr_img} alt="qr-code" className=" w-72 h-72 rounded-md" />
				<p className="font-outlet text- font-bold text-lg text-center text-[#1f3251]">
					Improve your front-end <br></br> skills by building projects
				</p>
				<p className="font-outlet font-medium text-[15px] text-center mb-4 text-[#7b879d]">
					Scan the QR code to visit Frontend <br></br> Mentor and take your
					coding skills to <br></br> the next level
				</p>
			</div>
		</div>
	);
};

export default QRComponent;

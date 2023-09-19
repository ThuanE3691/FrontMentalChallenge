import articleImg from "../Assets/image-web-3-desktop.jpg";

const Article = () => {
	return (
		<article className="col-span-5">
			<img src={articleImg} className="h-[300px] w-[847px] object-fit" alt="" />
			<section className=" mt-8 grid grid-cols-6 grid-flow-col">
				<h2 className="text-[56px] leading-none font-extrabold col-span-2">
					The Bright Future of Web 3.0?
				</h2>
				<div className="col-span-3 col-start-4">
					<p className="mb-10 text-[15px] text-[#5d5f79] pr-24">
						We dive into the next evolution of the web that claims to put the
						power of the platforms back into the hands of the people. But is it
						really fulfilling its promise?
					</p>
					<button className="px-8 py-4 bg-[#f15e50] text-white active:bg-[#00001a] font-bold space-x-4 whitespace-pre">
						R E A D &nbsp; M O R E
					</button>
				</div>
			</section>
		</article>
	);
};

export default Article;

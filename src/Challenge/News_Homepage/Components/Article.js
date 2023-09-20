import articleImgDesk from "../Assets/image-web-3-desktop.jpg";
import articleImgMobile from "../Assets/image-web-3-mobile.jpg";

const Article = () => {
	return (
		<article className="md:mb-0 mb-20">
			<img
				src={articleImgDesk}
				className="md:block hidden h-[300px] w-[847px] object-cover"
				alt=""
				loading="lazy"
			/>
			<img
				src={articleImgMobile}
				className="block md:hidden w-full object-center"
				alt=""
				loading="lazy"
			/>
			<section className="mt-8 md:grid grid-cols-7">
				<h2 className="md:text-[56px] md:mb-0 mb-8 text-5xl leading-none font-extrabold  md:col-span-3">
					The Bright Future of Web 3.0?
				</h2>
				<div className="col-start-5 col-span-3 md:-translate-x-12">
					<p className="mb-10 text-[15px] text-[#5d5f79]">
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

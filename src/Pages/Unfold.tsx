import laki from "../../public/img/damn.webp";
import logo from "../../public/img/logo banyak.png";
import skill from "../../public/img/skill.png";
import ombak from "../../public/img/ombak.png";
import pseudo from "../../public/img/pseudo.png";
import mobileApp from "../../public/img/mobile app.png";
import digiStr from "../../public/img/digital strategy.png";
import Ux from "../../public/img/ux.png";
import WebDes from "../../public/img/web design.png";
import WebDev from "../../public/img/web dev.png";
import Wordpress from "../../public/img/wordpress.png";
import woman from "../../public/img/woman.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import NavButton from "../components/NavButton";
import RedCoverText from "../components/RedCoverText";
import RedCoverImage from "../components/RedCoverImage";
import SlideInFromLeft from "../components/SlideInFromLeft";

const Unfold = () => {
	const heroRef = useRef<HTMLDivElement>(null);
	const footerRef = useRef<HTMLElement>(null);

	const heroScroll = useScroll({
		target: heroRef,
		offset: ["start", "end start"],
	});

	const footerScroll = useScroll({
		target: footerRef,
		offset: ["start end", "end"],
	});

	const heroTranslateY = useTransform(
		heroScroll.scrollYProgress,
		[0, 1],
		["0%", "40%"]
	);

	const footerTrasnlateY = useTransform(
		footerScroll.scrollYProgress,
		[0, 1],
		["-100%", "0%"]
	);

	return (
		<div className="relative w-fit bg-[#191919]">
			<div
				ref={heroRef}
				className="relative w-full h-screen overflow-hidden"
			>
				<motion.img style={{ y: heroTranslateY }} src={laki} alt="" />
				<div className="absolute z-10 text-sm flex mt-[30px] top-0 text-white w-full justify-center">
					<div className="flex items-center gap-5">
						<NavButton navName="Home" />
						<NavButton navName="Portfolio" />
						<NavButton navName="About" />
						<NavButton navName="Services" />
						<div className="py-[10px] px-[7px] text-3xl font-extrabold mx-10">
							Unfold.
						</div>
						<NavButton navName="Skills" />
						<NavButton navName="Testimonials" />
						<NavButton navName="Journal" />
						<NavButton navName="Contact" />
					</div>
				</div>
				<div className="absolute top-0 flex items-center justify-center w-full h-screen text-white">
					<div className="">
						<div className="flex justify-center mb-5 font-bold text-7xl">
							<div>
								<RedCoverText>Unfold.</RedCoverText>
							</div>
						</div>
						<div className="flex justify-center mb-3 text-3xl">
							<div>
								<RedCoverText w="[600px]" leading="leading-relaxed">
									I'm Glenn Chapman Hoyer a Product Designer Based in
									San Fransisco
								</RedCoverText>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute flex justify-center w-full bottom-5">
					<div className="w-full">
						<div className="w-[22px] mx-auto h-[42px] border-white border-2 rounded-full flex justify-center py-2">
							<motion.div
								className="h-[3px] w-[3px] rounded-full bg-white"
								animate={{
									y: 20,
									opacity: 0,
								}}
								transition={{
									repeat: Infinity,
									repeatType: "loop",
									repeatDelay: 1,
									duration: 1,
									ease: "easeInOut",
								}}
							/>
							{/* <div className="h-[3px] w-[3px] rounded-full bg-white"></div> */}
						</div>
						<div className="text-[10px] tracking-[.2em] flex justify-center font-bold text-white mt-2">
							SCROLL
						</div>
					</div>
				</div>
			</div>

			<div className="w-full px-24 text-white bg-black">
				<div className="relative grid grid-cols-3 border-gray-900 divide-x divide-gray-900 border-x">
					<div className="px-3">
						<div className="mt-16 mb-10 text-3xl font-bold">
							Portfolio
						</div>

						<RedCoverImage className="mb-7">
							<img src="https://preview.colorlib.com/theme/unfold/images/work_1_md.jpg" />
						</RedCoverImage>

						<RedCoverImage className="mb-7">
							<img
								src="https://preview.colorlib.com/theme/unfold/images/work_4_full.jpg"
								className="mb-7"
							/>
						</RedCoverImage>

						<RedCoverImage>
							<img src="https://preview.colorlib.com/theme/unfold/images/work_7_a_md.jpg" />
						</RedCoverImage>

						<div className="mt-[1530px]">
							<img className="mb-5" src={digiStr} alt="" />
							<div className="text-2xl font-bold">Digital</div>
							<div className="mb-5 text-2xl font-bold">Strategy</div>
							<div className="w-72">
								A small river named Duden flows by their place and
								supplies it with the necessary regelialia.
							</div>
						</div>

						<div className="mt-8 h-96">
							<img className="mb-5" src={WebDev} alt="" />
							<div className="text-2xl font-bold">Web</div>
							<div className="mb-5 text-2xl font-bold">Development</div>
							<div className="w-72">
								A small river named Duden flows by their place and
								supplies it with the necessary regelialia.
							</div>
						</div>

						<div className="h-[330px] w-[745px] absolute top-[4400px] overflow-hidden">
							<img
								className="-translate-y-52"
								src="https://preview.colorlib.com/theme/unfold/images/post_1.jpg"
								alt=""
							/>
						</div>

						<div className="mt-[1425px] h-[330px] mb-[800px] overflow-hidden">
							<img
								className="-translate-y-40"
								src="https://preview.colorlib.com/theme/unfold/images/post_3.jpg"
								alt=""
							/>
						</div>

						<div className="absolute top-[5400px] text-xs w-[570px]">
							<SlideInFromLeft>
								<div className="flex w-[570px] gap-5 text-white">
									<input
										type="text"
										placeholder="NAME"
										className="flex-1 py-2 bg-transparent border-b border-gray-600 outline-none focus:border-gray-300"
									/>
									<input
										type="text"
										placeholder="EMAIL"
										className="flex-1 py-2 bg-transparent border-b border-gray-600 outline-none focus:border-gray-300"
									/>
								</div>
							</SlideInFromLeft>

							<SlideInFromLeft>
								<textarea
									className="w-[570px] py-2 mt-20 bg-transparent border-b border-gray-600 outline-none focus:border-gray-300"
									cols={30}
									rows={10}
									placeholder="WRITE YOUR MASSAGE..."
								></textarea>
							</SlideInFromLeft>

							<SlideInFromLeft>
								<button className="px-8 py-4 mt-20 text-xs font-bold border-2 border-gray-400 rounded-full">
									SEND MESSAGE
								</button>
							</SlideInFromLeft>
						</div>
					</div>

					<div className="px-3">
						<RedCoverImage className="mb-7 mt-[140px]">
							<img
								src="https://preview.colorlib.com/theme/unfold/images/work_2_md.jpg"
								alt=""
							/>
						</RedCoverImage>

						<RedCoverImage className="mb-7">
							<img
								src="https://preview.colorlib.com/theme/unfold/images/work_6_md.jpg"
								alt=""
							/>
						</RedCoverImage>

						<RedCoverImage className="mb-7">
							<img
								src="https://preview.colorlib.com/theme/unfold/images/work_9_a_md.jpg"
								alt=""
							/>
						</RedCoverImage>

						<div className="text-3xl h-[800px] font-bold mt-[400px] mb-10 relative">
							<div className="mx-auto text-center w-fit">
								<SlideInFromLeft>
									<div className="w-fit">About Me</div>
									<img src={ombak} className="mx-auto mt-3" alt="" />
								</SlideInFromLeft>
							</div>
							<div className="w-[634px] h-[646px] mt-[48px] -left-96 absolute overflow-hidden">
								<img
									className="scale-[1.4] translate-x-7 border absolute bg-yellow-400 translate-y-20 border-gray-900 z-10"
									src={laki}
									alt=""
								/>
							</div>
							<img
								src={pseudo}
								className="absolute right-9 -bottom-5"
								alt=""
							/>
						</div>

						<div className="relative mt-32 mb-10 text-3xl font-bold">
							<div className="mx-auto text-center w-fit">
								<SlideInFromLeft>
									<div className="w-fit">My Services</div>
									<img src={ombak} className="mx-auto mt-3" alt="" />
								</SlideInFromLeft>
							</div>
						</div>

						<div className="mt-12">
							<img className="mb-5" src={WebDes} alt="" />
							<div className="text-2xl font-bold">Web</div>
							<div className="mb-5 text-2xl font-bold">Design</div>
							<div className="w-72">
								A small river named Duden flows by their place and
								supplies it with the necessary regelialia.
							</div>
						</div>

						<div className="mt-8">
							<img className="mb-5" src={Wordpress} alt="" />
							<div className="text-2xl font-bold">Wordpress</div>
							<div className="mb-5 text-2xl font-bold">Solution</div>
							<div className="w-72">
								A small river named Duden flows by their place and
								supplies it with the necessary regelialia.
							</div>
						</div>

						<div className="relative mt-32 mb-10 text-3xl font-bold text-center">
							<div className="mx-auto text-center w-fit">
								<SlideInFromLeft>
									<div className="w-fit">My Skills</div>
									<img src={ombak} className="mx-auto mt-3" alt="" />
								</SlideInFromLeft>
							</div>
						</div>

						<div className="relative mb-10 text-3xl font-bold text-center mt-60">
							<div className="mx-auto text-center w-fit">
								<SlideInFromLeft>
									<div className="w-fit">My Happy Clients</div>
									<img src={ombak} className="mx-auto mt-3" alt="" />
								</SlideInFromLeft>
							</div>
						</div>

						<div className="absolute -left-24 w-[calc(100%+192px)] h-96 top-[3750px]">
							<div className="w-3/4 h-[336px] flex justify-center bg-[#212121] text-white p-12 mx-auto relative">
								<div className="font-sans text-center text-7xl">
									<svg
										className="mx-auto mb-5"
										fill="#ffffff"
										width="40px"
										height="40px"
										viewBox="0 0 32 32"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										stroke="#ffffff"
									>
										<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											stroke-linecap="round"
											stroke-linejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											{" "}
											<title>quote</title>{" "}
											<path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>{" "}
										</g>
									</svg>
									<div className="text-[20px] text-white leading-loose">
										Far far away, behind the word mountains, far from
										the countries Vokalia and Consonantia, there live
										the blind texts. Separated they live in
										Bookmarksgrove right at the coast of the
										Semantics, a large language ocean. A small river
										named Duden flows by their place and supplies it
										with the necessary regelialia. It is a
										paradisematic country, in which roasted parts of
										sentences fly into your mouth.
									</div>
								</div>
								<div className="w-[95%] absolute -bottom-5 h-5 bg-[#D63447] mx-auto"></div>
								<img
									src={woman}
									className="absolute bottom-0 w-20 mx-auto translate-y-1/2"
									alt=""
								/>
								<div className="absolute bottom-0 text-lg translate-y-24">
									Erica Miller
								</div>
								<div className="absolute bottom-0 text-xs text-gray-500 translate-y-28">
									Product Manager @Twitter
								</div>
							</div>
						</div>

						<div className="text-3xl font-bold mt-[600px] mb-10 text-center relative">
							<div className="mx-auto text-center w-fit">
								<SlideInFromLeft>
									<div className="w-fit">My Journal</div>
									<img src={ombak} className="mx-auto mt-3" alt="" />
								</SlideInFromLeft>
							</div>
						</div>

						<div className="mt-96 h-[330px] overflow-hidden">
							<img
								className="-translate-y-40"
								src="https://preview.colorlib.com/theme/unfold/images/post_4.jpg"
								alt=""
							/>
						</div>

						<div className="relative mt-32 mb-10 text-3xl font-bold text-center">
							<div className="mx-auto text-center w-fit">
								<SlideInFromLeft>
									<div className="w-fit">Get In Touch</div>
									<img src={ombak} className="mx-auto mt-3" alt="" />
								</SlideInFromLeft>
							</div>
						</div>
					</div>

					<div className="px-3">
						<RedCoverImage className="mb-7 mt-[140px]">
							<img
								src="https://preview.colorlib.com/theme/unfold/images/work_3_md.jpg"
								alt=""
							/>
						</RedCoverImage>

						<RedCoverImage className="mb-7">
							<img
								src="https://preview.colorlib.com/theme/unfold/images/work_5_md.jpg"
								alt=""
							/>
						</RedCoverImage>

						<RedCoverImage className="mb-7">
							<img
								src="https://preview.colorlib.com/theme/unfold/images/work_8_md.jpg"
								alt=""
							/>
						</RedCoverImage>

						<div className="mt-[800px]">
							<SlideInFromLeft>
								<div className="mb-10 text-2xl font-bold w-fit">
									We can make it together
								</div>
							</SlideInFromLeft>
							<SlideInFromLeft>
								<div className="mb-10 leading-loose">
									Far far away, behind the word mountains, far from the
									countries Vokalia and Consonantia, there{" "}
									<span className="text-red-500">live the blind</span>{" "}
									text
								</div>
							</SlideInFromLeft>
							<SlideInFromLeft>
								<div className="mb-10 leading-loose">
									A small river named Duden flows by their place and
									supplies it with the necessary regelialia. It is a
									paradisematic country, in which roasted parts of
									sentences fly into your mouth.
								</div>
							</SlideInFromLeft>
							<SlideInFromLeft>
								<button className="px-8 py-4 text-xs font-bold border-2 border-gray-400 rounded-full">
									DOWNLOAD MY CV
								</button>
							</SlideInFromLeft>
						</div>

						<div className="mt-[445px]">
							<img className="mb-5" src={Ux} alt="" />
							<div className="text-2xl font-bold">User</div>
							<div className="mb-5 text-2xl font-bold">Experience</div>
							<div className="w-72">
								A small river named Duden flows by their place and
								supplies it with the necessary regelialia.
							</div>
						</div>

						<div className="mt-8 h-96">
							<img className="mb-5" src={mobileApp} alt="" />
							<div className="text-2xl font-bold">Mobile</div>
							<div className="mb-5 text-2xl font-bold">application</div>
							<div className="w-72">
								A small river named Duden flows by their place and
								supplies it with the necessary regelialia.
							</div>
						</div>

						<div className="mt-[1080px] h-[330px] overflow-hidden">
							<img
								className="-translate-y-40"
								src="https://preview.colorlib.com/theme/unfold/images/post_2.jpg"
								alt=""
							/>
						</div>

						<div className="mt-5 h-[330px] overflow-hidden mb-80">
							<img
								className="-translate-y-40"
								src="https://preview.colorlib.com/theme/unfold/images/post_5.jpg"
								alt=""
							/>
						</div>
						<SlideInFromLeft>
							<div className="text-[11px] text-gray-600 mb-3 font-bold">
								EMAIL
							</div>
							<div className="text-lg font-bold text-gray-400">
								info@yourdomain.com
							</div>
						</SlideInFromLeft>

						<SlideInFromLeft>
							<div className="text-[11px] text-gray-600 mb-3 mt-10 font-bold">
								PHONE
							</div>
							<div className="text-lg font-bold text-gray-400">
								+12 345 6789 012
							</div>
						</SlideInFromLeft>

						<SlideInFromLeft>
							<div className="text-[11px] text-gray-600 mb-3 mt-10 font-bold">
								ADDRESS
							</div>
							<div className="text-lg font-bold text-gray-400">
								273 South Riverview Rd. New York, NY 10011
							</div>
						</SlideInFromLeft>
					</div>

					<div className="absolute top-[1400px] w-full">
						<img src={logo} alt="" />
					</div>

					<div className="absolute top-[3400px] w-full">
						<img src={skill} alt="" />
					</div>
				</div>
			</div>
			<div className="overflow-y-hidden">
				<motion.footer
					ref={footerRef}
					style={{ y: footerTrasnlateY }}
					className="flex justify-center w-full bg-[#191919] pt-20"
				>
					<div>
						<div className="text-2xl font-bold text-center text-white">
							Unfold.
						</div>
						<div className="flex w-[500px] mx-auto justify-between mt-14">
							<div className="text-xs font-bold text-gray-400">
								FACEBOOK
							</div>
							<div className="text-xs font-bold text-gray-400">
								TWITTER
							</div>
							<div className="text-xs font-bold text-gray-400">
								INSTAGRAM
							</div>
							<div className="text-xs font-bold text-gray-400">
								BEHANCE
							</div>
							<div className="text-xs font-bold text-gray-400">
								DRIBBLE
							</div>
						</div>
						<div className="mt-10 mb-40 text-center text-gray-400">
							Copyright © 2023 All rights reserved | This template is
							made with by Colorlib
						</div>
					</div>
				</motion.footer>
			</div>
		</div>
	);
};

export default Unfold;

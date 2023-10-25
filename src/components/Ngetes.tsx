import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Ngetes = () => {
	const ngetesRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ngetesRef,
		offset: ["start", "end start"],
	});

	const scaleY = useTransform(scrollYProgress, [0, 1], [1, 10]);
	const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	return (
		<>
			<div ref={ngetesRef} className="h-screen w-full">
				<motion.div
					style={{
						scaleX: scrollYProgress,
						scaleY,
						transformOrigin: "left center",
					}}
					className="bg-red-500 fixed h-10 w-full top-0 -z-30"
				/>
				<div className="w-52 h-52 bg-yellow-300"></div>
				<motion.div
					style={{ y: translateY }}
					className="bg-red-300 w-52 h-52"
				></motion.div>
			</div>
			<div className="h-[5000px] w-full bg-blue-300"></div>
		</>
	);
};

export default Ngetes;

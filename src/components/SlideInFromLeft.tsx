import { motion } from "framer-motion";

const SlideInFromLeft = ({ children }: { children: any }) => {
	return (
		<div className="relative h-fit overflow-hidden w-fit">
			<div>{children}</div>
			<motion.div
				className="absolute top-0 left-0 h-full w-full bg-black"
				whileInView={{
					x: "100%",
				}}
				transition={{
					duration: 1.5,
					ease: [0.87, 0, 0.13, 1],
				}}
				viewport={{ once: true }}
			></motion.div>
		</div>
	);
};

export default SlideInFromLeft;

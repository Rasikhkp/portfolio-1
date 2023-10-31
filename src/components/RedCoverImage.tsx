import { motion } from "framer-motion";

const RedCoverImage = ({
	children,
	className = "",
}: {
	children: any;
	className?: string;
}) => {
	return (
		<div className={`${className} relative w-fit h-fit overflow-hidden`}>
			<motion.div
				initial={{ scale: 1.3, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{
					scale: { delay: 1.3, duration: 2, ease: "easeOut" },
					opacity: { delay: 1, duration: 0.1 },
				}}
				viewport={{ once: true }}
			>
				{children}
			</motion.div>

			<motion.div
				className="h-full absolute top-0 left-0 bg-red-500"
				whileInView={{
					width: "100%",
					x: "100%",
				}}
				transition={{
					width: {
						delay: 0.3,
						duration: 0.5,
						ease: [0.05, 0.01, 0.025, 0.95],
					},
					x: {
						delay: 1,
						duration: 1,
						ease: [0.25, 0.27, 0.29, 0.95],
					},
				}}
				viewport={{ once: true }}
			></motion.div>
		</div>
	);
	// <div className="w-full">
	// 	<div id="teks" className={`w-full relative overflow-hidden`}>
	// 		<div className="absolute w-full top-0 left-0 h-[50px] bg-red-500">
	// 			{children}
	// 		</div>
	// 	</div>
	// 	{/* <div
	// 		className="absolute top-0 left-0 h-full bg-red-500"
	// 		// initial={{ width: "0px", marginLeft: "0px" }}
	// 		// animate={{
	// 		// 	width: "100%",
	// 		// 	marginLeft: "100%",
	// 		// }}
	// 		// transition={{
	// 		// 	width: { duration: 0.5, ease: [0.05, 0.01, 0.025, 0.95] },
	// 		// 	marginLeft: {
	// 		// 		delay: 0.8,
	// 		// 		duration: 0.5,
	// 		// 		ease: [0.25, 0.27, 0.29, 0.95],
	// 		// 	},
	// 		// 	// width: [0, 0.3, 0.7, 1],
	// 		// }}
	// 	>
	// 		<div></div>
	// 	</div> */}
	// </div>
};

export default RedCoverImage;

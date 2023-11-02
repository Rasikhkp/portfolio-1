import { motion } from "framer-motion";
import { useState } from "react";
import adobe from "../../public/img/adobe.png";
import google from "../../public/img/google.png";
import puma from "../../public/img/puma.png";
import paypal from "../../public/img/paypal.png";

const BrandCarousel = () => {
	const [brands, setBrands] = useState([
		adobe,
		google,
		puma,
		paypal,
		adobe,
		google,
		puma,
		paypal,
		adobe,
		google,
		puma,
		paypal,
	]);
	const allBrand = [adobe, google, puma, paypal];
	return (
		<div className="absolute top-[1400px] w-[98%] left-1/2 -translate-x-1/2 border-none overflow-hidden">
			<motion.div
				onDrag={(_, info) => {
					// console.log(allBrandRef);
					if (
						(info.offset.x > 400 && info.offset.x < 420) ||
						(info.offset.x < -400 && info.offset.x > -420)
					) {
						console.log("addNew");
						setBrands((prevItem) => [
							...allBrand,
							...prevItem,
							...allBrand,
						]);
					}
				}}
				drag="x"
				dragMomentum={false}
				className="flex justify-center gap-2"
			>
				{brands.map((brand) => (
					<motion.div className="relative flex-none">
						<img draggable="false" src={brand} alt={`${brand}`} />
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default BrandCarousel;

import React from "react";
import { BiArrowBack } from "react-icons/bi";

const Home = () => {
	return (
		<div>
			<div className="flex justify-between items-center h-[100vh] px-40 bg-[#CBE6FA] mb-30">
				<div className="mb-65">
					<h1 className="text-[#184571] text-[60px] font-semibold mb-10">
						Check Anti <br /> Virus Protective <br />
						Overall
					</h1>
					<div className="mt-3 flex items-center gap-4">
						<button className="cursor-pointer bg-rose-200 px-10 py-4 rounded-full flex justify-between items-center gap-4 text-white font-semibold text-md">
							<span>
								<BiArrowBack />
							</span>
							View Product
						</button>
						<button
							className="
							cursor-pointer
							bg-[#48ABE2]
							px-10
							py-4
							rounded-full
							text-white
							font-semibold
							text-md"
						>
							Shop All
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

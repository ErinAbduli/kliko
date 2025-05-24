import React from "react";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center py-6 px-12 bg-blue-300 text-white text-lg text-semibold">
			<div>
				<h2>AlbaMed</h2>
			</div>
			<div>
				<ul className="flex flex-row">
					<li>
						<a href="/">Home</a>
					</li>
					<li className="ml-6">
						<a href="/about">About</a>
					</li>
					<li className="ml-6">
						<a href="/shop">Shop</a>
					</li>
					<li className="ml-6">
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</div>
			<div>
				<h2>AlbaMed</h2>
			</div>
		</div>
	);
};

export default Navbar;

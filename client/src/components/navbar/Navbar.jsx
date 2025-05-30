import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="flex justify-between items-center py-6 px-20 bg-[#CBE6FA] text-[#184571] text-lg font-semibold">
			<div className="flex items-center gap-2">
				<img className="w-7 h-7" src={logo} alt="" />
				<h2>AlbaMed</h2>
			</div>
			<div>
				<ul className="flex flex-row">
					<li>
						<a href="/">Home</a>
					</li>
					<li className="ml-8">
						<a href="/about">About</a>
					</li>
					<li className="ml-8">
						<a href="/shop">Shop</a>
					</li>
					<li className="ml-8">
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</div>
			<div>
				<Link to="/login">
					<button className="cursor-pointer bg-rose-200 px-6 py-2 rounded-xl">
						Login
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;

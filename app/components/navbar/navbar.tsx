"use client";

import Container from "../container";
import Logo from "./logo";
import Menu from "./menu";

const Navbar = () => {
	return (
		<div className="fixed w-full z-10 group">
			<div className="relative">
				<div className="absolute opacity-50 -inset-0.5 bg-gradient-to-r from-violet-500 to-red-500 rounded-xl blur-xl group-hover:opacity-100 group-hover:blur-2xl transition group-hover:duration-200 duration-1000"></div>
				<div
					className="
					relative
                    py-4
					bg-slate-50
                "
				>
					<Container>
						<div
							className="
                            flex
                            flex-row
                            gap-3
                            items-center
                            justify-between
                            md:gap-0
                        "
						>
							<Logo />
							<Menu />
						</div>
					</Container>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

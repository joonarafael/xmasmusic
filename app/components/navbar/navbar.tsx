"use client";

import Container from "../container";
import Logo from "./logo";
import Menu from "./menu";

const Navbar = () => {
	return (
		<div className="fixed w-full bg-white z-10 shadow-sm">
			<div
				className="
                    border-b-[1px]
                    py-4
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
	);
};

export default Navbar;

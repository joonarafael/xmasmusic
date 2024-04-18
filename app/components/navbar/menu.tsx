"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import MenuItem from "./menuitem";
import MenuLogo from "./menulogo";

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	return (
		<div className="relative">
			<div className="flex flex-row items-center gap-3">
				<div
					onClick={() => {
						window.location.href = "/years/2024";
					}}
					className="
						cursor-pointer
						font-semibold
						hidden
						hover:bg-neutral-100
						md:block
						px-4
						py-3
						rounded-full
						text-sm
						transition
					"
				>
					2024
				</div>
				<div
					onClick={toggleOpen}
					className="
                        border-[1px]
                        border-neutral-200
                        cursor-pointer
                        flex
                        flex-row
                        gap-3
                        hover:shadow-md
                        items-center
                        md:px-2
                        md:py-1
                        p-4
                        rounded-full
                        transition
                    "
				>
					<AiOutlineMenu />
					<div className="hidden md:block">
						<MenuLogo />
					</div>
				</div>
			</div>
			{isOpen && (
				<div
					className="
                        absolute
                        bg-slate-50
                        md:w-3/4
                        overflow-hidden
                        right-0
						border-[1px]
                        rounded-xl
                        shadow-md
                        text-sm
                        top-12
                        w-[40vw]
                    "
				>
					<div className="flex flex-col cursor-pointer">
						<>
							<MenuItem
								onClick={() => {
									window.location.href = "/years";
								}}
								label="BIISIT"
							/>
							<MenuItem
								onClick={() => (window.location.href = "/about")}
								label="ABOUT"
							/>
							<hr />
							<MenuItem
								onClick={() => (window.location.href = "/years/2024")}
								label="2024"
							/>
						</>
					</div>
				</div>
			)}
		</div>
	);
};

export default Menu;

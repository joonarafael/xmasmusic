"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
	return (
		<div
			className="
                border-[1px]
                cursor-pointer
                hover:shadow-md
                md:w-auto
                py-2
                rounded-full
                shadow-sm
                transition
                w-full
            "
		>
			<div
				className="
                    flex
                    flex-row
                    items-center
                    justify-between
                "
			>
				<div
					className="
                        flex
                        flex-row
                        gap-3
                        items-center
                        pl-6
                        pr-2
                        text-gray-600
                        text-sm
                    "
				>
					<div className="hidden sm:block">Search</div>
					<div
						className="
                            bg-violet-500
                            p-2
                            rounded-full
                            text-white
                        "
					>
						<BiSearch size={18} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;

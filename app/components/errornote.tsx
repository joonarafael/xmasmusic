"use client";

import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

import Container from "./container";

const ErrorNote = () => {
	const [shown, setShown] = useState(true);

	const hideNote = () => {
		setShown(false);
	};

	if (shown) {
		return (
			<div className="w-full bg-white z-1 shadow-sm">
				<div
					className="
                    border
					rounded
                    py-4
                "
				>
					<Container>
						<div
							className="
                            flex
                            flex-row
                            items-center
                            justify-between
                            gap-4
							p-2
                        "
						>
							<div>
								<span className="text-lg">
									Kappaleen pikakelauksessa esiintyy tällä hetkellä ongelmia.
								</span>
								<br />
								<em className="text-neutral-500">
									Chrome & Edge -selaimet näyttävät ominaisuutta tukevan, mutta
									esim. Safari iOS-alustalla temppuilee vastaan.
								</em>
							</div>
							<button onClick={() => hideNote()}>
								<IoIosCloseCircleOutline size={32} />
							</button>
						</div>
					</Container>
				</div>
			</div>
		);
	}

	return <div></div>;
};

export default ErrorNote;

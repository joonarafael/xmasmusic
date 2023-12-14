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
                            md:gap-0
                        "
						>
							<div>
								<span className="text-lg">
									Äänenvoimakkuuden säätimessä esiintyy tällä hetkellä ongelmia.
								</span>
								<br />
								<em>
									Chrome & Edge selaimet näyttävät kyllä ominaisuutta tukevan,
									mutta esim. Safari temppuilee vastaan.
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
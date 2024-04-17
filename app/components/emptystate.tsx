"use client";

import { useRouter } from "next/navigation";

import Button from "./button";
import Heading from "./heading";

interface EmptyStateProps {
	showReset?: boolean;
	subtitle?: string;
	title?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
	showReset,
	subtitle = "Try changing or removing some of your filters.",
	title = "No results.",
}) => {
	const router = useRouter();

	return (
		<div
			className="
                flex 
                flex-col 
                gap-2 
                h-[60vh]
                items-center 
                justify-center 
            "
		>
			<Heading center title={title} subtitle={subtitle} />
			<div className="w-48 mt-4">
				{showReset && (
					<Button
						outline
						label="Takaisin etusivulle"
						onClick={() => router.push("/")}
					/>
				)}
			</div>
		</div>
	);
};

export default EmptyState;

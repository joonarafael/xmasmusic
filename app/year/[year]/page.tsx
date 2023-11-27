import ClientOnly from "@/app/components/clientonly";
import EmptyState from "@/app/components/emptystate";

import YearClient from "./yearclient";

interface IParams {
	year?: string;
}

const YearPage = async ({ params }: { params: IParams }) => {
	const { year } = params;

	if (!year) {
		return (
			<ClientOnly>
				<EmptyState
					subtitle="Invalid URL provided, this year does not exist."
					title="404"
				/>
			</ClientOnly>
		);
	}

	return (
		<div>
			<YearClient year={year} />
		</div>
	);
};

export default YearPage;

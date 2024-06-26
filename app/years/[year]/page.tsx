import ClientOnly from "@/app/components/clientonly";
import EmptyState from "@/app/components/emptystate";

import YearClient from "./yearclient";

interface IParams {
	year?: string;
}
const YearPage = async ({ params }: { params: IParams }) => {
	const { year } = params;
	const acceptable = ["2019", "2020", "2021", "2022", "2023", "2024"];

	if (!year || !acceptable.includes(year)) {
		return (
			<ClientOnly>
				<EmptyState
					subtitle={`Vuodelta '${year}' ei löydy biisiä!`}
					title="404"
					showReset
				/>
			</ClientOnly>
		);
	}

	return (
		<ClientOnly>
			<YearClient year={year} />
		</ClientOnly>
	);
};

export default YearPage;

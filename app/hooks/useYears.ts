import { years } from "@/app/utils/yearinfo";

const formattedYears = years.map((year) => ({
	title: year.title,
	value: year.value,
	songUrl: year.url,
}));

const useYears = () => {
	const getAll = () => formattedYears;

	const getByValue = (value: number) => {
		return formattedYears.find((item) => item.value === value);
	};

	return {
		getAll,
		getByValue,
	};
};

export default useYears;

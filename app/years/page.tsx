import ClientOnly from '@/app/components/clientonly';

import YearsClient from './yearsclient';

const YearPage = async () => {
	return (
		<ClientOnly>
			<YearsClient />
		</ClientOnly>
	);
};

export default YearPage;

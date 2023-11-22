import ClientOnly from "./components/clientonly";
import Container from "./components/container";

const Home = async () => {
	return (
		<ClientOnly>
			<Container>
				<div> Home</div>
			</Container>
		</ClientOnly>
	);
};

export default Home;

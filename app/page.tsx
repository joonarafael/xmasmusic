import ClientOnly from './components/clientonly';
import Container from './components/container';
import HomePageLink from './components/homepagelink';

const Home = async () => {
	return (
		<ClientOnly>
			<Container>
				<div className="max-w-screen-lg mx-auto">
					<div className="justify-center text-center text-neutral-900 flex flex-col gap-8">
						<span className="text-xl">XMAS MUSIC</span>
						<span className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-400 inline-block text-transparent bg-clip-text">
							HYVÄÄ JOULUA 2024!
						</span>
						<span className="italic text-lg pb-4">toivottaa Joona, Juha & Nooa</span>
						<HomePageLink />
						<div className="flex flex-col gap-4 pt-4">
							<div className="text-lg">
								Löydät vuoden 2024 joulutervehdyksen sekä kaikki aikaisempien
								vuosien biisit tältä sivustolta!
							</div>
							<div className="italic">
								Eikö selaimesi tue sivustoon sisäänrakennettua audiosoitinta?
							</div>
							<div className="text-neutral-500">
								Dropbox-linkki jokaisen kappaleen alkuperäiseen tiedostoon on
								mahdollista löytää biisin omalta sivulta.
							</div>
						</div>
					</div>
				</div>
			</Container>
		</ClientOnly>
	);
};

export default Home;

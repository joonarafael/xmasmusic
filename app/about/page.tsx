import ClientOnly from "../components/clientonly";
import Container from "../components/container";

const AboutPage = async () => {
	return (
		<ClientOnly>
			<Container>
				<div className="max-w-screen-lg mx-auto">
					<div className="justify-center text-center text-neutral-900 flex flex-col gap-8">
						<p className="text-xl">XMAS MUSIC</p>
						<h1 className="text-4xl font-extrabold bg-gradient-to-r from-violet-500 to-blue-400 inline-block text-transparent bg-clip-text">
							ABOUT
						</h1>
						<div className="flex flex-col bg-slate-50 rounded-xl p-4 drop-shadow-lg">
							<p className="text-lg">
								Tälle sivustolle on kerätty kaikki meidän julkaisemamme
								joulutervehdykset.
							</p>
							<p className="text-lg">
								Yksi joulubiisi on julkaistu jokaisena jouluna vuodesta 2019
								lähtien.
							</p>
							<p className="text-lg py-4 text-neutral-500">
								<em>Joona, Juha & Nooa</em>
							</p>
							<p className="text-lg border-y py-4 text-neutral-500 font-light">
								Sivustoa on päivitetty viimeksi 18. huhtikuuta 2024.
							</p>
							<p className="text-lg pt-4 text-neutral-500">
								Sivuston käytöstä kerätään <strong>anonyymia</strong> dataa ja
								metriikkaa Google Analyticsin avulla.
							</p>
						</div>
						<h1 className="text-2xl font-extrabold bg-gradient-to-r from-green-600  to-blue-400 inline-block text-transparent bg-clip-text">
							CREDITS
						</h1>
						<div className="flex flex-col gap-2 bg-slate-50 drop-shadow-lg p-4 rounded-lg">
							<div className="flex flex-row justify-between">
								<p>sivuston favicon & logo</p>
								<a
									className="hover:underline text-indigo-500"
									href="https://www.freepik.com"
								>
									Freepik
								</a>
							</div>
							<div className="flex flex-row justify-between">
								<p>valikon ikoni</p>
								<a
									className="hover:underline text-indigo-500"
									href="https://www.flaticon.com/authors/umeicon"
								>
									umeicon
								</a>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</ClientOnly>
	);
};

export default AboutPage;

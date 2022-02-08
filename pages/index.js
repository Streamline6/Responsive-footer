import Head from "next/head";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Responsive Footer</title>
				<link rel="icon" href="/pro.ico" />
			</Head>
			<Herosection />
			<Footer />
		</div>
	);
}

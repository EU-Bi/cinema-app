import { Header } from "./UI/Header";
import { NewTrailers } from "./UI/NewTrailers";
import { NowInCinema } from "./UI/NowInCinema";

export default function Home() {
	return (
		<>
			<main className="flex flex-col gap-14 row-start-2 items-center justify-center max-w-[1430px] m-auto">
				<Header />
				<NowInCinema />
				<NewTrailers />
			</main>
			{/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer> */}
		</>
	);
}

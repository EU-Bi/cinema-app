import React from "react";
import { FilmCard } from "./FilmCard";
import { Button } from "@/components/ui/button";

export const NowInCinema = () => {
	return (
		<section className="w-full flex flex-col items-center gap-16">
			<div className="flex flex-row gap-4 justify-between items-center w-full">
				<h1 className="text-5xl font-black text-white">Зараз в кінотеатрах</h1>
				<div className="w-12 h-[1px] bg-white" />
				<ul className="flex flex-row gap-6 text-white">
					<li>Всі</li>
					<li>Бойовики</li>
					<li>Пригоди</li>
					<li>Комедії</li>
					<li>Фантастика</li>
					<li>Трилери</li>
					<li>Драми</li>
				</ul>
			</div>
			<div className="flex flex-wrap w-full justify-between items-center">
				<FilmCard />
				<FilmCard />
				<FilmCard />
				<FilmCard />
				<FilmCard />
				<FilmCard />
				<FilmCard />
				<FilmCard />
			</div>
			<Button variant="outline" size="default" className="text-white">
				{"Всі новинки"}
			</Button>
		</section>
	);
};

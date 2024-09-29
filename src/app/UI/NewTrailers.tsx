import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Player } from "./Player";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export const NewTrailers = () => {
	return (
		<section className="w-full">
			<div className="flex flex-row justify-between items-center mb-16">
				<h2 className="text-5xl font-black text-white">Нові трейлери</h2>
				<div className="flex flex-row gap-8 items-center">
					<p className="text-white text-xl">Всі трейлери</p>
					<div>
						<FaArrowRightLong color="white" />
					</div>
				</div>
			</div>
			<div className="mb-16">
				<Player />
			</div>
			<Carousel orientation="horizontal">
				<CarouselContent className="h-[300px]">
					<CarouselItem className="basis-1/4">
						<div className="h-full bg-white ">1</div>
						<p>Мулан</p>
					</CarouselItem>
					<CarouselItem className="basis-1/4">
						<div className="w-full h-full bg-white">2</div>
						<p>Мулан</p>
					</CarouselItem>
					<CarouselItem className="basis-1/4">
						<div className="w-full h-full bg-white">3</div>
						<p>Мулан</p>
					</CarouselItem>
					<CarouselItem className="basis-1/4">
						<div className="w-full h-full bg-white">4</div>
						<p>Мулан</p>
					</CarouselItem>
					<CarouselItem className="basis-1/4">
						<div className="w-full h-full bg-white">5</div>
						<p>Мулан</p>
					</CarouselItem>
					<CarouselItem className="basis-1/4">
						<div className="w-full h-full bg-white">6</div>
						<p>Мулан</p>
					</CarouselItem>
					<CarouselItem className="basis-1/4">
						<div className="w-full h-full bg-white">7</div>
						<p>Мулан</p>
					</CarouselItem>
					<CarouselItem className="basis-1/4">
						<div className="w-full h-full bg-white">8</div>
						<p>Мулан</p>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious color="white" />
				<CarouselNext color="white" />
			</Carousel>
		</section>
	);
};

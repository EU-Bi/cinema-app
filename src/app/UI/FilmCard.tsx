"use client";
import Image from "next/image";
import React from "react";

export const FilmCard = () => {
	return (
		<div className=" ">
			<div className="relative w-72 h-80 ">
				<Image
					src={"/film.png"}
					priority
					className="absolute rounded-lg"
					alt="poster film"
					fill
				/>
				<div className="absolute w-12 h-6 top-2 right-2 bg-rating flex justify-center items-center rounded-sm text-white">
					6.70
				</div>
			</div>
			<h4 className="text-white">Побег из Претории</h4>
			<p className="text-sm text-genre w">Триллер</p>
		</div>
	);
};

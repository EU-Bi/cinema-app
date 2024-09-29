import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export const Header = () => {
	return (
		<header className="flex justify-between items-center w-full">
			<div className="flex flex-col gap-2">
				<div className="relative">
					<Image src={"/logo.svg"} alt="logo" width={100} height={100} />
				</div>
				<ul className="flex flex-row justify-between items-center">
					<li>
						<FaInstagram color="white" />
					</li>
					<li>
						<FaFacebookF color="white" />
					</li>
					<li>
						<FaTwitter color="white" />
					</li>
				</ul>
			</div>
			<ul className="flex flex-row justify-between items-center w-[760px] text-white">
				<li>Афіша</li>
				<li>Медіа</li>
				<li>Фільми</li>
				<li>Актори</li>
				<li>Новини</li>
				<li>Підбірки</li>
				<li>Категорії</li>
			</ul>
			<div className="flex flex-row gap-4">
				<Button variant={"search"} size={"search"}>
					<CiSearch size={20} />
				</Button>
				<Button variant={"sink"} size={"sink"}>
					Авторизуватися
				</Button>
			</div>
		</header>
	);
};

import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { useState, useRef } from "react";
import { navVariants } from "@/motion";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (previous && latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	const toggleAudio = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	return (
		<>
			<motion.nav
				variants={navVariants}
				className="w-full h-[8vh] padding-x fixed top-0 left-0 z-50 backdrop-blur-[7px] flex items-center justify-between sm:hidden xm:hidden md:hidden"
				animate={hidden ? "hidden" : "vissible"}>
				<div className="w-[60%]">
					<Link href={"/"}>
						<Image
							src="/nukename2.png"
							alt="nuke logo"
							width={120}
							height={140}
						/>
					</Link>
				</div>
				<div className="flex gap-x-[20px] w-[50%]">
					{navbarItems.map((item) => (
						<Link
							key={item.id}
							className={`w-fit paragraph font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover ${
								item.id === 5 && "ml-auto"
							}`}
							href={item.href}>
							<TextHover
								titile1={item.title}
								titile2={item.title}
							/>
						</Link>
					))}
					<button 
						onClick={toggleAudio}
						className="flex items-center justify-center ml-4 bg-secondry hover:bg-opacity-80 transition-all duration-300 text-white rounded-full w-8 h-8"
					>
						{isPlaying ? (
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
								<path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
								<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
							</svg>
						)}
					</button>
				</div>
			</motion.nav>
			<audio ref={audioRef} src="/loop.mp3" loop />
			<MobileNav />
		</>
	);
}
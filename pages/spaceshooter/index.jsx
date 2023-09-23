import SpaceShooter from "@/components/SpaceShooter";
import Head from "next/head";
import { Fragment } from "react";
const SpaceShooterGame = () => {
	return (
		<Fragment>
			<Head>
				<title>Space Shooting Game | Space Otaku </title>
				<meta
					name="description"
					content="Play Exciting Space Shooter and Explore the universe with Space Otaku."
				/>
				<meta
					name="keywords"
					content="Space shooter , game, shooter, space otaku,space, astronomy, celestial bodies, solar system, astronauts, satellites, space news, cosmic, universe, exploration, stargazing, space enthusiasts , Ankur, Halder, Ankur Halder, Space Otaku, Space Otaku by Ankur Halder,"
				/>
				<meta
					property="og:url"
					content="https://www.spaceotaku.online/spaceshooter"
				/>
				<meta
					name="twitter:url"
					content="https://www.spaceotaku.online/spaceshooter"
				/>
			</Head>
			<div className="space-shooter-container">
				<h1>Space Shooter Game by Space Otaku</h1>
				<SpaceShooter></SpaceShooter>
			</div>
		</Fragment>
	);
};

export default SpaceShooterGame;

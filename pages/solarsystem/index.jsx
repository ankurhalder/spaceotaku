/* eslint-disable react/no-unescaped-entities */
import { Fragment } from "react";
import Head from "next/head";

export default function SolarSystem() {
	return (
		<Fragment>
			<Head>
				<title>Explore the Solar System | Space Otaku.</title>

				<meta
					name="description"
					content="Discover fascinating celestial bodies, planet distances, speeds, and sizes relative to the sun in this immersive experience by Space Otaku."
				/>
				<meta
					name="keywords"
					content="space otaku, Solar System, Space Otaku, Planet Distances, Planet Sizes, Planet Speeds, Cosmic Neighborhood, Space Exploration, Celestial Wonders, Space Enthusiast, Educational Simulation, Interactive Learning, Astronomy, Inner Planets, Gas Giants, Ice Giants, Terrestrial Worlds, Dwarf Planets, Kuiper Belt, Oort Cloud, Sun, Solar Phenomena, Space Weather, Astronomy Education, Space Exploration Missions, Solar System Discoveries"
				/>
				<link
					rel="canonical"
					href="https://spaceotaku.vercel.app/solarsystem"
				/>
				<meta
					property="og:url"
					content="https://www.spaceotaku.online/solarsystem/"
				/>
				<meta
					name="twitter:url"
					content="https://www.spaceotaku.online/solarsystem/"
				/>
			</Head>
			<h1 className="solar-system-heading">
				Explore the Solar System with Space Otaku
			</h1>
			<div className="solar-system-description">
				<h3>Embark on a Cosmic Adventure</h3>
				<p>
					Welcome to an awe-inspiring journey through our Solar System,
					presented by Space Otaku. Immerse yourself in the mysteries of our
					cosmic neighborhood, where you can explore the planetary distances,
					speeds, and sizes relative to the radiant Sun in this visually
					captivating simulation.
				</p>

				<h4>Discover the Planetary Diversity</h4>
				<p>
					Our Solar System, a vast expanse that stretches billions of kilometers
					across, holds a treasure trove of celestial marvels waiting to be
					unveiled. Within this interactive experience, you can embark on a
					virtual voyage to uncover the remarkable diversity of our planetary
					companions.
				</p>

				{/* <h3>Terrestrial Wonders</h3> */}
				<p>
					Traverse the inner planets, Mercury, Venus, Earth, and Mars, and
					witness their contrasting landscapes, from the sweltering heat of
					Venus to the life-sustaining oasis of Earth. Delve into the geological
					history and intriguing discoveries made on these terrestrial worlds.
				</p>

				{/* <h5>Gas Giants and Beyond</h5> */}
				<p>
					As you journey further, you'll encounter the gas giants, Jupiter and
					Saturn, with their colossal atmospheres and intricate ring systems
					that have fascinated astronomers for centuries. Explore the mysteries
					of Uranus and Neptune, the ice giants, and their frigid, turbulent
					atmospheres.
				</p>

				<h5>Exploring the Outer Frontiers</h5>
				<p>
					Beyond the familiar planets, discover the lesser-known celestial
					objects that inhabit our Solar System, including dwarf planets like
					Pluto and Eris, and the fascinating Kuiper Belt and Oort Cloud. Learn
					about the ongoing research and missions that aim to unravel the
					secrets of these distant realms.
				</p>

				<h6>Unveiling the Power of Our Sun</h6>
				<p>
					Gain a deeper understanding of our Sun, the star that provides light
					and energy to all these celestial bodies. Learn about solar phenomena,
					such as sunspots and solar flares, and their impact on space weather
					and Earth.
				</p>

				{/* <h4>An Educational Odyssey</h4> */}
				<p>
					This simulation isn't just about observing the wonders of space; it's
					also a valuable educational tool. Teachers can use it to engage
					students in the fascinating world of astronomy, while curious minds of
					all ages can satisfy their thirst for knowledge about our Solar
					System.
				</p>

				{/* <h6>Join Us on this Cosmic Expedition</h6> */}
				<p>
					Join us now and embark on an expedition through the cosmos that will
					leave you with a profound appreciation for the grandeur and complexity
					of our Solar System. Whether you're a space enthusiast, a student, or
					a lifelong learner, this simulation promises an unforgettable voyage
					into the realms of space and time.
				</p>
			</div>

			<iframe
				className="solar-system-container"
				src="https://spaceotakusolarsystem.netlify.app/"
				title="Space Otaku Solar System"
			></iframe>
		</Fragment>
	);
}

/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Fragment } from "react";

function Index() {
	return (
		<Fragment>
			<Head>
				<title>Space Otaku | Your Cosmic Gateway</title>
				<meta
					name="description"
					content="Explore the cosmos with Space Otaku, your ultimate destination for the latest space news, astronaut biographies, satellite data, solar system details, cosmic discoveries, and more. Join us on a celestial journey!"
				/>
				<meta
					name="keywords"
					content="space, astronomy, celestial bodies, solar system, astronauts, satellites, space news, cosmic, universe, exploration, stargazing, space enthusiasts"
				/>
			</Head>

			<div className="landing-page">
				<h1>Welcome to Space Otaku</h1>
				<h3>Your Cosmic Gateway to the Universe</h3>
				<h4>Created by Ankur Halder</h4>
				<p>
					Are you ready to embark on an awe-inspiring cosmic adventure? Space
					Otaku is your trusted portal for exploring the wonders of the
					universe, offering a rich trove of information and the latest cosmic
					updates, all within easy reach.
				</p>
				<p>
					At Space Otaku, we're driven by an unquenchable passion for everything
					space-related. From the dazzling beauty of distant celestial bodies to
					the incredible feats of astronauts venturing beyond our planet's
					boundaries, we're here to share our wonder with you and make the
					cosmos accessible to all.
				</p>
				<p>
					What awaits you at Space Otaku? Here's a sneak peek of what we have in
					store:
				</p>
				<ul>
					<li>
						<strong>Space News:</strong> Stay up-to-date with the latest cosmic
						discoveries, mission updates, and celestial events happening in our
						ever-expanding universe.
					</li>
					<li>
						<strong>Astronaut Profiles:</strong> Get to know the remarkable
						individuals who journey into the cosmos. Explore their biographies,
						missions, and contributions to space exploration.
					</li>
					<li>
						<strong>Solar System Insights:</strong> Dive deep into the celestial
						neighborhood that is our solar system. Explore planets, moons,
						asteroids, comets, and more, and learn about their fascinating
						properties and histories.
					</li>
					<li>
						<strong>Satellite Tracking:</strong> Keep tabs on the orbits and
						functions of satellites circling our planet, providing vital data
						and facilitating global communication.
					</li>
					<li>
						<strong>Cosmic Discoveries:</strong> Unearth the latest findings and
						breakthroughs in the field of astronomy and space science, shedding
						light on the mysteries of the cosmos.
					</li>
					<li>
						<strong>Stargazing Guides:</strong> Enhance your stargazing
						experience with our helpful guides, showcasing celestial events,
						constellations, and tips for amateur astronomers.
					</li>
					<li>
						<strong>Interactive Tools:</strong> Engage with interactive tools
						and simulations that allow you to explore space phenomena and
						celestial objects from the comfort of your screen.
					</li>
				</ul>
				<p>
					Join us on an extraordinary journey as we unravel the boundless
					mysteries of the universe, from the dazzling beauty of distant
					galaxies to the challenges and triumphs of human spaceflight. Whether
					you're a seasoned stargazer or a curious newcomer, Space Otaku
					welcomes all cosmic enthusiasts to share in the wonder and excitement
					of the final frontier.
				</p>
				<p>
					Are you ready to embark on this cosmic voyage? Let's explore the
					cosmos together!
				</p>
			</div>
		</Fragment>
	);
}

export default Index;

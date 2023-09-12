import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import { Articles, Blogs, Reports } from "@/components";
function Index() {
	const [selectedTab, setSelectedTab] = useState("articles");
	const handleTabChange = (tab) => {
		setSelectedTab(tab);
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [selectedTab]);
	return (
		<Fragment>
			<Head>
				<title>Space Otaku: Your Cosmic Hub</title>
				<meta
					name="description"
					content="Discover space wonders with Space Otaku: your source for space news, astronaut profiles, satellite data, and celestial revelations!"
				/>
				<meta
					name="keywords"
					content="space, astronomy, celestial bodies, solar system, astronauts, satellites, space news, cosmic, universe, exploration, stargazing, space enthusiasts , Ankur, Halder, Ankur Halder, Space Otaku, Space Otaku by Ankur Halder,"
				/>
				<link rel="canonical" href="https://www.spaceotaku.online/" />
			</Head>
			{/* <div className="landing-page-sample-contents">
				<h1>Space Otaku: Navigating the Cosmos for Space Enthusiasts</h1>
				<h3>Created by Ankur Halder</h3>
				<h4>
					Embark on a Celestial Journey with Space Otaku: Your Source for Space
					Enthusiasts
				</h4>
				<h5>Explore the Solar System Insights</h5>
				<h6> Keep tabs on the orbits by satellites</h6>
				<p>
					Are you ready to embark on an awe-inspiring cosmic adventure? Space
					Otaku is your trusted portal for exploring the wonders of the
					universe, offering a rich trove of information and the latest cosmic
					updates, all within easy reach.
				</p>
				<p>
					At Space Otaku, we&aposre driven by an unquenchable passion for
					everything space-related. From the dazzling beauty of distant
					celestial bodies to the incredible feats of astronauts venturing
					beyond our planet&aposs boundaries, we&aposre here to share our wonder
					with you and make the cosmos accessible to all.
				</p>
				<p>
					What awaits you at Space Otaku? Here&aposs a sneak peek of what we
					have in store:
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
					you&aposre a seasoned stargazer or a curious newcomer, Space Otaku
					welcomes all cosmic enthusiasts to share in the wonder and excitement
					of the final frontier.
				</p>
				<p>
					Are you ready to embark on this cosmic voyage? Let&aposs explore the
					cosmos together!
				</p>
			</div> */}

			<div className="landing-container">
				<nav className="tab-nav">
					<button
						className={`tab-button ${
							selectedTab === "articles" ? "active" : ""
						}`}
						onClick={() => handleTabChange("articles")}
					>
						Articles
					</button>
					<button
						className={`tab-button ${selectedTab === "blogs" ? "active" : ""}`}
						onClick={() => handleTabChange("blogs")}
					>
						Blogs
					</button>
					<button
						className={`tab-button ${
							selectedTab === "reports" ? "active" : ""
						}`}
						onClick={() => handleTabChange("reports")}
					>
						Reports
					</button>
				</nav>
				<div className="content">
					{selectedTab === "articles" && <Articles />}
					{selectedTab === "blogs" && <Blogs />}
					{selectedTab === "reports" && <Reports />}
				</div>
			</div>
		</Fragment>
	);
}

export default Index;

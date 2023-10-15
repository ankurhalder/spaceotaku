/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import { Articles, Blogs, Reports } from "@/components";
import { CommonMusic } from "@/components";
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
					content=" space otaku,space, astronomy, celestial bodies, solar system, astronauts, satellites, space news, cosmic, universe, exploration, stargazing, space enthusiasts , Ankur, Halder, Ankur Halder, Space Otaku, Space Otaku by Ankur Halder,"
				/>
				<meta property="og:url" content="https://www.spaceotaku.online/" />
				<meta name="twitter:url" content="https://www.spaceotaku.online/" />
			</Head>
			<CommonMusic></CommonMusic>
			<div className="landing-page-sample-contents none">
				<h1>Space Otaku: Navigating the Cosmos for Space Enthusiasts</h1>
				<span>Created by ANKUR HALDER</span>
				<h5>
					Embark on a Celestial Journey with Space Otaku: Your Source for Space
					Enthusiasts
				</h5>

				<p>
					Space Otaku is a dynamic online platform that not only offers a rich
					array of space-related content but also engages users with an
					interactive space quiz feature. This quiz comes with three difficulty
					modes, allowing participants to tailor their cosmic knowledge
					challenges. What sets Space Otaku apart is its leaderboard, promoting
					friendly competition and community engagement as users can compare
					their quiz scores with others. Additionally, the platform provides a
					dedicated "Quiz Facts" page, enhancing the educational aspect of
					quizzes by offering insightful explanations and information related to
					each question. In summary, Space Otaku combines informative articles,
					interactive quizzes, and opportunities for learning and competition,
					making it a comprehensive and engaging hub for space enthusiasts of
					all levels.
				</p>
			</div>

			<div className="landing-container none">
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

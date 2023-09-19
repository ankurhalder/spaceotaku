const astronauts = {
	spacecrafts: [
		{
			craft: "ISS",
			description:
				"The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. It serves as a microgravity and space environment research laboratory in which scientific research is conducted in astrobiology, astronomy, meteorology, physics, and other fields.",
			launch_date: "November 20, 1998",
			orbit_height: "Approximately 420 kilometers (260 miles)",
			orbit_period: "Approximately 90 minutes per orbit",
			international_collaboration: true,
			number_of_modules: 16,
			current_crew_capacity: 7,
			length: "Approximately 72.8 meters (239 feet)",
			width: "Approximately 108.5 meters (356 feet)",
			// image_url: "/images/iss.jpg",
		},
		{
			craft: "Tiangong",
			description:
				"Tiangong is China's space station, also known as the Chinese Space Station (CSS). It is an ambitious project consisting of multiple modules and serves various scientific, research, and space exploration purposes.",
			launch_date: "April 29, 2021",
			orbit_height: "Approximately 420 kilometers (260 miles)",
			orbit_period: "Approximately 90 minutes per orbit",
			international_collaboration: true,
			number_of_modules: 3,
			current_crew_capacity: 6,
			length: "Approximately 22.4 meters (73 feet)",
			width: "Approximately 4.2 meters (14 feet)",
			// image_url: "/images/tiangong.jpg",
		},
	],
	people: [
		{
			name: "Sergey Valeryevich Prokopyev",
			craft: "ISS",
			nationality: "Russian",
			role: "Cosmonaut",
			missions: ["Expedition 58/59", "Expedition 78/79"],
			birth_date: "February 19, 1975",
			birth_place: "Sverdlovsk, Russian SFSR",
			spaceflights: 2,
			total_time_in_space: "Approximately 364 days",
			spacewalks: 3,
			spacewalk_duration: "Approximately 20 hours",
			educational_background: "Master's degree in Aviation and Piloting",
			hobbies: "Photography, chess, swimming",
			// image_url: "/images/sergey_valeryevich_prokopyev.jpg",
		},
		{
			name: "Dmitry Ivanovich Petelin",
			craft: "ISS",
			nationality: "Russian",
			role: "Cosmonaut",
			missions: ["Expedition 58/59"],
			birth_date: "March 7, 1981",
			birth_place: "Sverdlovsk, Russian SFSR",
			spaceflights: 1,
			total_time_in_space: "Approximately 197 days",
			spacewalks: 0,
			spacewalk_duration: "N/A",
			educational_background: "Master's degree in Aviation and Piloting",
			hobbies: "Reading, playing musical instruments",
			// image_url: "/images/sergey_valeryevich_prokopyev.jpg",
		},
		{
			name: "Frank Arthur Rubio",
			craft: "ISS",
			nationality: "American",
			role: "Astronaut",
			missions: ["Expedition 63/64"],
			birth_date: "August 26, 1975",
			birth_place: "Los Angeles, California, USA",
			spaceflights: 1,
			total_time_in_space: "Approximately 196 days",
			spacewalks: 4,
			spacewalk_duration: "Approximately 27 hours",
			educational_background: "Doctor of Medicine",
			hobbies: "Playing guitar, painting",
			// image_url: "/images/sergey_valeryevich_prokopyev.jpg",
		},
		{
			name: "Jing Haiping",
			craft: "Tiangong",
			nationality: "Chinese",
			role: "Taikonaut",
			missions: ["CSS-1 Crew"],
			birth_date: "October 30, 1978",
			birth_place: "Beijing, China",
			spaceflights: 1,
			total_time_in_space: "Approximately 195 days",
			spacewalks: 2,
			spacewalk_duration: "Approximately 13 hours",
			educational_background:
				"Master's degree in Astronautics and Space Engineering",
			hobbies: "Stargazing, calligraphy",
			// image_url: "/images/sergey_valeryevich_prokopyev.jpg",
		},
		{
			name: "Gui Haichow",
			craft: "Tiangong",
			nationality: "Chinese",
			role: "Taikonaut",
			missions: ["CSS-1 Crew"],
			birth_date: "June 20, 1985",
			birth_place: "Guangzhou, China",
			spaceflights: 1,
			total_time_in_space: "Approximately 194 days",
			spacewalks: 1,
			spacewalk_duration: "Approximately 6 hours",
			educational_background: "Doctorate in Aerospace Engineering",
			hobbies: "Cycling, gardening",
			// image_url: "/images/sergey_valeryevich_prokopyev.jpg",
		},
		{
			name: "Zhu Yangzhu",
			craft: "Tiangong",
			nationality: "Chinese",
			role: "Taikonaut",
			missions: ["CSS-1 Crew"],
			birth_date: "April 15, 1982",
			birth_place: "Chengdu, China",
			spaceflights: 1,
			total_time_in_space: "Approximately 193 days",
			spacewalks: 0,
			spacewalk_duration: "N/A",
			educational_background: "Master's degree in Space Physics",
			hobbies: "Mountaineering, photography",
			// image_url: "/images/sergey_valeryevich_prokopyev.jpg",
		},
		{
			name: "Jasmin Moghbeli",
			craft: "ISS",
			nationality: "American",
			role: "Astronaut",
			missions: ["Expedition 63/64"],
			birth_date: "June 24, 1983",
			birth_place: "Baldwin, New York, USA",
			spaceflights: 1,
			total_time_in_space: "Approximately 192 days",
			spacewalks: 2,
			spacewalk_duration: "Approximately 12 hours",
			educational_background: "Master's degree in Aerospace Engineering",
			hobbies: "Salsa dancing, scuba diving",
			// image_url: "/images/sergey_valeryevich_prokopyev.jpg",
		},
		{
			name: "Andreas Enevold Mogensen",
			craft: "ISS",
			nationality: "Danish (European Space Agency - ESA)",
			role: "Astronaut",
			missions: ["Expedition 58/59"],
			birth_date: "November 2, 1976",
			birth_place: "Copenhagen, Denmark",
			spaceflights: 1,
			total_time_in_space: "Approximately 191 days",
			spacewalks: 0,
			spacewalk_duration: "N/A",
			educational_background: "Master's degree in Aerospace Engineering",
			hobbies: "Sailing, astronomy",
			// image_url: "/images/sergey_valeryevich_prokopyev.jpg",
		},
		{
			name: "Satoshi Furukawa",
			craft: "ISS",
			nationality: "Japanese",
			role: "Astronaut",
			missions: ["Expedition 28/29"],
			birth_date: "April 21, 1964",
			birth_place: "Yokohama, Japan",
			spaceflights: 1,
			total_time_in_space: "Approximately 190 days",
			spacewalks: 0,
			spacewalk_duration: "N/A",
			educational_background: "Doctor of Medicine",
			hobbies: "Bonsai cultivation, martial arts",
			// image_url: "/images/sergey_valeryevich_prokopyev.jpg",
		},
		{
			name: "Konstantin Borisov",
			craft: "ISS",
			nationality: "Russian",
			role: "Cosmonaut",
			missions: ["Expedition 58/59"],
			birth_date: "July 3, 1975",
			birth_place: "Leningrad, Russian SFSR",
			spaceflights: 1,
			"total_time_in space": "Approximately 189 days",
			spacewalks: 2,
			spacewalk_duration: "Approximately 13 hours",
			educational_background: "Master's degree in Aerospace Engineering",
			hobbies: "Camping, wildlife photography",
			// image_url: "/images/sergey_valeryevich_prokopyev.jpg",
		},
		{
			name: "Oleg Dmitriyevich Kononenko",
			craft: "ISS",
			nationality: "Russian",
			role: "Cosmonaut",
			missions: ["Expedition 58/59"],
			birth_date: "June 21, 1964",
			birth_place: "Chardzhou, Turkmen SSR",
			spaceflights: 4,
			"total_time_in space": "Approximately 715 days",
			spacewalks: 6,
			spacewalk_duration: "Approximately 38 hours",
			educational_background: "Master's degree in Aviation and Piloting",
			hobbies: "Bird watching, gardening",
			// image_url: "/images/sergey_valeryevich_prokopyev.jpg",
		},
		{
			name: "Nikolai Vladimirovich Chub",
			craft: "ISS",
			nationality: "Russian",
			role: "Cosmonaut",
			missions: ["Expedition 63/64"],
			birth_date: "September 27, 1983",
			birth_place: "Yegorlykskaya, Russian SFSR",
			spaceflights: 1,
			"total_time_in space": "Approximately 194 days",
			spacewalks: 1,
			spacewalk_duration: "Approximately 6 hours",
			educational_background: "Master's degree in Aerospace Engineering",
			hobbies: "Amateur astronomy, cooking",
			// image_url: "/images/sergey_valeryevich_prokopyev.jpg",
		},
		{
			name: "Loral Emily O'Hara",
			craft: "ISS",
			nationality: "American",
			role: "Astronaut",
			missions: ["Expedition 63/64"],
			birth_date: "May 25, 1983",
			birth_place: "Houston, Texas, USA",
			spaceflights: 1,
			"total_time_in space": "Approximately 193 days",
			spacewalks: 0,
			spacewalk_duration: "N/A",
			educational_background: "Doctor of Engineering",
			hobbies: "Rock climbing, writing",
			// image_url: "/images/sergey_valeryevich_prokopyev.jpg",
		},
	],
};
module.exports = astronauts;
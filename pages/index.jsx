import Head from "next/head";
import Layout from "@/layout/Layout";
function index() {
	return (
		<Layout>
			<Head>
				<title>Space Otaku</title>
				<meta
					name="description"
					content="Your ultimate destination for the latest space news, astronaut activities, satellite locations, solar system details, and more. Explore real-time space information."
				/>
			</Head>
			<div className="landing-page">
				<h1>This is Created by Ankur </h1>
				<p>
					n real life, NASA Advanced Supercomputing (NAS) research scientists,
					at the agency’s Ames Research Center in California’s Silicon Valley,
					are producing highly detailed simulations and visualizations to help
					keep astronauts safe during the dynamic liftoff conditions of NASA’s
					Orion spacecraft, which will send humans to the Moon and potential
					future destinations, and return them safely back to Earth. The NAS
					scientists’ advanced simulation techniques are being used to predict
					vibrations on the Orion spacecraft’s Launch Abort Vehicle (LAV). The
					LAV is the combined configuration of the Orion launch abort system and
					crew module. The LAV is designed to pull the crew away from peril if
					an emergency occurs on the launch pad or during the first two minutes
					of flight.
				</p>
				<h3>space otaku</h3>
				<p>
					Astronomer Charles Messier discovered Messier 89 in 1781. Messier
					began cataloging astronomical objects after he mistook a faint object
					in the sky for Halley’s Comet. Upon closer inspection, he realized the
					object was actually the Crab Nebula. To prevent other astronomers from
					making the same error, he decided to catalog all the bright, deep-sky
					objects that could potentially be mistaken for comets. His methodical
					observations of the night sky led to the first comprehensive catalog
					of astronomical objects: the Messier Catalog! Messier 89 holds the
					record for being the last giant elliptical Messier found, and the most
					perfectly spherical galaxy in his catalog of 110 objects.
				</p>
				<p>
					From Earth orbit to the Moon and Mars, explore the world of human
					spaceflight with NASA each week on the official podcast of the Johnson
					Space Center in Houston, Texas. Listen to in-depth conversations with
					the astronauts, scientists and engineers who make it possible.
				</p>
				<p>
					XRISM’s microcalorimeter spectrometer, named Resolve, is a
					collaboration between JAXA and NASA. It will create spectra,
					measurements of light’s intensity over a range of energies, for X-rays
					from 400 to 12,000 electron volts. (For comparison, visible light
					energies range from about 2 to 3 electron volts.) To do this, Resolve
					measures tiny temperature changes created when an X-ray hits its
					6-by-6-pixel detector. To measure that minuscule increase and
					determine the X-ray’s energy, the detector needs to cool down to
					around minus 460 Fahrenheit (around minus 270 Celsius), just a
					fraction of a degree above absolute zero. The instrument reaches its
					operating temperature after a multistage mechanical cooling process
					inside a refrigerator-sized container of liquid helium. Resolve will
					help astronomers learn more about the composition and motion of
					extremely hot gas within clusters of galaxies, near-light-speed
					particle jets powered by black holes in active galaxies, and other
					cosmic mysteries. The Webb telescope captures similar spectra, but for
					infrared light. Webb’s spectra have revealed the makeup of gas near
					active black holes and mapped the movement of this material toward or
					away from the viewer. Data from XRISM’s Resolve instrument will do the
					same at higher energies, helping paint a fuller picture of these
					objects.
				</p>
			</div>
		</Layout>
	);
}

export default index;

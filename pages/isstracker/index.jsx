import { ISSMap } from "@/components";
import { Fragment } from "react";
import Head from "next/head";
import { CommonMusic } from "@/components";
export default function IssTracker() {
  return (
    <Fragment>
      <Head>
        <title>Live International Space Station (ISS) Location</title>
        <meta
          name="description"
          content="Stay updated with the real-time location of the International Space Station (ISS). Calculate your distance and explore its coordinates on an interactive map."
        />
        <meta
          name="keywords"
          content=" space otaku,ISS tracking, International Space Station location, real-time ISS tracker, ISS coordinates, space exploration, Earth's orbit, ISS map"
        />
        <meta
          property="og:url"
          content="https://www.spaceotaku.online/isstracker"
        />
        <meta
          name="twitter:url"
          content="https://www.spaceotaku.online/isstracker"
        />
      </Head>
      {/* <CommonMusic></CommonMusic> */}
      <div>
        <h1 className="iss-tracker-heading">
          Live International Space Station (ISS) Location
        </h1>
        <div className="iss-tracker-description seo">
          <p>Live International Space Station (ISS) Location</p>
          <span className="section-header">Detailed Description:</span>
          <p>
            Welcome to the ultimate resource for tracking the International
            Space Station (ISS) in real-time. Our Real-Time ISS Tracking React
            App offers a rich and immersive experience, allowing you to delve
            into the mysteries of the ISS&apos;s orbit around our planet.
            Whether you&apos;re an avid space enthusiast, a student, or just
            curious about the cosmos, this app provides an invaluable platform
            for exploration.
          </p>

          <span className="section-header">Real-Time ISS Location:</span>
          <p>
            One of the standout features of our app is its ability to provide
            live, up-to-the-second information about the ISS&apos;s location.
            With updates every half a second, you can closely monitor the ISS as
            it travels through the Earth&apos;s atmosphere. Watch its path as it
            speeds along its orbital route.
          </p>

          <span className="section-header">Detailed ISS Data:</span>
          <p>
            In addition to real-time tracking, our app offers a wealth of
            detailed information about the ISS. You can access data such as its
            current speed, altitude, and coordinates. This data is not only
            informative but also educational, making it perfect for use in the
            classroom or for those eager to learn more about space science.
          </p>

          <span className="section-header">Compare Your Location:</span>
          <p>
            Curious about your own location? The app connects to geolocation
            services to provide you with your latitude and longitude. This
            feature allows you to compare your position with that of the ISS,
            gaining a real sense of its orbital journey.
          </p>

          <span className="section-header">Calculating the Distance:</span>
          <p>
            Have you ever wondered how far you are from the ISS as it races
            across the sky? Our distance calculator is the perfect tool to
            satisfy your curiosity. You can watch in real-time as the distance
            between you and the space station changes. It&apos;s an excellent
            way to visualize the scale of space.
          </p>

          <span className="section-header">
            Interactive Map for Visual Learners:
          </span>
          <p>
            To provide a visual representation of the ISS&apos;s journey,
            we&apos;ve integrated an interactive map powered by Leaflet. This
            map not only displays the ISS&apos;s icon and your position but also
            allows you to zoom in and out, exploring the Earth from space. This
            feature is a valuable educational tool for visual learners.
          </p>

          <span className="section-header">Educational and Entertaining:</span>
          <p>
            Our Real-Time ISS Tracking React App is designed to be both
            educational and entertaining. It&apos;s perfect for space
            enthusiasts, educators, and students looking to expand their
            knowledge of space science. The intuitive interface and rich data
            make it an engaging tool for all.
          </p>

          <span className="section-header">
            Begin Your Space Journey Today:
          </span>
          <p>
            If you&apos;re ready to embark on a journey into the vastness of
            space, our Real-Time ISS Tracking React App is your passport. Start
            your adventure today by visiting our app. It&apos;s a unique and
            immersive way to learn about the International Space Station,
            witness its path, and gain a deep appreciation for the wonders of
            space.
          </p>
        </div>
        <ISSMap />
      </div>
    </Fragment>
  );
}

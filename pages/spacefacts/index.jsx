/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import spaceFacts from "@/data/spaceFacts";
import colorPairs from "@/data/colorPairs";
import Head from "next/head";
import { Fragment } from "react";
import { CommonMusic } from "@/components";
const Header = () => (
  <header className="header">
    <h1>Space Facts by Space Otaku</h1>
  </header>
);

const Title = () => (
  <h3>
    <span>Did You Know?</span>
  </h3>
);

function SpaceFacts() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [visitedFactIndices, setVisitedFactIndices] = useState([]);

  useEffect(() => {
    const storedIndices = localStorage.getItem("visitedFactIndices");
    if (storedIndices) {
      setVisitedFactIndices(JSON.parse(storedIndices));
    }
  }, []);

  const [currentColorPair, setCurrentColorPair] = useState(() => {
    const randomIndex = Math.floor(Math.random() * colorPairs.length);
    return colorPairs[randomIndex];
  });

  const handleNextFact = () => {
    const unvisitedIndices = spaceFacts
      .map((_, index) => index)
      .filter((index) => !visitedFactIndices.includes(index));
    if (unvisitedIndices.length > 0) {
      const randomIndex =
        unvisitedIndices[Math.floor(Math.random() * unvisitedIndices.length)];
      setCurrentFactIndex(randomIndex);
      setVisitedFactIndices([...visitedFactIndices, randomIndex]);
      localStorage.setItem(
        "visitedFactIndices",
        JSON.stringify([...visitedFactIndices, randomIndex])
      );
      const newRandomIndex = Math.floor(Math.random() * colorPairs.length);
      setCurrentColorPair(colorPairs[newRandomIndex]);
    } else {
      setVisitedFactIndices([]);
      localStorage.removeItem("visitedFactIndices");
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Explore Amazing Space Facts | SpaceOtaku</title>
        <meta
          name="description"
          content="Explore fascinating space facts and trivia at SpaceOtaku. Get ready to be amazed by the universe!"
        />
        <meta
          name="keywords"
          content="space otaku,space,Space facts, astronomy, celestial bodies, solar system, astronauts, satellites, space news, cosmic, universe, exploration, stargazing, space enthusiasts , Ankur, Halder, Ankur Halder, Space Otaku, Space Otaku by Ankur Halder,"
        />
        <meta
          property="og:url"
          content="https://www.spaceotaku.online/spacefacts"
        />
        <meta
          name="twitter:url"
          content="https://www.spaceotaku.online/spacefacts"
        />
      </Head>

      {/* <CommonMusic></CommonMusic> */}
      <div className="facts-container">
        <Header />
        <div
          className="space-facts-container"
          style={{
            "--background-gradient": currentColorPair.backgroundGradient,
            "--button-gradient": currentColorPair.newButtonGradient,
            "--radial-gradient": currentColorPair.radialGradient,
            "--box-shadow": currentColorPair.boxShadow,
          }}
        >
          <Title />
          <p className="space-facts-text">
            {spaceFacts[currentFactIndex].fact}
          </p>
          <button className="space-facts-button" onClick={handleNextFact}>
            Next Fact
          </button>
        </div>
      </div>
      <div className="seo">
        <p>Explore Amazing Space Facts | SpaceOtaku</p>
        <p>Space Facts by Space Otaku</p>
        <p>
          Space Facts: Dive into a collection of captivating space facts. Each
          fact unveils a unique aspect of the universe, providing insight into
          its vastness and complexity.
        </p>

        <p>
          Next Fact: After you've absorbed the knowledge of one fact, you can
          hit the "Next Fact" button to reveal another astonishing piece of
          cosmic information. These facts are not only informative but also
          visually engaging, enhancing your learning experience.
        </p>

        <p>
          Get Ready to Be Amazed: Space Facts is your portal to the mysteries of
          the cosmos. It's a place where curiosity is nurtured, and the wonders
          of space are brought to life. Whether you're a dedicated space
          enthusiast or simply someone who appreciates the magnificence of the
          universe, Space Otaku's Space Facts page promises an enlightening and
          visually captivating journey through the cosmos.
        </p>

        <p>
          How to Explore: Discover Cosmic Facts: Click the "Next Fact" button to
          reveal a fascinating space fact. Experience Visual Delights: Immerse
          yourself in a dynamic color scheme that enhances the visual appeal of
          each fact. Unearth Cosmic Secrets: Expand your cosmic knowledge as you
          explore an ever-evolving collection of facts about our universe.
        </p>

        <p>
          Prepare for Cosmic Revelation: Dive into Space Otaku's Space Facts
          page and get ready to uncover the astonishing secrets of the universe.
          Whether you're looking for space news, exploration, or simply want to
          ignite your cosmic curiosity, this is the place to be. Explore Space
          Facts and let the wonders of space captivate your imagination!
        </p>
      </div>
    </Fragment>
  );
}

export default SpaceFacts;

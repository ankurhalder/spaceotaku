import { useEffect } from "react";

const TwinklingStars = () => {
  useEffect(() => {
    const createStar = (twinkling) => {
      const star = document.createElement("div");
      star.className = twinkling ? "star twinkling" : "star";
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random();
      star.style.left = `${left}%`;
      star.style.top = `${top}%`;
      star.style.animationDelay = `${delay}s`;
      document.body.appendChild(star);
    };

    // Create twinkling stars
    for (let i = 0; i < 150; i++) {
      createStar(true);
    }

    // Create non-twinkling stars
    for (let i = 0; i < 150; i++) {
      createStar(false);
    }
  }, []);

  return null;
};

export default TwinklingStars;

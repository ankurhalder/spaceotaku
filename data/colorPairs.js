const colorPairs = [
  {
    backgroundGradient: "linear-gradient(to right, #191970, #800080)", // Midnight Blue to Royal Purple
    buttonGradient: "linear-gradient(to right, #191970, #800080)", // Midnight Blue to Royal Purple
    index: 0,
  },
  {
    backgroundGradient: "linear-gradient(to right, #00FFFF, #007FFF)", // Electric Blue to Aqua
    buttonGradient: "linear-gradient(to right, #00FFFF, #007FFF)", // Electric Blue to Aqua
    index: 1,
  },
  {
    backgroundGradient: "linear-gradient(to right, #DC143C, #FF007F)", // Crimson Red to Rose Pink
    buttonGradient: "linear-gradient(to right, #DC143C, #FF007F)", // Crimson Red to Rose Pink
    index: 2,
  },
  {
    backgroundGradient: "linear-gradient(to right, #008000, #00FFC0)", // Emerald Green to Mint Green
    buttonGradient: "linear-gradient(to right, #008000, #00FFC0)", // Emerald Green to Mint Green
    index: 3,
  },
  {
    backgroundGradient: "linear-gradient(to right, #FFD700, #FFA500)", // Golden Yellow to Tangerine Orange
    buttonGradient: "linear-gradient(to right, #FFD700, #FFA500)", // Golden Yellow to Tangerine Orange
    index: 4,
  },
  {
    backgroundGradient: "linear-gradient(to right, #E6E6FA, #87CEEB)", // Lavender to Sky Blue
    buttonGradient: "linear-gradient(to right, #E6E6FA, #87CEEB)", // Lavender to Sky Blue
    index: 5,
  },
  {
    backgroundGradient: "linear-gradient(to right, #E0115F, #FF4500)", // Ruby Red to Deep Orange
    buttonGradient: "linear-gradient(to right, #E0115F, #FF4500)", // Ruby Red to Deep Orange
    index: 6,
  },
  {
    backgroundGradient: "linear-gradient(to right, #008080, #2E0854)", // Teal Blue to Deep Indigo
    buttonGradient: "linear-gradient(to right, #008080, #2E0854)", // Teal Blue to Deep Indigo
    index: 7,
  },
  {
    backgroundGradient: "linear-gradient(to right, #FFD700, #FFDAB9)", // Sunflower Yellow to Peach
    buttonGradient: "linear-gradient(to right, #FFD700, #FFDAB9)", // Sunflower Yellow to Peach
    index: 8,
  },
  {
    backgroundGradient: "linear-gradient(to right, #9932CC, #C8A2C8)", // Orchid Purple to Lilac
    buttonGradient: "linear-gradient(to right, #9932CC, #C8A2C8)", // Orchid Purple to Lilac
    index: 9,
  },
  {
    backgroundGradient: "linear-gradient(to right, #00008B, #00FFFF)", // Deep Blue to Electric Teal
    buttonGradient: "linear-gradient(to right, #00008B, #00FFFF)", // Deep Blue to Electric Teal
    index: 10,
  },
  {
    backgroundGradient: "linear-gradient(to right, #8B0000, #9966CC)", // Dark Crimson to Amethyst
    buttonGradient: "linear-gradient(to right, #8B0000, #9966CC)", // Dark Crimson to Amethyst
    index: 11,
  },
  {
    backgroundGradient: "linear-gradient(to right, #191970, #000080)", // Midnight Purple to Galaxy Blue
    buttonGradient: "linear-gradient(to right, #191970, #000080)", // Midnight Purple to Galaxy Blue
    index: 12,
  },
  {
    backgroundGradient: "linear-gradient(to right, #228B22, #7CFC00)", // Enchanted Forest to Moss Green
    buttonGradient: "linear-gradient(to right, #228B22, #7CFC00)", // Enchanted Forest to Moss Green
    index: 13,
  },
  {
    backgroundGradient: "linear-gradient(to right, #C71585, #FF6EB4)", // Crimson Rose to Blush Pink
    buttonGradient: "linear-gradient(to right, #C71585, #FF6EB4)", // Crimson Rose to Blush Pink
    index: 14,
  },
  {
    backgroundGradient: "linear-gradient(to right, #FFA500, #DAA520)", // Dark Amber to Goldenrod
    buttonGradient: "linear-gradient(to right, #FFA500, #DAA520)", // Dark Amber to Goldenrod
    index: 15,
  },
  {
    backgroundGradient: "linear-gradient(to right, #082E63, #00FFFF)", // Sapphire Blue to Aqua Marine
    buttonGradient: "linear-gradient(to right, #082E63, #00FFFF)", // Sapphire Blue to Aqua Marine
    index: 16,
  },
  {
    backgroundGradient: "linear-gradient(to right, #4B0082, #C8A2C8)", // Indigo Violet to Lilac
    buttonGradient: "linear-gradient(to right, #4B0082, #C8A2C8)", // Indigo Violet to Lilac
    index: 17,
  },
  {
    backgroundGradient: "linear-gradient(to right, #FF6B6B, #FA8072)", // Coral Pink to Salmon
    buttonGradient: "linear-gradient(to right, #FF6B6B, #FA8072)", // Coral Pink to Salmon
    index: 18,
  },
  {
    backgroundGradient: "linear-gradient(to right, #2E2EFE, #000033)", // Celestial Blue to Deep Space
    buttonGradient: "linear-gradient(to right, #2E2EFE, #000033)", // Celestial Blue to Deep Space
    index: 19,
  },
];

const modifiedColorPairs = colorPairs.map((colorPair) => {
  const [color1, color2] = colorPair.buttonGradient.match(/#[0-9A-Fa-f]{6}/g);

  const newButtonGradient = `linear-gradient(to right, ${color2}, ${color1})`;
  const radialGradient = `radial-gradient(circle, ${color1}, transparent)`;
  const boxShadow = `0 10px 20px ${color2}`;
  return {
    ...colorPair,
    newButtonGradient,
    radialGradient,
    boxShadow,
  };
});

export default modifiedColorPairs;

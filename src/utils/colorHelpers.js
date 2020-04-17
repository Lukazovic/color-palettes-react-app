import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };
  levels.map(level => (newPalette.colors[level] = []));

  starterPalette.colors.map(color => {
    let scale = getScale(color.color, 10).reverse();
    scale.forEach((s, index) =>
      newPalette.colors[levels[index]].push({
        name: `${color.name} ${levels[index]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[index],
        rgb: chroma(scale[index]).css(),
        rgba: chroma(scale[index])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      })
    );
    return null;
  });
  return newPalette;
}

function getRange(hexColor) {
  const end = "#FFF";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function getScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

export { generatePalette };

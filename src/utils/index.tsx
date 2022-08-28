import color from "color";

export const getThemeColors = (colors: Record<string, string>) => {
  const lightnessStep = 9;
  const darknessStep = 10;
  const temp: Record<string, string> = { ...colors };

  Object.keys(colors).forEach((key) => {
    temp[`${key}.50`] = color(colors[key])
      .lightness(50 + lightnessStep * 5)
      .hex();
    temp[`${key}.100`] = color(colors[key])
      .lightness(50 + lightnessStep * 4)
      .hex();
    temp[`${key}.200`] = color(colors[key])
      .lightness(50 + lightnessStep * 3)
      .hex();
    temp[`${key}.300`] = color(colors[key])
      .lightness(50 + lightnessStep * 2)
      .hex();
    temp[`${key}.400`] = color(colors[key])
      .lightness(50 + lightnessStep * 1)
      .hex();
    temp[`${key}.500`] = color(colors[key]).hex();
    temp[`${key}.600`] = color(colors[key])
      .lightness(50 - darknessStep * 1)
      .hex();
    temp[`${key}.700`] = color(colors[key])
      .lightness(50 - darknessStep * 2)
      .hex();
    temp[`${key}.800`] = color(colors[key])
      .lightness(50 - darknessStep * 3)
      .hex();
    temp[`${key}.900`] = color(colors[key])
      .lightness(50 - darknessStep * 4)
      .hex();
  });

  return temp;
};

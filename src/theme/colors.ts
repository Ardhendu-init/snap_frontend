import { getThemeColors } from "../utils";

const brandColor = getThemeColors({});

export const colors = {
  ...brandColor,
  primaryMedium: "#F2EEFF",
  primaryBorder: "#9A7CF0",
  primaryLight: "rgba(173, 124, 247, 0.1)",
  primaryLightText: "#8E6BF2",
  primaryBgLight: "rgba(255, 255, 255, 0.12)",
  primaryHero: "#8593BB",
  bg: {
    white: "hsl(0, 0%, 98%)",
    gray: "hsl(0, 0%, 41%)",
    black: "hsl(0, 0%, 8%)",
  },
  nav: {
    hover: "#E83E8C",
    text: "#5F6474",
  },
  customGray: {
    bg: "#f1f1f1",
    light: "#BFBFBF",
    topBg: "#F0EEF1",
    bgLight: "#F5F4F6",
  },
  text: {
    th: "#6C757D",
    black: "#212529",
    veryDarkBlue: "#1F1956",
    td: "#1f19568a",
    formLabel: "rgba(31, 25, 86, 0.6)",
    placeholder: "#aca8d799",
    hero: "#8593BB",
  },
};

export const BREAKPOINTS = {
  desktop: "750px",
};

const breakpoints = {
  desktop: `min-width: ${BREAKPOINTS.desktop}`,
  desktopSize: BREAKPOINTS.desktop,
};

export const COLORS = {
  dark: "#000000",
  light: "#ffffff",
  primary: "#cc0000",
  secondary: "#880000",
};

export const theme = {
  breakpoints,
  colors: COLORS,
  fontSize: {
    mobile: "18px",
    desktop: "25px",
  },
  fontFamily: ["Fira Mono", "monospace"],
  background: {
    color: COLORS.dark,
  },
  text: {
    color: COLORS.light,
  },
};

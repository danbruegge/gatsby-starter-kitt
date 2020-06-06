export const BREAKPOINTS = {
  desktop: "750px",
};

const breakpoints = {
  desktop: `min-width: ${BREAKPOINTS.desktop}`,
  desktopSize: BREAKPOINTS.desktop,
};

export const COLORS = {
  dark: "#0c0e0d",
  light: "#f9f9fa",
  primary: "#59a27a",
  secondary: "#edac37",
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
    color: COLORS.light,
  },
  text: {
    color: COLORS.dark,
  },
};

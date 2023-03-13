import { extendTheme } from "@chakra-ui/react";

const colors = {
  white: "#ffffff",
  black: "#000000",
  defi: {
    dark: { first: "#192123", second: "#242B2D" },
    light: { first: "#FCFBFD", second: "#BFC2C4" },
  },
  app: {
    light: "#fff",
    dark: {
      100: "#000000",
      200: "#1e1e1e",
      300: "#2d2d2d",
      400: "#3c3c3c",
      500: "#4b4b4b",
      600: "#5a5a5a",
      700: "#696969",
      800: "#787878",
      900: "#878787",
    },
    accent: { 100: "#A7FF37", 900: "#426A00" },
    success: "#8ADD21",
    danger: "#DD2121",
  },
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  r: "1280px",
  xll: "1440px",
  "2xl": "1536px",
};

const styles = {
  global: () => ({
    html: {
      scrollBehaivor: "smooth",
    },
    body: {
      fontFamily: '"Helvetica", sans-serif',
      fontWeight: "normal",
      background: "#192123",
      color: "black",
      tansition: "all 0.2s ease-in-out",
    },
    button: {
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      "&:focus": {
        outline: "none",
      },
    },
    a: {
      cursor: "pointer",
      padding: "unset",
      margin: "unset",
      transition: "all 0.2s ease-in-out",
      "&:focus": {
        outline: "none",
      },
      textDecoration: "none",
    },
    img: {
      userSelect: "none",
    },
    select: {
      background: "none",
      boxShadow: "none",
      border: "none",
      hover: "unset",
      cursor: "pointer",
    },
  }),
};

export const theme = extendTheme({ styles, colors, breakpoints });

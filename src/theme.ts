import { PaletteOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const pallete = {
  primary: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },

  secondary: {
    100: "#f7ccd2",
    200: "#ef99a4",
    300: "#e66677",
    400: "#de3349",
    500: "#d6001c",
    600: "#ab0016",
    700: "#800011",
    800: "#56000b",
    900: "#2b0006",
  },

  neutral: {
    100: "#f5f5f5",
    200: "#ecebeb",
    300: "#e2e1e1",
    400: "#d9d7d7",
    500: "#cfcdcd",
    600: "#a6a4a4",
    700: "#7c7b7b",
    800: "#535252",
    900: "#292929",
  },
};

type CustomPalette = PaletteOptions & {
  neutral: string;
};

export const theme = createTheme({
  palette: {
    primary: {
      main: pallete.primary[500],
    },
    secondary: {
      main: pallete.secondary[500],
    },
    neutral: pallete.neutral[500],
  } as CustomPalette,

  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    h1: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: "3rem",
      lineHeight: "2.25rem",
    },
    h2: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
    },
    h3: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
    },
    body1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    body2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: "0.75rem",
      lineHeight: "1rem",
    },
  },
});

export type ThemeType = typeof theme;

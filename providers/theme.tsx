import React, { FunctionComponent } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

enum Color {
  GREEN = "#55ab4c",
  BLUE = "#0199dd",
  YELLOW = "#e1a100",
  PURPLE = "#a04daa",
  BLACK = "#2e2a25",
  WHITE = "#f0eef8",
  GREENISH = "#a9b492",
  BLACKISH = "#181410",
}

enum Palette {
  PRIMARY = Color.BLUE,
  SECONDARY = Color.GREEN,
  WARN = Color.YELLOW,
  DANGER = Color.PURPLE,
  TEXT = Color.BLACK,
  BG = Color.WHITE,
}

enum Display {
  TEXT = Color.BLACKISH,
  BG = Color.GREENISH,
}

export const customTheme = { palette: Palette, display: Display };

const GlobalStyle = createGlobalStyle`
  body,
  html,
  #__next {
    background: ${(props) => props.theme.palette.BG};
    color: ${(props) => props.theme.palette.TEXT};
    font-family: sans-serif;
  }
`;

const Provider: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Provider;

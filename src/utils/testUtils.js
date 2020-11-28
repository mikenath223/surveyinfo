import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { theme } from 'styles/global';

export const withThemeProvider = (component) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export const withResultThemeProvider = (component) =>
  render(<ThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  </ThemeProvider>)
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { globalTheme } from 'styles/global';
import userDefTheme from 'styles/themeModes';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import store from 'store'

export const withThemeProvider = (component) =>
  render(<ThemeProvider theme={globalTheme}>
    {component}
  </ThemeProvider>)

export const withReduxThemeProvider = (component) =>
  render(<Provider store={store}>
    <ThemeProvider theme={globalTheme}>{component}</ThemeProvider>
  </Provider>);

export const withReduxProvider = (component) =>
  render(<Provider store={store}>
    {component}
  </Provider>)

export const withProviders = (component, themeMode) =>
  render(<Provider store={store}>
    <MemoryRouter>
      <ThemeProvider theme={userDefTheme[themeMode]}>
        {component}
      </ThemeProvider>
    </MemoryRouter>
  </Provider>)

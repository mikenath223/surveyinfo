import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { globalTheme } from 'styles/global';
import userDefTheme from 'styles/themeModes';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import store from 'store'
import userDefinedThemes from 'styles/themeModes';

export const withThemeProvider = (component) =>
  render(<ThemeProvider theme={globalTheme}>
    {component}
  </ThemeProvider>)

export const withResultThemeProvider = (component, themeMode) => 
    renderer.create(<ThemeProvider theme={userDefinedThemes[themeMode]}>
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

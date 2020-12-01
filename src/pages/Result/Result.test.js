import React from 'react';
import 'jest-styled-components';
import { withProviders, withResultThemeProvider } from 'utils/testUtils';
import Result from './index';
import { Message } from './Result.styled';
import { Wrapper } from 'pages/Quiz/Quiz.styled';

describe('Result page', function () {
  let defaultTheme = 'LIGHT_GRID_LARGE_TEXT';
  let quizResult = { message: 'yes', date: '12/12/20' }

  it('should match snapshot', () => {
    const { container } = withProviders(<Result quizResult={quizResult} />, defaultTheme);

    expect(container).toMatchSnapshot();
  });

  it('should show correct themeMode on result', () => {
    const tree = withResultThemeProvider(<Message />, 'DARK_GRID_LARGE_TEXT').toJSON();

    expect(tree).toHaveStyleRule('background-color', '#121212');
    expect(tree).toHaveStyleRule('color', '#fff')
  })

  it('should show correct themeMode on body', () => {
    const tree = withResultThemeProvider(<Wrapper />, 'DARK_GRID_LARGE_TEXT').toJSON();

    expect(tree).toHaveStyleRule('background-color', '#080808');
  })
});
